import React from 'react';
import { color, t } from 'react-native-tailwindcss';
import InputElement, {
	InputProps as InputElementProps,
} from '../../../../../lib/Input';

const Input = ({ ...props }: InputElementProps) => (
	<InputElement
		textEntryStyle={[t.textGray900, { fontSize: 16 }]}
		selectionColor={color.gray900}
		borderColor={color.gray300}
		focusedBorderColor={color.yellow400}
		bgColor={color.white}
		labelColor={color.gray900}
		focusedLabelColor={color.gray700}
		labelStyle={t.mT3}
		{...props}
	/>
);

export default Input;
