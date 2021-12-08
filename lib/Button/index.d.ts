import React from 'react';
import { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';
import { ReactNode } from '../Txt';
export interface IButtonProps extends TouchableOpacityProps {
    /** Text to show inside the button */
    children?: ReactNode | string;
    /** Tailwind styling -> TouchableOpacity Container */
    style?: StyleProp<ViewStyle>;
    /** Tailwind Styling -> Txt Component */
    textStyle?: StyleProp<TextStyle>;
    /** Clickable / Non Clickable button */
    disabled?: boolean;
    /** Icon component, sits left to the text */
    icon?: React.ReactNode;
    /** Container Test ID */
    testID?: string;
    /** Inside Txt Test ID */
    textTestID?: string;
    /** Icon container (Txt) Test ID */
    iconTextID?: string;
}
declare const Button: ({ children, style, textStyle, disabled, icon, testID, textTestID, iconTextID, ...props }: IButtonProps) => JSX.Element;
export default Button;
