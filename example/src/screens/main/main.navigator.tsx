import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home/home.screen';
import { HomeNavigator } from './home/home.navigator';

export type MainNavigator = {
	Home: HomeNavigator;
};

const MainStack = () => {
	const Stack = createStackNavigator<MainNavigator>();

	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
	);
};

export default MainStack;
