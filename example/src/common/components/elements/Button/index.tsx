import React from 'react';
import ButtonElement, {
	IButtonProps as ButtonElementProps,
} from '../../../../../lib/Button';

const Button = ({ ...props }: ButtonElementProps) => (
	<ButtonElement {...props} />
);

export default Button;
