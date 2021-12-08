import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { ReactNode } from '../Txt';
import { IButtonProps } from './index';
export interface RoundedButtonProps extends IButtonProps {
    /** Text to show inside the button */
    children: ReactNode | string;
    /** Tailwind Styling -> Txt Component */
    textStyle?: StyleProp<TextStyle>;
    /** Tailwind styling -> TouchableOpacity Container */
    style?: StyleProp<ViewStyle>;
    /** Clickable / Non Clickable button */
    disabled?: boolean;
}
declare const RoundedButton: ({ children, style, textStyle, disabled, ...props }: RoundedButtonProps) => JSX.Element;
export default RoundedButton;
