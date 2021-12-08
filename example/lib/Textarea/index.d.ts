import { InputProps } from '../Input';
export interface TextareaProps extends InputProps {
}
/**
 * An input that expands its height
 * as a user types the text in
 */
declare const Textarea: ({ ...props }: TextareaProps) => JSX.Element;
export default Textarea;
