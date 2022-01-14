import { StyleProp, TextStyle } from 'react-native';
declare type InputLabelProps = {
    isFocused: boolean;
    value: string | undefined;
    currentValue: string | undefined;
    text?: string;
    labelStyle?: StyleProp<TextStyle>;
    labelColor?: string;
    focusedLabelColor?: string;
    labelTopPosition?: number;
    labelBigFontSize?: number;
    labelSmallFontSize?: number;
    testID?: string;
};
declare const InputLabel: ({ text, isFocused, value, currentValue, labelStyle, labelTopPosition, labelBigFontSize, labelSmallFontSize, labelColor, focusedLabelColor, testID, }: InputLabelProps) => JSX.Element;
export default InputLabel;
