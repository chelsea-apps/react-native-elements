import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { ReactNode } from '../Txt';
import { IButtonProps } from './index';
export interface DefaultButtonProps extends IButtonProps {
    /** Text to show inside the button */
    children: ReactNode | string;
    /** Tailwind Styling -> Txt Component */
    textStyle?: StyleProp<TextStyle>;
    /** Tailwind styling -> TouchableOpacity Container */
    style?: StyleProp<ViewStyle>;
    /** Clickable / Non Clickable button */
    disabled?: boolean;
}
declare const DefaultButton: ({ children, style, textStyle, disabled, icon, ...props }: DefaultButtonProps) => JSX.Element;
export default DefaultButton;
