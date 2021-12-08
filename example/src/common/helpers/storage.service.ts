import * as SecureStore from 'expo-secure-store';

/**
 * A store for sensitive values.
 * All values are cached to speed up access.
 */
export class StorageService {
	// Local cache as there can be a delay accessing from SecureStore
	static cache: { [key: string]: string } = {};

	/**
	 * Securely store a value
	 * @param key
	 * @param value
	 */
	static async save(key: string, value: string) {
		this.cache[key] = value;
		await SecureStore.setItemAsync(key, value);
	}

	/**
	 * Get a sensitive value from the store via cache
	 * @param key Key representing a value
	 */
	static async get(key: string): Promise<string | null> {
		// Check secure store first
		const value = this.cache[key];
		if (value) return value;

		// Otherwise check secure store
		let storedValue: string | null = null;
		try {
			storedValue = await SecureStore.getItemAsync(key);
			if (storedValue) this.cache[key] = storedValue;
		} catch (err) {
			// eslint-disable-next-line no-console
			console.log(err);
		}
		return storedValue;
	}

	/**
	 * Evict a secure value from the store & cache
	 * @param key Key of value to remove
	 */
	static async remove(key: string) {
		if (this.cache[key]) delete this.cache[key];
		try {
			await SecureStore.deleteItemAsync(key);
		} catch (err) {
			// eslint-disable-next-line no-console
			console.log(err);
		}
	}
}
