import * as React from 'react'

// Button
import ButtonElement, { IButtonProps } from './Button'
import DefaultButtonElement, { DefaultButtonProps } from './Button/Default'
import OutlineButtonElement, { OutlineButtonProps } from './Button/Outline'
import RoundedButtonElement, { RoundedButtonProps } from './Button/Rounded'
// CheckboxSelectRow
import CheckboxSelectRowElement, {
  CheckboxSelectRowProps,
} from './CheckboxSelectRow'
// DropdownLink
import DropdownLinkElement, { DropdownLinkProps } from './DropdownLink'
// Icon
import IconElement, { IconProps } from './Icon'
// Input
import InputElement, { InputProps } from './Input'
// InputPressable
import InputPressableElement, { InputPressableProps } from './InputPressable'
// RadioSelectRow
import RadioSelectRowElement, { RadioSelectRowProps } from './RadioSelectRow'
// SwitchRow
import SwitchRowElement, { SwitchRowProps } from './SwitchRow'
// Textarea
import TextareaElement, { TextareaProps } from './Textarea'
// TextareaLink
import TextareaLinkElement, { TextareaLinkProps } from './TextareaLink'
// Txt
import TxtElement, { TxtProps } from './Txt'
// Wrapper
import WrapperElement, { WrapperProps } from './Wrapper'
import ErrorWrapperElement, { ErrorWrapperProps } from './Wrapper/ErrorWrapper'
import LoadingWrapperElement, {
  LoadingWrapperProps,
} from './Wrapper/LoadingWrapper'
import OptionalWrapperElement, {
  OptionalWrapperProps,
} from './Wrapper/OptionalWrapper'

/**
 *
 *
 *
 *
 */

// Button
export const Button = ({ ...props }: IButtonProps) => (
  <ButtonElement {...props} />
)
export const DefaultButton = ({ ...props }: DefaultButtonProps) => (
  <DefaultButtonElement {...props} />
)
export const OutlineButton = ({ ...props }: OutlineButtonProps) => (
  <OutlineButtonElement {...props} />
)
export const RoundedButton = ({ ...props }: RoundedButtonProps) => (
  <RoundedButtonElement {...props} />
)

// CheckboxSelectRow
export const CheckboxSelectRow = ({ ...props }: CheckboxSelectRowProps) => (
  <CheckboxSelectRowElement {...props} />
)

// DropdownLink
export const DropdownLink = ({ ...props }: DropdownLinkProps) => (
  <DropdownLinkElement {...props} />
)

// Icon
export const Icon = ({ ...props }: IconProps) => <IconElement {...props} />

// Input
export const Input = ({ ...props }: InputProps) => <InputElement {...props} />

// InputPressable
export const InputPressable = ({ ...props }: InputPressableProps) => (
  <InputPressableElement {...props} />
)

// RadioSelectRow
export const RadioSelectRow = ({ ...props }: RadioSelectRowProps) => (
  <RadioSelectRowElement {...props} />
)

// SwitchRow
export const SwitchRow = ({ ...props }: SwitchRowProps) => (
  <SwitchRowElement {...props} />
)

// Textarea
export const Textarea = ({ ...props }: TextareaProps) => (
  <TextareaElement {...props} />
)

// TextareaLink
export const TextareaLink = ({ ...props }: TextareaLinkProps) => (
  <TextareaLinkElement {...props} />
)

// Txt
export const Txt = ({ ...props }: TxtProps) => <TxtElement {...props} />

// Wrapper
export const Wrapper = ({ ...props }: WrapperProps) => (
  <WrapperElement {...props} />
)
export const LoadingWrapper = ({ ...props }: LoadingWrapperProps) => (
  <LoadingWrapperElement {...props} />
)
export const OptionalWrapper = <T extends unknown>({
  ...props
}: OptionalWrapperProps<T>) => <OptionalWrapperElement {...props} />
export const ErrorWrapper = ({ ...props }: ErrorWrapperProps) => (
  <ErrorWrapperElement {...props} />
)
