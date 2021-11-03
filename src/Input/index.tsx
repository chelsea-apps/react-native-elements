import React from 'react'
import { Control, FieldError, RegisterOptions } from 'react-hook-form'
import {
  StyleProp,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import { color, t } from 'react-native-tailwindcss'

import ControlledTextEntry from './components/ControlledTextEntry'
import InputError from './components/InputError'
import InputInfoText from './components/InputInfoText'

export type FieldsErrors = {
  [x: string]: FieldError | undefined
}
export type FieldType = {
  [x: string]: string | number | boolean | undefined
}
export interface InputProps extends TextInputProps {
  /** React hook form name */
  name?: string
  /** React hook form control */
  control?: Control<FieldType | any>
  /** React hook form validation */
  validation?: RegisterOptions
  /** React hook form error */
  error?: FieldError
  /** Small text above the value */
  label?: string
  /** Pre-defined value */
  defaultValue?: string
  /** Small text between input container and input error */
  infoText?: string
  /** Icon to show at the start of the input container */
  icon?: React.ReactNode
  /** Additional action to be performed on input submission */
  onSubmitEditing?: () => void
  /** View Container styles - including errors and info text */
  style?: StyleProp<ViewStyle>
  /** Input value styles */
  textEntryStyle?: StyleProp<TextStyle>
  /** Input container styles */
  textEntryContainerStyle?: StyleProp<ViewStyle>
  /** Small Txt above value styles */
  labelStyle?: StyleProp<TextStyle>
  /** Text entry background color */
  bgColor?: string
  /** Text entry text color */
  textColor?: string
  /** Text entry border color */
  borderColor?: string
  /** Text entry border color on focused */
  focusedBorderColor?: string
  /** Small text above value color */
  labelColor?: string
  /** Text entry selection color */
  selectionColor?: string
  /** Text between error and container color */
  infoTextColor?: string
  /** Error text color */
  errorColor?: string
}

const Input = ({
  name,
  control,
  error,
  label,
  validation,
  onSubmitEditing,
  defaultValue,
  infoText,
  icon,
  style,
  textEntryStyle,
  textEntryContainerStyle,
  labelStyle,
  bgColor,
  textColor,
  borderColor,
  focusedBorderColor,
  labelColor,
  selectionColor,
  ...props
}: InputProps) => {
  return (
    <View style={[t.mB4, style]}>
      <ControlledTextEntry
        // Functionality
        name={name}
        control={control}
        validation={validation}
        defaultValue={defaultValue}
        label={label}
        onSubmitEditing={onSubmitEditing}
        icon={icon}
        // Styling
        textEntryStyle={textEntryStyle}
        textEntryContainerStyle={textEntryContainerStyle}
        labelStyle={labelStyle}
        bgColor={bgColor ?? color.transparent}
        textColor={textColor ?? color.white}
        borderColor={borderColor ?? color.yellow400}
        focusedBorderColor={focusedBorderColor ?? color.yellow400}
        selectionColor={selectionColor ?? color.white}
        labelColor={labelColor ?? color.gray400}
        {...props}
      />
      <InputInfoText
        // Functionality
        text={infoText}
        // Styling
        textColor={color.white}
      />
      <InputError
        // Functionality
        error={error}
        // Styling
        textColor={color.red400}
      />
    </View>
  )
}

export default Input
