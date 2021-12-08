import React, { useEffect, useState } from 'react';
import {
	NavigationProp,
	ParamListBase,
	RouteProp,
} from '@react-navigation/native';
import { LogBox } from 'react-native';
import { color, t } from 'react-native-tailwindcss';
import { DropdownItem, DropdownState } from '../../../../../lib/DropdownLink';
import Wrapper from '../../../../common/components/elements/Wrapper';
import { OutsideNavigator } from '../outside.navigator';
import SecondaryHeader from '../../../../common/components/extensive/SecondaryHeader';
import {} from '../../../../common/components/elements/DropdownLink';
import Button from '../../../../common/components/elements/Button';
import RadioSelectRow from '../../../../common/components/elements/RadioSelectRow';
import CheckboxSelectRow from '../../../../common/components/elements/CheckboxSelectRow';

type SelectDropdownScreenProps = {
	route: RouteProp<OutsideNavigator, 'SelectDropdown'>;
	navigation: NavigationProp<ParamListBase>;
};

const SelectDropdownScreen = ({
	route,
	navigation,
}: SelectDropdownScreenProps) => {
	const dropdown: DropdownState = route.params?.dropdown;
	const setDropdown: React.Dispatch<React.SetStateAction<DropdownState>> =
		route.params?.setDropdown;

	const [localDropdown, setLocalDropdown] = useState<DropdownState>(dropdown);

	/**
	 * Handle Radio Select
	 */
	const setRadioSelection = (field: DropdownItem) => {
		setLocalDropdown({
			...localDropdown,
			currentValues: [field],
		});
	};

	/**
	 * Handle Checkbox Select
	 */
	const setCheckboxSelection = (field: DropdownItem) => {
		const currentValues = localDropdown?.currentValues;
		const found = currentValues?.filter(
			(el) => el.value === field.value,
		)[0];
		if (found) {
			const withoutEl = currentValues?.filter(
				(el) => el.value !== found?.value,
			);
			return setLocalDropdown({
				...localDropdown,
				currentValues: withoutEl,
			});
		}
		return setLocalDropdown({
			...localDropdown,
			currentValues: localDropdown.currentValues
				? [...localDropdown.currentValues, field]
				: [field],
		});
	};

	/**
	 * Handle go back
	 */
	const handleGoBack = () => {
		setDropdown(localDropdown);
		navigation.goBack();
	};

	// Reason: Passing setDropdown as a route parameter
	useEffect(() => {
		LogBox.ignoreLogs([
			'Non-serializable values were found in the navigation state',
		]);
	}, []);

	return (
		<Wrapper type="fullScreenView" keyboardVerticalOffset={0}>
			<SecondaryHeader
				navigation={navigation}
				smallTitle={dropdown.label}
				onBackPress={handleGoBack}
				headerRight={<Button onPress={handleGoBack}>Save</Button>}
				headerRightBgColor={color.transparent}
			/>
			<Wrapper type="scrollView">
				{localDropdown.type === 'single' ? (
					<>
						{localDropdown.items?.map((item) => (
							<RadioSelectRow
								// Functionality
								label={item.label}
								selected={
									localDropdown.currentValues
										? localDropdown.currentValues[0]
												.value === item.value
										: false
								}
								setSelected={() => setRadioSelection(item)}
								key={item.label}
								// Styling
								borderColor={color.yellow400}
								textStyle={[t.fontSans, t.textWhite]}
								selectionDefaultColor={color.white}
								selectionActiveColor={color.yellow400}
							/>
						))}
					</>
				) : (
					<>
						{localDropdown?.items?.map((item) => (
							<CheckboxSelectRow
								// Functionality
								label={item.label}
								selected={
									!!localDropdown?.currentValues?.find(
										(el) => el.value === item.value,
									)
								}
								setSelected={() => setCheckboxSelection(item)}
								key={item.label}
								// Styling
								borderColor={color.yellow400}
								textStyle={[t.fontSans, t.textWhite]}
								selectionDefaultColor={color.white}
								selectionActiveColor={color.yellow400}
							/>
						))}
					</>
				)}
			</Wrapper>
		</Wrapper>
	);
};

export default SelectDropdownScreen;
