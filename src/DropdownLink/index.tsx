import React, { SetStateAction } from 'react'
import {
  Control,
  FieldError,
  RegisterOptions,
  UseFormSetValue,
} from 'react-hook-form'
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native'
import { t } from 'react-native-tailwindcss'

import { FieldType } from '../Input'
import { IconStylingProps } from '../InputPressable'
import ControlledDropdownPressable from './components/ControlledDropdownPressable'
import DropdownError from './components/DropdownError'

export interface DropdownLinkProps extends IconStylingProps {
  // Functionality
  dropdown?: DropdownState
  setDropdown?: React.Dispatch<SetStateAction<DropdownState>>
  control?: Control<FieldType | any>
  validation?: RegisterOptions
  setValue?: UseFormSetValue<FieldType | any>
  error?: FieldError
  navigateTo?: any
  disabled?: boolean
  onPress?: () => void
  // Styling
  style?: StyleProp<ViewStyle>
  placeholderStyle?: StyleProp<TextStyle>
  labelStyle?: StyleProp<TextStyle>
  textStyle?: StyleProp<TextStyle>
  bgColor?: string
  borderColor?: string
  errorTextStyle?: StyleProp<TextStyle>
  // + IconStylingProps
}

export type DropdownItem = {
  value: string
  label: string
}

export type DropdownState = {
  type: 'single' | 'multiple'
  label: string
  name: string
  items: DropdownItem[]
  currentValues: DropdownItem[] | undefined
}

const DropdownLink = ({
  // Functionality
  dropdown,
  setDropdown,
  control,
  validation,
  error,
  setValue,
  navigateTo,
  disabled,
  onPress,
  // Styling
  style,
  errorTextStyle,
  ...props
}: DropdownLinkProps) => {
  return (
    <View style={[t.mB4, style]}>
      <ControlledDropdownPressable
        // Functionality
        dropdown={dropdown}
        setDropdown={setDropdown}
        control={control}
        validation={validation}
        setValue={setValue}
        navigateTo={navigateTo}
        disabled={disabled}
        onPress={onPress}
        {...props}
      />
      <DropdownError error={error} textStyle={errorTextStyle} />
    </View>
  )
}

export default DropdownLink
