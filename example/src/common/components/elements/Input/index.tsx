import React from 'react';
import InputElement, {
	InputProps as InputElementProps,
} from '../../../../../lib/Input';

const Input = ({ ...props }: InputElementProps) => <InputElement {...props} />;

export default Input;
