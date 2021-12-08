import React from 'react';
import SwitchRowElement, {
	SwitchRowProps as SwitchRowElementProps,
} from '../../../../../lib/SwitchRow';

const SwitchRow = ({ ...props }: SwitchRowElementProps) => (
	<SwitchRowElement {...props} />
);

export default SwitchRow;
