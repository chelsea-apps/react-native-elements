import React from 'react';
import RadioSelectRowElement, {
	RadioSelectRowProps as RadioSelectRowElementProps,
} from '../../../../../lib/RadioSelectRow';

const RadioSelectRow = ({ ...props }: RadioSelectRowElementProps) => (
	<RadioSelectRowElement {...props} />
);

export default RadioSelectRow;
