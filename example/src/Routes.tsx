import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import AuthStack from './screens/auth/auth.navigator';
import GeneralStack from './screens/main/general.navigator';

type RoutesProps = {
	isLoggedIn: boolean;
};

const Routes = ({ isLoggedIn }: RoutesProps) => {
	return (
		<View style={[t.flex1, t.bgGray900]}>
			<NavigationContainer
				// @ts-expect-error-next-line
				theme={{ colors: { background: color.gray100 } }}
			>
				{isLoggedIn ? <GeneralStack /> : <AuthStack />}
			</NavigationContainer>
		</View>
	);
};

export default Routes;
