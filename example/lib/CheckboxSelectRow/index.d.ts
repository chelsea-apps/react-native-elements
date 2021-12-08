import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
export declare type CheckboxSelectRowProps = {
    /** Text to be displayed on the left */
    label: string | React.ReactElement;
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
declare const CheckboxSelectRow: ({ label, selected, setSelected, style, textStyle, borderColor, selectionActiveColor, selectionDefaultColor, }: CheckboxSelectRowProps) => JSX.Element;
export default CheckboxSelectRow;
