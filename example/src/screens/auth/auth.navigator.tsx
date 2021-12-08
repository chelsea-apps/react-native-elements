import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './login/login.screen';
import ForgotPasswordScreen from './forgotPassword/forgotPassword.screen';
import { LoginNavigator } from './login/login.navigator';
import { ForgotPasswordNavigator } from './forgotPassword/forgotPassword.navigator';

export type AuthNavigator = {
	Login: LoginNavigator;
	'Forgot Password': ForgotPasswordNavigator;
};

const AuthStack = () => {
	const Stack = createStackNavigator<AuthNavigator>();

	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen
				name="Forgot Password"
				component={ForgotPasswordScreen}
			/>
		</Stack.Navigator>
	);
};

export default AuthStack;
