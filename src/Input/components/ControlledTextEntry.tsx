import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import {
  Keyboard,
  StyleProp,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import { t } from 'react-native-tailwindcss'

import OptionalWrapper from '../../Wrapper/OptionalWrapper'
import { InputProps } from '..'
import InputLabel from './InputLabel'

const styles = {
  inputContainer: [t.flexRow, t.itemsCenter, t.border, t.p4, t.rounded],
  input: [t.textBase, t.wFull],
}

interface ControlledTextEntryProps extends InputProps {
  textEntryStyle?: StyleProp<TextStyle>
  textEntryContainerStyle?: StyleProp<ViewStyle>
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
  textEntryTestID,
  labelTestID,
  // Styling
  textEntryStyle,
  textEntryContainerStyle,
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
          <OptionalWrapper data={label}>
            <InputLabel
              text={label}
              isFocused={isFocused}
              value={currentValue}
              defaultValue={defaultValue}
              labelColor={labelColor}
              labelStyle={labelStyle}
              testID={labelTestID}
            />
          </OptionalWrapper>
          <View
            style={[
              styles.inputContainer,
              label ? t.pT10 : t.pT4,
              {
                borderColor: isFocused ? focusedBorderColor : borderColor,
                backgroundColor: bgColor,
              },
              textEntryContainerStyle,
            ]}
          >
            <OptionalWrapper data={icon}>{icon}</OptionalWrapper>
            <TextInput
              style={[
                styles.input,
                {
                  color: textColor,
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
              testID={textEntryTestID}
              {...props}
            />
          </View>
        </View>
      )}
    />
  )
}

export default ControlledTextEntry
