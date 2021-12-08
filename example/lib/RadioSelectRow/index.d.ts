import React, { ReactElement } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
export declare type RadioSelectRowProps = {
    /** Text to be displayed on the left */
    label: string | ReactElement;
    /** Current selection state */
    selected: boolean;
    /** Change current selection state */
    setSelected: React.Dispatch<React.SetStateAction<boolean>>;
    /** Container styles */
    style?: StyleProp<ViewStyle>;
    /** Label Txt component styles */
    textStyle?: StyleProp<TextStyle>;
    /** Border bottom color */
    borderColor?: string;
    /** Color when not selected */
    selectionDefaultColor?: string;
    /** Color when selected */
    selectionActiveColor?: string;
};
/**
 *  PART OF selectDropdown Screen
 *  TO NOT BE USED INDEPENDENT
 */
declare const RadioSelectRow: ({ label, selected, setSelected, style, textStyle, borderColor, selectionActiveColor, selectionDefaultColor, }: RadioSelectRowProps) => JSX.Element;
export default RadioSelectRow;
