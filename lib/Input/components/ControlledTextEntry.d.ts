import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { InputProps } from '..';
interface ControlledTextEntryProps extends InputProps {
    textEntryStyle?: StyleProp<TextStyle>;
    textEntryContainerStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    bgColor?: string;
    borderColor?: string;
    focusedBorderColor?: string;
    selectionColor?: string;
    textColor?: string;
    labelColor?: string;
    focusedLabelColor?: string;
    onSubmitEditing?: () => void;
}
declare const ControlledTextEntry: ({ name, control, validation, defaultValue, label, icon, onSubmitEditing, textEntryTestID, labelTestID, textEntryStyle, textEntryContainerStyle, labelStyle, bgColor, borderColor, focusedBorderColor, selectionColor, textColor, labelColor, focusedLabelColor, ...props }: ControlledTextEntryProps) => JSX.Element;
export default ControlledTextEntry;
