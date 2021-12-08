import React from 'react';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainStack, { MainNavigator } from './main.navigator';
import OutsideStack, { OutsideNavigator } from './outside/outside.navigator';

export type GeneralNavigator = {
	Main: NavigatorScreenParams<MainNavigator>;
	Outside: NavigatorScreenParams<OutsideNavigator>;
};

const GeneralStack = () => {
	const Stack = createStackNavigator<GeneralNavigator>();

	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="Main" component={MainStack} />
			<Stack.Screen name="Outside" component={OutsideStack} />
		</Stack.Navigator>
	);
};

export default GeneralStack;
