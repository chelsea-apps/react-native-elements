import React from 'react';
import WrapperElement, {
	WrapperProps as WrapperElementProps,
} from '../../../../../lib/Wrapper';

const Wrapper = ({ ...props }: WrapperElementProps) => (
	<WrapperElement {...props} />
);

export default Wrapper;
