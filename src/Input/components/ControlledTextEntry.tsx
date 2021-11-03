import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { Keyboard, StyleProp, TextInput, TextStyle, View } from 'react-native'
import { t } from 'react-native-tailwindcss'

import OptionalWrapper from '../../Wrapper/OptionalWrapper'
import { InputProps } from '..'
import InputLabel from './InputLabel'

const styles = {
  input: [t.border, t.p4, t.rounded, t.textBase],
}

interface ControlledTextEntryProps extends InputProps {
  textEntryStyle?: StyleProp<TextStyle>
  labelStyle?: StyleProp<TextStyle>
  bgColor?: string
  borderColor?: string
  focusedBorderColor?: string
  selectionColor?: string
  textColor?: string
  labelColor?: string
  onSubmitEditing?: () => void
}

const ControlledTextEntry = ({
  // Functionality
  name,
  control,
  validation,
  defaultValue,
  label,
  icon,
  onSubmitEditing,
  // Styling
  textEntryStyle,
  labelStyle,
  bgColor,
  borderColor,
  focusedBorderColor,
  selectionColor,
  textColor,
  labelColor,
  ...props
}: ControlledTextEntryProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [currentValue, setCurrentValue] = useState<string | undefined>(
    undefined
  )
  return (
    <Controller
      name={name ?? ''}
      control={control}
      defaultValue={defaultValue}
      rules={validation}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={t.relative}>
          <OptionalWrapper data={icon}>{icon}</OptionalWrapper>
          <OptionalWrapper data={label}>
            <InputLabel
              text={label}
              isFocused={isFocused}
              value={currentValue}
              defaultValue={defaultValue}
              labelColor={labelColor}
              labelStyle={labelStyle}
            />
          </OptionalWrapper>
          <TextInput
            style={[
              styles.input,
              label ? t.pT10 : t.pT4,
              {
                color: textColor,
                borderColor: isFocused ? focusedBorderColor : borderColor,
                backgroundColor: bgColor,
              },
              textEntryStyle,
            ]}
            onFocus={() => {
              setIsFocused(true)
            }}
            onBlur={() => {
              onBlur()
              setIsFocused(false)
            }}
            onChangeText={(inputValue) => {
              setCurrentValue(inputValue)
              onChange(inputValue)
            }}
            value={value}
            onSubmitEditing={() =>
              onSubmitEditing ? onSubmitEditing() : Keyboard.dismiss()
            }
            selectionColor={selectionColor}
            placeholder='' // Needed to not be passed accidentally
            {...props}
          />
        </View>
      )}
    />
  )
}

export default ControlledTextEntry
