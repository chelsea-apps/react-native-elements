import React from 'react';
import LoadingWrapperElement, {
	LoadingWrapperProps as LoadingWrapperElementProps,
} from '../../../../../lib/Wrapper/LoadingWrapper';

const LoadingWrapper = ({ ...props }: LoadingWrapperElementProps) => (
	<LoadingWrapperElement {...props} />
);

export default LoadingWrapper;
