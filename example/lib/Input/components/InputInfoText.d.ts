import { StyleProp, TextStyle } from 'react-native';
declare type InputInfoTextProps = {
    /** Info text string */
    text?: string;
    /** Info text styling */
    infoStyle?: StyleProp<TextStyle>;
    /** Info text color */
    textColor?: string;
    /** Info text testID */
    testID?: string;
};
declare const InputInfoText: ({ text, infoStyle, textColor, testID, }: InputInfoTextProps) => JSX.Element;
export default InputInfoText;
