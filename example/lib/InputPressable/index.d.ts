import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
export declare type IconStylingProps = {
    /** Icon component that should replace the default Font icon */
    icon?: React.ReactElement;
    /** Color of the current Font Icon color */
    iconColor?: string;
    /** Size of the current Font Icon color - default 24 */
    iconSize?: number;
    /** Styles of the Icon component */
    iconStyle?: StyleProp<ViewStyle>;
    /** Feather Icons icon name */
    iconName?: string;
};
export interface InputPressableProps extends IconStylingProps {
    /** Small text above the value */
    label: string;
    /** Value text*/
    value?: string;
    /** Action to be taken onPress */
    onPress?: () => void;
    /** If true, there will be no icon on the right side of the container */
    noIcon?: boolean;
    /** View Container styles - including errors and info text */
    style?: StyleProp<ViewStyle>;
    /** Value Txt styles */
    textStyle?: StyleProp<TextStyle>;
    /** Small Txt above value styles */
    labelStyle?: StyleProp<TextStyle>;
    /** Text in the middle styles - shows if no value is present */
    placeholderStyle?: StyleProp<TextStyle>;
    /** Container background color */
    bgColor?: string;
    /** Value text color */
    textColor?: string;
    /** Container border color */
    borderColor?: string;
    /** Small Txt above value color */
    labelColor?: string;
}
declare const InputPressable: ({ value, label, onPress, noIcon, style, textStyle, labelStyle, placeholderStyle, bgColor, textColor, borderColor, labelColor, icon, iconColor, iconSize, iconStyle, iconName, }: InputPressableProps) => JSX.Element;
export default InputPressable;
