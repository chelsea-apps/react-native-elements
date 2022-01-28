import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
export declare type SwitchRowProps = {
    /** Current selection state */
    active: boolean;
    /** Change current selection state */
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    /** Text to be displayed on the left */
    label: string;
    /** TouchableOpacity (View) container styles */
    style?: StyleProp<ViewStyle>;
    /** Left text styles */
    labelStyle?: StyleProp<TextStyle>;
    /** Color of the left text when the switch is active */
    labelActiveColor?: string;
    /** Color of the left text when the switch is not active */
    labelDefaultColor?: string;
    /** Color of the track text when the switch is active */
    trackActiveColor?: string;
    /** Color of the track text when the switch is not active */
    trackDefaultColor?: string;
    /** Color of the thumb text when the switch is not active */
    thumbColor?: string;
    /** Color of the thumb text when the switch is active */
    thumbActiveColor?: string;
};
declare const SwitchRow: ({ active, setActive, label, style, labelStyle, labelActiveColor, labelDefaultColor, trackActiveColor, trackDefaultColor, thumbColor, thumbActiveColor, }: SwitchRowProps) => JSX.Element;
export default SwitchRow;
