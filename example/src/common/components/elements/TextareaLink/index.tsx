import React from 'react';
import TextareaLinkElement, {
	TextareaLinkProps as TextareaLinkElementProps,
} from '../../../../../lib/TextareaLink';

const TextareaLink = ({ ...props }: TextareaLinkElementProps) => (
	<TextareaLinkElement {...props} />
);

export default TextareaLink;
