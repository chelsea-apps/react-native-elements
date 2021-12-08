import { FieldError } from 'react-hook-form';
import { StyleProp, TextStyle } from 'react-native';
declare type InputErrorProps = {
    /** Field error */
    error?: FieldError;
    /** Error text style */
    errorStyle?: StyleProp<TextStyle>;
    /** Error text Color */
    textColor?: string;
    /** error testID */
    testID?: string;
};
declare const InputError: ({ error, errorStyle, textColor, testID, }: InputErrorProps) => JSX.Element;
export default InputError;
