import React from 'react';
import ErrorWrapperElement, {
	ErrorWrapperProps as ErrorWrapperElementProps,
} from '../../../../../lib/Wrapper/ErrorWrapper';

const ErrorWrapper = ({ ...props }: ErrorWrapperElementProps) => (
	<ErrorWrapperElement {...props} />
);

export default ErrorWrapper;
