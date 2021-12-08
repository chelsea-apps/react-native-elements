import * as React from 'react';
// Button
import ButtonElement from './Button';
import DefaultButtonElement from './Button/Default';
import OutlineButtonElement from './Button/Outline';
import RoundedButtonElement from './Button/Rounded';
// CheckboxSelectRow
import CheckboxSelectRowElement from './CheckboxSelectRow';
// DropdownLink
import DropdownLinkElement from './DropdownLink';
// Icon
import IconElement from './Icon';
// Input
import InputElement from './Input';
// InputPressable
import InputPressableElement from './InputPressable';
// RadioSelectRow
import RadioSelectRowElement from './RadioSelectRow';
// SwitchRow
import SwitchRowElement from './SwitchRow';
// Textarea
import TextareaElement from './Textarea';
// TextareaLink
import TextareaLinkElement from './TextareaLink';
// Txt
import TxtElement from './Txt';
// Wrapper
import WrapperElement from './Wrapper';
import ErrorWrapperElement from './Wrapper/ErrorWrapper';
import LoadingWrapperElement from './Wrapper/LoadingWrapper';
import OptionalWrapperElement from './Wrapper/OptionalWrapper';
/**
 * Initial button component
 * @param props
 * @returns A pressable text.
 */
export const Button = ({ ...props }) => (React.createElement(ButtonElement, { ...props }));
/**
 * Button with a full background colors and rounded corners
 * @param props
 * @returns A pressable button.
 */
export const DefaultButton = ({ ...props }) => (React.createElement(DefaultButtonElement, { ...props }));
/**
 * Button with a transparent background color and rounded border
 * @param props
 * @returns A pressable button.
 */
export const OutlineButton = ({ ...props }) => (React.createElement(OutlineButtonElement, { ...props }));
/**
 * Button with a full background and full rounded corners
 * @param props
 * @returns A pressable button.
 */
export const RoundedButton = ({ ...props }) => (React.createElement(RoundedButtonElement, { ...props }));
/**
 * Checkbox Row Component to be used as part of selectDropdown page
 * @param props
 * @returns A pressable row that changes dropdown state.
 */
export const CheckboxSelectRow = ({ ...props }) => (React.createElement(CheckboxSelectRowElement, { ...props }));
/**
 * Dropdown Select Component
 * @param props
 * @returns A pressable container that links to the selection page.
 */
export const DropdownLink = ({ ...props }) => (React.createElement(DropdownLinkElement, { ...props }));
/**
 * Global Icon component
 * @param props
 * @returns Highly customizable Icon component that can output a Font icon (https://oblador.github.io/react-native-vector-icons/) or a custom SVG icon.
 */
export const Icon = ({ ...props }) => React.createElement(IconElement, { ...props });
/**
 * Animated Input Component
 * @param props
 * @returns Ready to use Input with validation from react hook form
 */
export const Input = ({ ...props }) => React.createElement(InputElement, { ...props });
/**
 * Static "fake" Input
 * @param props
 * @returns Input component that can be pressed
 */
export const InputPressable = ({ ...props }) => (React.createElement(InputPressableElement, { ...props }));
/**
 * Radio Row Component to be used as part of selectDropdown page
 * @param props
 * @returns A pressable row that changes dropdown state.
 */
export const RadioSelectRow = ({ ...props }) => (React.createElement(RadioSelectRowElement, { ...props }));
/**
 * Switch component
 * @param props
 * @returns A component that can change a boolean state with a switch. It's not part of the react hook form.
 */
export const SwitchRow = ({ ...props }) => (React.createElement(SwitchRowElement, { ...props }));
/**
 * Expandable Textarea component
 * @param props - Inherited from the InputProps
 * @returns A textarea that can change its height based on the value inside. Validation based on react-hook-form.
 */
export const Textarea = ({ ...props }) => (React.createElement(TextareaElement, { ...props }));
/**
 * Textarea component that links to a different page
 * @param props
 * @returns A textarea that changes the current page to enter the value. Dependent on textareaEdit page. Validation based on react-hook-form.
 */
export const TextareaLink = ({ ...props }) => (React.createElement(TextareaLinkElement, { ...props }));
/**
 * Global Text Component
 * @param props
 * @returns A text component that has the specific project fonts and sizing. To be used everywhere within the app.
 */
export const Txt = ({ ...props }) => React.createElement(TxtElement, { ...props });
/**
 * Wrapper component
 * @param props
 * @returns Component to be used as the main container on all pages.
 */
export const Wrapper = ({ ...props }) => (React.createElement(WrapperElement, { ...props }));
/**
 * Loading Wrapper component
 * @param props
 * @returns Container to be used as the loading indicator on all pages.
 */
export const LoadingWrapper = ({ ...props }) => (React.createElement(LoadingWrapperElement, { ...props }));
/**
 * A component that replaces the need to check for data in JSX (data ? <Component /> : <></>)
 * @param props
 * @returns A container view.
 */
export const OptionalWrapper = ({ ...props }) => React.createElement(OptionalWrapperElement, { ...props });
/**
 * A variation of the wrapper component.
 * @param props
 * @returns A Wrapper component that will check if there were any issues with the API Queries. Can be used only with CA GraphQL APIs.
 */
export const ErrorWrapper = ({ ...props }) => (React.createElement(ErrorWrapperElement, { ...props }));
//# sourceMappingURL=index.js.map