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
  /** Current dropdown state */
  dropdown?: DropdownState
  /** Change dropdown state */
  setDropdown?: React.Dispatch<SetStateAction<DropdownState>>
  /** React hook form control */
  control?: Control<FieldType | any>
  /** React hook form validation */
  validation?: RegisterOptions
  /** React hook form setValue */
  setValue?: UseFormSetValue<FieldType | any>
  /** React hook form error */
  error?: FieldError
  /** Optional prop to navigate to a different page than selectDropdown */
  navigateTo?: any
  /** If true, the dropdown is untappable */
  disabled?: boolean
  /** Additional action that should happen on press if needed */
  onPress?: () => void
  /** View container style */
  style?: StyleProp<ViewStyle>
  /** Empty selection placeholder Txt styles */
  placeholderStyle?: StyleProp<TextStyle>
  /** Small top label Txt styles */
  labelStyle?: StyleProp<TextStyle>
  /** Value Txt styles */
  textStyle?: StyleProp<TextStyle>
  /** Background color of the container */
  bgColor?: string
  /** Container border color */
  borderColor?: string
  /** Error Txt styles */
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
