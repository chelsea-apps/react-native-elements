import { StyleProp, TextStyle } from 'react-native';
declare type InputLabelProps = {
    isFocused: boolean;
    value: string | undefined;
    defaultValue: string | undefined;
    text?: string;
    labelStyle?: StyleProp<TextStyle>;
    labelColor?: string;
    testID?: string;
};
declare const InputLabel: ({ text, isFocused, value, defaultValue, labelStyle, labelColor, testID, }: InputLabelProps) => JSX.Element;
export default InputLabel;
