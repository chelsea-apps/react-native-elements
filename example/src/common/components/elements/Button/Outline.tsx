import React from 'react';
import OutlineButtonElement, {
	OutlineButtonProps as OutlineButtonElementProps,
} from '../../../../../lib/Button/Outline';

const OutlineButton = ({ ...props }: OutlineButtonElementProps) => (
	<OutlineButtonElement {...props} />
);

export default OutlineButton;
