import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SelectDropdownScreen from './selectDropdown/selectDropdown.screen';
import { SelectDropdownNavigator } from './selectDropdown/selectDropdown.navigator';
import { TextareaEditNavigator } from './textareaEdit/textareaEdit.navigator';
import TextareaEditScreen from './textareaEdit/textareaEdit.screen';
import { ElementsNavigator } from './elements/elements.navigator';
import ElementsScreen from './elements/elements.screen';

export type OutsideNavigator = {
	SelectDropdown: SelectDropdownNavigator;
	TextareaEdit: TextareaEditNavigator;
	Elements: ElementsNavigator;
};

const OutsideStack = () => {
	const Stack = createStackNavigator<OutsideNavigator>();

	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="Elements" component={ElementsScreen} />
			<Stack.Screen
				name="SelectDropdown"
				component={SelectDropdownScreen}
			/>
			<Stack.Screen name="TextareaEdit" component={TextareaEditScreen} />
		</Stack.Navigator>
	);
};

export default OutsideStack;
