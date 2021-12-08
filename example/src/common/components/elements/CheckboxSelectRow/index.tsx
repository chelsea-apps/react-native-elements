import React from 'react';
import CheckboxSelectRowElement, {
	CheckboxSelectRowProps as CheckboxSelectRowElementProps,
} from '../../../../../lib/CheckboxSelectRow';

const CheckboxSelectRow = ({ ...props }: CheckboxSelectRowElementProps) => (
	<CheckboxSelectRowElement {...props} />
);

export default CheckboxSelectRow;
