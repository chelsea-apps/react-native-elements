import React, { useEffect, useState } from 'react';
import {
	NavigationProp,
	ParamListBase,
	RouteProp,
} from '@react-navigation/native';
import { color, t } from 'react-native-tailwindcss';
import { TextInput } from 'react-native';
import Wrapper from '../../../../common/components/elements/Wrapper';
import { OutsideNavigator } from '../outside.navigator';
import SecondaryHeader from '../../../../common/components/extensive/SecondaryHeader';
import Button from '../../../../common/components/elements/Button';

const styles = {
	input: [t.borderB, t.borderYellow400, t.pY2, t.textBase, t.textWhite],
};

type TextareaEditScreenProps = {
	route: RouteProp<OutsideNavigator, 'TextareaEdit'>;
	navigation: NavigationProp<ParamListBase>;
};

const TextareaEditScreen = ({ route, navigation }: TextareaEditScreenProps) => {
	// Route Params
	const label: string = route.params?.label;
	const linkValue: string | undefined = route.params?.linkValue;
	const setLinkValue: React.Dispatch<
		React.SetStateAction<string | undefined>
	> = route.params?.setLinkValue;

	const [currentValue, setCurrentValue] = useState<string>('');

	useEffect(() => {
		if (linkValue) setCurrentValue(linkValue);
	}, [linkValue]);

	return (
		<Wrapper type="fullScreenView" keyboardVerticalOffset={10}>
			<SecondaryHeader
				navigation={navigation}
				smallTitle={label}
				headerRight={
					<Button
						onPress={() => {
							setLinkValue(currentValue);
							navigation.goBack();
						}}
					>
						Save
					</Button>
				}
				headerRightBgColor={color.transparent}
			/>
			<Wrapper type="scrollView">
				<TextInput
					multiline
					style={[styles.input]}
					onChangeText={(inputValue) => setCurrentValue(inputValue)}
					value={currentValue ?? ''}
					selectionColor={color.white}
					autoFocus
				/>
			</Wrapper>
		</Wrapper>
	);
};

export default TextareaEditScreen;
