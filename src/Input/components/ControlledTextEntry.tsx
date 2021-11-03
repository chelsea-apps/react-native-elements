import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { Keyboard, StyleProp, TextInput, TextStyle, View } from 'react-native'
import { color, t } from 'react-native-tailwindcss'

import { InputProps } from '..'
import InputLabel from './InputLabel'

const styles = {
  input: [t.border, t.p4, t.pT10, t.rounded, t.textBase],
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
          <InputLabel
            text={label}
            isFocused={isFocused}
            value={currentValue}
            defaultValue={defaultValue}
            labelColor={labelColor}
            labelStyle={labelStyle}
          />
          <TextInput
            style={[
              styles.input,
              {
                color: textColor ?? color.white,
                borderColor: isFocused
                  ? focusedBorderColor ?? color.yellow400
                  : borderColor ?? color.yellow400,
                backgroundColor: bgColor ?? color.transparent,
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
            selectionColor={selectionColor ?? color.white}
            placeholder='' // Needed to not be passed accidentally
            {...props}
          />
        </View>
      )}
    />
  )
}

export default ControlledTextEntry
