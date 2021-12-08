import React from 'react';
import DefaultButtonElement, {
	DefaultButtonProps as DefaultButtonElementProps,
} from '../../../../../lib/Button/Default';

const DefaultButton = ({ ...props }: DefaultButtonElementProps) => (
	<DefaultButtonElement {...props} />
);

export default DefaultButton;
