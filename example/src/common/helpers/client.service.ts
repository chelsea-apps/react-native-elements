import {
	Client as UrqlClient,
	cacheExchange,
	createClient,
	dedupExchange,
	fetchExchange,
	subscriptionExchange,
	makeOperation,
} from 'urql';
import { authExchange } from '@urql/exchange-auth';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { StorageService } from './storage.service';
// import { RefreshDocument } from '../../generated/graphql';

type TokensBase = { accessToken: string; refreshToken: string };
type Tokens = TokensBase | null;

/**
 * Factory class to create an Urql client,
 * with helpers for token management
 */
export class Client {
	private client: UrqlClient;

	private subClient: SubscriptionClient;

	constructor(
		private url: string,
		private subUrl: string,
		private setLoggedIn: React.Dispatch<
			React.SetStateAction<boolean | null>
		>,
	) {
		this.client = this.buildClient();
		this.subClient = this.buildSubscriptionClient();
	}

	/**
	 * Get the current client instance
	 */
	getClient() {
		return this.client;
	}

	/**
	 * Login and save tokens
	 * @param accessToken Access token
	 * @param refreshToken Refresh token
	 */
	async login(accessToken: string, refreshToken: string) {
		this.log('Logging user in');
		await this.setTokens({ accessToken, refreshToken });
		this.setLoggedIn(true);
	}

	/**
	 * Trigger logout and clear tokens
	 * @param accessToken Access token
	 * @param refreshToken Refresh token
	 */
	logout() {
		this.log('Logging user out');
		this.removeTokens();
		this.setLoggedIn(false);
	}

	/**
	 * Get the access and refresh tokens from secure storage
	 */
	async getTokens(): Promise<Tokens> {
		const accessToken = await StorageService.get('accessToken');
		const refreshToken = await StorageService.get('refreshToken');
		if (accessToken && refreshToken) {
			return { accessToken, refreshToken };
		}
		return null;
	}

	/**
	 * Get the access and refresh tokens from secure storage
	 */
	private async setTokens({ accessToken, refreshToken }: TokensBase) {
		await StorageService.save('accessToken', accessToken);
		await StorageService.save('refreshToken', refreshToken);
	}

	/**
	 * Remove access & refresh token from storage
	 */
	private removeTokens() {
		StorageService.remove('accessToken');
		StorageService.remove('refreshToken');
	}

	/**
	 * Check if a token has expired (with 20 second buffer to allow for early refreshing)
	 * @param token
	 */
	private isTokenExpired(token: string) {
		const decodedToken = jwtDecode<JwtPayload>(token);
		if (!decodedToken || !decodedToken.exp) return true;

		const exp = Number(decodedToken.exp) * 1000;
		const expired = exp - 20000 < Date.now();

		if (expired) this.log('Token has expired');

		return expired;
	}

	/**
	 * Create a new subscription client instance
	 */
	private buildSubscriptionClient() {
		return new SubscriptionClient(this.subUrl, { reconnect: true });
	}

	/**
	 * Build an Urql Client instance
	 */
	private buildClient() {
		return createClient({
			url: this.url,
			exchanges: [
				dedupExchange,
				cacheExchange,
				authExchange({
					willAuthError: ({ authState: _authState }) => {
						const authState = _authState as Tokens;
						if (
							!authState ||
							this.isTokenExpired(authState.accessToken)
						)
							return true;

						return false;
					},
					didAuthError: ({ error }) => {
						const r = error.graphQLErrors.some(
							(e) => e.extensions?.code === 'UNAUTHENTICATED',
						);
						if (r)
							this.log(
								'User is unauthenticated, attempting refresh',
							);
						return r;
					},
					getAuth: async ({ authState: _authState, mutate }) => {
						const authState = _authState as Tokens;
						if (!authState) {
							const tokens = await this.getTokens();
							if (!tokens) this.logout();
							else
								await this.login(
									tokens.accessToken,
									tokens.refreshToken,
								);
							return tokens;
						}

						this.log('Refreshing tokens');

						const result = await mutate(RefreshDocument, {
							token: authState.refreshToken,
						});

						if (
							result.data?.refresh?.accessToken &&
							result.data?.refresh?.refreshToken
						) {
							await this.login(
								result.data?.refresh?.accessToken,
								result.data?.refresh?.refreshToken,
							);
							return result.data?.refresh;
						}

						this.logout();

						return null;
					},
					addAuthToOperation: ({
						authState: _authState,
						operation,
					}) => {
						const authState = _authState as Tokens;
						if (!authState || !authState.accessToken) {
							return operation;
						}

						const fetchOptions =
							typeof operation.context.fetchOptions === 'function'
								? operation.context.fetchOptions()
								: operation.context.fetchOptions || {};

						return makeOperation(operation.kind, operation, {
							...operation.context,
							fetchOptions: {
								...fetchOptions,
								headers: {
									...fetchOptions.headers,
									Authorization: `Bearer ${authState.accessToken}`,
								},
							},
						});
					},
				}),
				fetchExchange,
				subscriptionExchange({
					forwardSubscription: (operation) => {
						return this.subClient.request(operation);
					},
				}),
			],
		});
	}

	private log(message?: any, ...optionalParams: any[]) {
		// eslint-disable-next-line no-console
		console.log(
			`${new Date().toISOString()} - [Auth] : ${message} ${optionalParams.join(
				' ',
			)}`,
		);
	}
}
