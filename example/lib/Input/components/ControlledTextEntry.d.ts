import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { InputProps } from '..';
interface ControlledTextEntryProps extends InputProps {
    textEntryStyle?: StyleProp<TextStyle>;
    textEntryContainerStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    labelTopPosition?: number;
    labelBigFontSize?: number;
    labelSmallFontSize?: number;
    bgColor?: string;
    borderColor?: string;
    focusedBorderColor?: string;
    selectionColor?: string;
    textColor?: string;
    labelColor?: string;
    focusedLabelColor?: string;
    onSubmitEditing?: () => void;
}
declare const ControlledTextEntry: React.ForwardRefExoticComponent<ControlledTextEntryProps & React.RefAttributes<unknown>>;
export default ControlledTextEntry;
