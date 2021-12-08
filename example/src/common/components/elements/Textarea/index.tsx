import React from 'react';
import TextareaElement, {
	TextareaProps as TextareaElementProps,
} from '../../../../../lib/Textarea';

const Textarea = ({ ...props }: TextareaElementProps) => (
	<TextareaElement {...props} />
);

export default Textarea;
