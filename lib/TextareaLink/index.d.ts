import { Control, FieldError, RegisterOptions, UseFormSetValue } from 'react-hook-form';
import { StyleProp, TextStyle } from 'react-native';
import { FieldType } from '../Input';
import { InputPressableProps } from '../InputPressable';
export interface TextareaLinkProps extends InputPressableProps {
    /** React hook form name */
    name?: string;
    /** React hook form control */
    control?: Control<FieldType | any>;
    /** React hook form validation */
    validation?: RegisterOptions;
    /** React hook form error */
    error?: FieldError;
    /** Pre-defined value */
    defaultValue?: string;
    /** React hook form set value */
    setValue?: UseFormSetValue<FieldType | any>;
    /** Error Txt styles */
    errorStyle?: StyleProp<TextStyle>;
}
declare const TextareaLink: ({ label, onPress, name, control, validation, error, setValue, defaultValue, errorStyle, ...props }: TextareaLinkProps) => JSX.Element;
export default TextareaLink;
