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
    ref: any;
}
declare const ControlledTextEntry: ({ name, control, validation, defaultValue, label, icon, onSubmitEditing, textEntryTestID, labelTestID, prefix, postfix, forceLabel, ref, textEntryStyle, textEntryContainerStyle, labelStyle, labelTopPosition, labelBigFontSize, labelSmallFontSize, bgColor, borderColor, focusedBorderColor, selectionColor, prefixStyle, postfixStyle, textColor, labelColor, focusedLabelColor, ...props }: ControlledTextEntryProps) => JSX.Element;
export default ControlledTextEntry;
