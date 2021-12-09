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
  /** Focused small text above value color */
  focusedLabelColor?: string
  /** Text entry selection color */
  selectionColor?: string
  /** infoText Styling */
  infoTextStyle?: StyleProp<TextStyle>
  /** Text between error and container color */
  infoTextColor?: string
  /** Error text color */
  errorColor?: string
  /** Error text styling */
  errorStyle?: StyleProp<TextStyle>
  /** Container Test ID */
  testID?: string
  /** Text Entry Test ID */
  textEntryTestID?: string
  /** Label Test ID */
  labelTestID?: string
  /** Info text Test ID */
  infoTextTestID?: string
  /** Error Test ID */
  errorTestID?: string
}

const Input = ({
  name,
  control,
  error,
  errorTestID,
  errorColor,
  errorStyle,
  label,
  validation,
  onSubmitEditing,
  defaultValue,
  infoText,
  infoTextStyle,
  infoTextColor,
  infoTextTestID,
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
  focusedLabelColor,
  selectionColor,
  testID,
  textEntryTestID,
  labelTestID,
  ...props
}: InputProps) => {
  return (
    <View style={[t.mB4, style]} testID={testID}>
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
        borderColor={borderColor ?? color.gray400}
        focusedBorderColor={focusedBorderColor ?? color.yellow400}
        selectionColor={selectionColor ?? color.white}
        labelColor={labelColor ?? color.gray900}
        focusedLabelColor={focusedLabelColor ?? color.gray700}
        textEntryTestID={textEntryTestID}
        labelTestID={labelTestID}
        {...props}
      />
      <InputInfoText
        // Functionality
        text={infoText}
        testID={infoTextTestID}
        // Styling
        textColor={infoTextColor ?? color.white}
        infoStyle={infoTextStyle}
      />
      <InputError
        // Functionality
        error={error}
        testID={errorTestID}
        // Styling
        textColor={errorColor ?? color.red400}
        errorStyle={errorStyle}
      />
    </View>
  )
}

export default Input
