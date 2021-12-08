import React from 'react';
import OptionalWrapperElement, {
	OptionalWrapperProps as OptionalWrapperElementProps,
} from '../../../../../lib/Wrapper/OptionalWrapper';

const OptionalWrapper = <T extends unknown>({
	...props
}: OptionalWrapperElementProps<T>) => <OptionalWrapperElement {...props} />;

export default OptionalWrapper;
