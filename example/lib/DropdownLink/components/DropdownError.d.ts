import { FieldError } from 'react-hook-form';
import { StyleProp, TextStyle } from 'react-native';
declare type DropdownErrorProps = {
    error?: FieldError;
    textStyle?: StyleProp<TextStyle>;
};
declare const DropdownError: ({ error, textStyle }: DropdownErrorProps) => JSX.Element;
export default DropdownError;
