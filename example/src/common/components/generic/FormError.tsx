import React from 'react';
import { t } from 'react-native-tailwindcss';
import { StyleProp, TextStyle } from 'react-native';
import Txt from '../elements/Txt';

type FormErrorProps = {
	style?: StyleProp<TextStyle>;
	children: string;
};

const styles = {
	error: [t.textPink400, t.pT2],
};

const FormError = ({ children, style }: FormErrorProps) => {
	return <Txt style={[styles.error, style]}>{children}</Txt>;
};

export default FormError;
