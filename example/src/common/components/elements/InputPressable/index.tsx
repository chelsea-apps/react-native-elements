import React from 'react';
import InputPressableElement, {
	InputPressableProps as InputPressableElementProps,
} from '../../../../../lib/InputPressable';

const InputPressable = ({ ...props }: InputPressableElementProps) => (
	<InputPressableElement {...props} />
);

export default InputPressable;
