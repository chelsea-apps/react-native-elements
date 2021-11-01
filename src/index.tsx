import * as React from 'react'
import { RegisterOptions } from 'react-hook-form'

// Button
import ButtonElement, { IButtonProps as ButtonElementProps } from './Button'
import DefaultButtonElement, {
  DefaultButtonProps as DefaultButtonElementProps,
} from './Button/Default'
import OutlineButtonElement, {
  OutlineButtonProps as OutlineButtonElementProps,
} from './Button/Outline'
import RoundedButtonElement, {
  RoundedButtonProps as RoundedButtonElementProps,
} from './Button/Rounded'
// CheckboxSelectRow
import CheckboxSelectRowElement, {
  CheckboxSelectRowProps as CheckboxSelectRowElementProps,
} from './CheckboxSelectRow'
// DropdownLink
import DropdownLinkElement, {
  DropdownItem as DropdownItemType,
  DropdownLinkProps as DropdownLinkElementProps,
  DropdownState as DropdownStateType,
} from './DropdownLink'
// Icon
import IconElement, { IconProps as IconElementProps } from './Icon'
// Input
import InputElement, {
  FieldsErrors as FieldsErrorsType,
  FieldType as FieldTypeType,
  InputProps as InputElementProps,
} from './Input'
// InputPressable
import InputPressableElement, {
  InputPressableProps as InputPressableElementProps,
} from './InputPressable'
// RadioSelectRow
import RadioSelectRowElement, {
  RadioSelectRowProps as RadioSelectRowElementProps,
} from './RadioSelectRow'
// SwitchRow
import SwitchRowElement, {
  SwitchRowProps as SwitchRowElementProps,
} from './SwitchRow'
// Textarea
import TextareaElement, {
  TextareaProps as TextareaElementProps,
} from './Textarea'
// TextareaLink
import TextareaLinkElement, {
  TextareaLinkProps as TextareaLinkElementProps,
} from './TextareaLink'
// Txt
import TxtElement, { TxtProps as TxtElementProps } from './Txt'
// Wrapper
import WrapperElement, { WrapperProps as WrapperElementProps } from './Wrapper'
import ErrorWrapperElement, {
  ErrorWrapperProps as ErrorWrapperElementProps,
} from './Wrapper/ErrorWrapper'
import LoadingWrapperElement, {
  LoadingWrapperProps as LoadingWrapperElementProps,
} from './Wrapper/LoadingWrapper'
import OptionalWrapperElement, {
  OptionalWrapperProps as OptionalWrapperElementProps,
} from './Wrapper/OptionalWrapper'

/**
 *
 *
 *
 *
 */

// Button
export interface ButtonProps extends ButtonElementProps {}
/**
 * Initial button component
 * @param props
 * @returns A pressable text.
 */
export const Button = ({ ...props }: ButtonProps) => (
  <ButtonElement {...props} />
)
export interface DefaultButtonProps extends DefaultButtonElementProps {}
/**
 * Button with a full background colors and rounded corners
 * @param props
 * @returns A pressable button.
 */
export const DefaultButton = ({ ...props }: DefaultButtonProps) => (
  <DefaultButtonElement {...props} />
)
export interface OutlineButtonProps extends OutlineButtonElementProps {}
/**
 * Button with a transparent background color and rounded border
 * @param props
 * @returns A pressable button.
 */
export const OutlineButton = ({ ...props }: OutlineButtonProps) => (
  <OutlineButtonElement {...props} />
)
export interface RoundedButtonProps extends RoundedButtonElementProps {}
/**
 * Button with a full background and full rounded corners
 * @param props
 * @returns A pressable button.
 */
export const RoundedButton = ({ ...props }: RoundedButtonProps) => (
  <RoundedButtonElement {...props} />
)

// CheckboxSelectRow
export interface CheckboxSelectRowProps extends CheckboxSelectRowElementProps {}
/**
 * Checkbox Row Component to be used as part of selectDropdown page
 * @param props
 * @returns A pressable row that changes dropdown state.
 */
export const CheckboxSelectRow = ({ ...props }: CheckboxSelectRowProps) => (
  <CheckboxSelectRowElement {...props} />
)

// DropdownLink
export interface DropdownState extends DropdownStateType {}
export interface DropdownItem extends DropdownItemType {}
export interface DropdownLinkProps extends DropdownLinkElementProps {}
/**
 * Dropdown Select Component
 * @param props
 * @returns A pressable container that links to the selection page.
 */
export const DropdownLink = ({ ...props }: DropdownLinkProps) => (
  <DropdownLinkElement {...props} />
)

// Icon
export interface IconProps extends IconElementProps {}
export const Icon = ({ ...props }: IconElementProps) => (
  <IconElement {...props} />
)

// Input
export interface FieldsErrors extends FieldsErrorsType {}
export interface FieldsType extends FieldTypeType {}
export type InputValidations<T> = { [K in keyof T]: RegisterOptions }
export interface InputProps extends InputElementProps {}
export const Input = ({ ...props }: InputProps) => <InputElement {...props} />

// InputPressable
export interface InputPressableProps extends InputPressableElementProps {}
export const InputPressable = ({ ...props }: InputPressableProps) => (
  <InputPressableElement {...props} />
)

// RadioSelectRow
export interface RadioSelectRowProps extends RadioSelectRowElementProps {}
export const RadioSelectRow = ({ ...props }: RadioSelectRowProps) => (
  <RadioSelectRowElement {...props} />
)

// SwitchRow
export interface SwitchRowProps extends SwitchRowElementProps {}
export const SwitchRow = ({ ...props }: SwitchRowProps) => (
  <SwitchRowElement {...props} />
)

// Textarea
export interface TextareaProps extends TextareaElementProps {}
export const Textarea = ({ ...props }: TextareaProps) => (
  <TextareaElement {...props} />
)

// TextareaLink
export interface TextareaLinkProps extends TextareaLinkElementProps {}
export const TextareaLink = ({ ...props }: TextareaLinkProps) => (
  <TextareaLinkElement {...props} />
)

// Txt
export interface TxtProps extends TxtElementProps {}
export const Txt = ({ ...props }: TxtProps) => <TxtElement {...props} />

// Wrapper
export interface WrapperProps extends WrapperElementProps {}
export const Wrapper = ({ ...props }: WrapperProps) => (
  <WrapperElement {...props} />
)
export interface LoadingWrapperProps extends LoadingWrapperElementProps {}
export const LoadingWrapper = ({ ...props }: LoadingWrapperProps) => (
  <LoadingWrapperElement {...props} />
)
export interface OptionalWrapperProps<T extends unknown>
  extends OptionalWrapperElementProps<T> {}
export const OptionalWrapper = <T extends unknown>({
  ...props
}: OptionalWrapperProps<T>) => <OptionalWrapperElement {...props} />
export interface ErrorWrapperProps extends ErrorWrapperElementProps {}
export const ErrorWrapper = ({ ...props }: ErrorWrapperProps) => (
  <ErrorWrapperElement {...props} />
)
