import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import Button from '../../elements/Button';
import Txt from '../../elements/Txt';
import Icon from '../../elements/Icon';

type BackButtonProps = {
	text?: string;
	textColor?: string;
	bgColor?: string;
	onPress: () => void;
	style?: StyleProp<ViewStyle>;
};

const styles = {
	container: [t.flexRow, t.itemsCenter, t.z10, t.p1, t.pY2, t.pX3, t.rounded],
	text: [t.fontSans],
};

const BackButton = ({
	text = 'Back',
	onPress,
	textColor,
	bgColor,
	style,
}: BackButtonProps) => {
	const tColor = textColor ?? color.black;
	return (
		<Button
			style={[
				styles.container,
				{ backgroundColor: bgColor ?? color.transparent },
				style,
			]}
			onPress={onPress}
		>
			<Icon
				type="font"
				fontName="Feather"
				name="chevron-left"
				size={22}
				color={color.black}
			/>
			<Txt style={[styles.text, { color: tColor }]}>{text}</Txt>
		</Button>
	);
};

export default BackButton;
