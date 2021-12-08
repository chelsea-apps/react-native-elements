import { RegisterOptions } from 'react-hook-form';
import { IButtonProps as ButtonElementProps } from './Button';
import { DefaultButtonProps as DefaultButtonElementProps } from './Button/Default';
import { OutlineButtonProps as OutlineButtonElementProps } from './Button/Outline';
import { RoundedButtonProps as RoundedButtonElementProps } from './Button/Rounded';
import { CheckboxSelectRowProps as CheckboxSelectRowElementProps } from './CheckboxSelectRow';
import { DropdownItem as DropdownItemType, DropdownLinkProps as DropdownLinkElementProps, DropdownState as DropdownStateType } from './DropdownLink';
import { IconProps as IconElementProps } from './Icon';
import { FieldsErrors as FieldsErrorsType, FieldType as FieldTypeType, InputProps as InputElementProps } from './Input';
import { InputPressableProps as InputPressableElementProps } from './InputPressable';
import { RadioSelectRowProps as RadioSelectRowElementProps } from './RadioSelectRow';
import { SwitchRowProps as SwitchRowElementProps } from './SwitchRow';
import { TextareaProps as TextareaElementProps } from './Textarea';
import { TextareaLinkProps as TextareaLinkElementProps } from './TextareaLink';
import { TxtProps as TxtElementProps } from './Txt';
import { WrapperProps as WrapperElementProps } from './Wrapper';
import { ErrorWrapperProps as ErrorWrapperElementProps } from './Wrapper/ErrorWrapper';
import { LoadingWrapperProps as LoadingWrapperElementProps } from './Wrapper/LoadingWrapper';
import { OptionalWrapperProps as OptionalWrapperElementProps } from './Wrapper/OptionalWrapper';
/**
 *
 *
 *
 *
 */
export interface ButtonProps extends ButtonElementProps {
}
/**
 * Initial button component
 * @param props
 * @returns A pressable text.
 */
export declare const Button: ({ ...props }: ButtonProps) => JSX.Element;
export interface DefaultButtonProps extends DefaultButtonElementProps {
}
/**
 * Button with a full background colors and rounded corners
 * @param props
 * @returns A pressable button.
 */
export declare const DefaultButton: ({ ...props }: DefaultButtonProps) => JSX.Element;
export interface OutlineButtonProps extends OutlineButtonElementProps {
}
/**
 * Button with a transparent background color and rounded border
 * @param props
 * @returns A pressable button.
 */
export declare const OutlineButton: ({ ...props }: OutlineButtonProps) => JSX.Element;
export interface RoundedButtonProps extends RoundedButtonElementProps {
}
/**
 * Button with a full background and full rounded corners
 * @param props
 * @returns A pressable button.
 */
export declare const RoundedButton: ({ ...props }: RoundedButtonProps) => JSX.Element;
export interface CheckboxSelectRowProps extends CheckboxSelectRowElementProps {
}
/**
 * Checkbox Row Component to be used as part of selectDropdown page
 * @param props
 * @returns A pressable row that changes dropdown state.
 */
export declare const CheckboxSelectRow: ({ ...props }: CheckboxSelectRowProps) => JSX.Element;
export interface DropdownState extends DropdownStateType {
}
export interface DropdownItem extends DropdownItemType {
}
export interface DropdownLinkProps extends DropdownLinkElementProps {
}
/**
 * Dropdown Select Component
 * @param props
 * @returns A pressable container that links to the selection page.
 */
export declare const DropdownLink: ({ ...props }: DropdownLinkProps) => JSX.Element;
export interface IconProps extends IconElementProps {
}
/**
 * Global Icon component
 * @param props
 * @returns Highly customizable Icon component that can output a Font icon (https://oblador.github.io/react-native-vector-icons/) or a custom SVG icon.
 */
export declare const Icon: ({ ...props }: IconProps) => JSX.Element;
export interface FieldsErrors extends FieldsErrorsType {
}
export interface FieldsType extends FieldTypeType {
}
export declare type InputValidations<T> = {
    [K in keyof T]: RegisterOptions;
};
export interface InputProps extends InputElementProps {
}
/**
 * Animated Input Component
 * @param props
 * @returns Ready to use Input with validation from react hook form
 */
export declare const Input: ({ ...props }: InputProps) => JSX.Element;
export interface InputPressableProps extends InputPressableElementProps {
}
/**
 * Static "fake" Input
 * @param props
 * @returns Input component that can be pressed
 */
export declare const InputPressable: ({ ...props }: InputPressableProps) => JSX.Element;
export interface RadioSelectRowProps extends RadioSelectRowElementProps {
}
/**
 * Radio Row Component to be used as part of selectDropdown page
 * @param props
 * @returns A pressable row that changes dropdown state.
 */
export declare const RadioSelectRow: ({ ...props }: RadioSelectRowProps) => JSX.Element;
export interface SwitchRowProps extends SwitchRowElementProps {
}
/**
 * Switch component
 * @param props
 * @returns A component that can change a boolean state with a switch. It's not part of the react hook form.
 */
export declare const SwitchRow: ({ ...props }: SwitchRowProps) => JSX.Element;
export interface TextareaProps extends TextareaElementProps {
}
/**
 * Expandable Textarea component
 * @param props - Inherited from the InputProps
 * @returns A textarea that can change its height based on the value inside. Validation based on react-hook-form.
 */
export declare const Textarea: ({ ...props }: TextareaProps) => JSX.Element;
export interface TextareaLinkProps extends TextareaLinkElementProps {
}
/**
 * Textarea component that links to a different page
 * @param props
 * @returns A textarea that changes the current page to enter the value. Dependent on textareaEdit page. Validation based on react-hook-form.
 */
export declare const TextareaLink: ({ ...props }: TextareaLinkProps) => JSX.Element;
export interface TxtProps extends TxtElementProps {
}
/**
 * Global Text Component
 * @param props
 * @returns A text component that has the specific project fonts and sizing. To be used everywhere within the app.
 */
export declare const Txt: ({ ...props }: TxtProps) => JSX.Element;
export interface WrapperProps extends WrapperElementProps {
}
/**
 * Wrapper component
 * @param props
 * @returns Component to be used as the main container on all pages.
 */
export declare const Wrapper: ({ ...props }: WrapperProps) => JSX.Element;
export interface LoadingWrapperProps extends LoadingWrapperElementProps {
}
/**
 * Loading Wrapper component
 * @param props
 * @returns Container to be used as the loading indicator on all pages.
 */
export declare const LoadingWrapper: ({ ...props }: LoadingWrapperProps) => JSX.Element;
export interface OptionalWrapperProps<T extends unknown> extends OptionalWrapperElementProps<T> {
}
/**
 * A component that replaces the need to check for data in JSX (data ? <Component /> : <></>)
 * @param props
 * @returns A container view.
 */
export declare const OptionalWrapper: <T extends unknown>({ ...props }: OptionalWrapperProps<T>) => JSX.Element;
export interface ErrorWrapperProps extends ErrorWrapperElementProps {
}
/**
 * A variation of the wrapper component.
 * @param props
 * @returns A Wrapper component that will check if there were any issues with the API Queries. Can be used only with CA GraphQL APIs.
 */
export declare const ErrorWrapper: ({ ...props }: ErrorWrapperProps) => JSX.Element;
