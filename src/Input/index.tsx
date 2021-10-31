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
  // Functionality
  name?: string
  control?: Control<FieldType | any>
  label?: string
  validation?: RegisterOptions
  error?: FieldError
  defaultValue?: string
  infoText?: string
  onSubmitEditing?: () => void
  // Styling
  style?: StyleProp<ViewStyle>
  textEntryStyle?: StyleProp<TextStyle>
  labelStyle?: StyleProp<TextStyle>
  bgColor?: string
  textColor?: string
  borderColor?: string
  labelColor?: string
  selectionColor?: string
  infoTextColor?: string
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
  style,
  textEntryStyle,
  labelStyle,
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
        // Styling
        textEntryStyle={textEntryStyle}
        labelStyle={labelStyle}
        bgColor={color.transparent}
        textColor={color.white}
        borderColor={color.yellow400}
        selectionColor={color.white}
        labelColor={color.gray400}
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
