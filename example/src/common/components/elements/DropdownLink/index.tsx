import React from 'react';
import DropdownLinkElement, {
	DropdownLinkProps as DropdownLinkElementProps,
} from '../../../../../lib/DropdownLink';

const DropdownLink = ({ ...props }: DropdownLinkElementProps) => (
	<DropdownLinkElement {...props} />
);

export default DropdownLink;
