import React from 'react';
import RoundedButtonElement, {
	RoundedButtonProps as RoundedButtonElementProps,
} from '../../../../../lib/Button/Rounded';

const RoundedButton = ({ ...props }: RoundedButtonElementProps) => (
	<RoundedButtonElement {...props} />
);

export default RoundedButton;
