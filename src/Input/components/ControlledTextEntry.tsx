import React, { LegacyRef, useEffect, useRef, useState } from 'react'
import { Controller } from 'react-hook-form'
import {
  Keyboard,
  Platform,
  StyleProp,
  TextInput,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native'
import { t } from 'react-native-tailwindcss'

import { Txt } from '../..'
import OptionalWrapper from '../../Wrapper/OptionalWrapper'
import { InputProps } from '..'
import InputLabel from './InputLabel'

const styles = {
  inputContainer: [
    t.flexRow,
    t.itemsCenter,
    t.border,
    t.pX4,
    t.pT3,
    t.pB2,
    t.rounded,
  ],
  input: [t.wFull, t.fontSans],
  prefix: [t.fontSans, t.textGray900, t.mR1],
  postfix: [t.fontSans, t.textGray900, t.mL2],
}

interface ControlledTextEntryProps extends InputProps {
  textEntryStyle?: StyleProp<TextStyle>
  textEntryContainerStyle?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  labelTopPosition?: number
  labelBigFontSize?: number
  labelSmallFontSize?: number
  bgColor?: string
  borderColor?: string
  focusedBorderColor?: string
  selectionColor?: string
  textColor?: string
  labelColor?: string
  focusedLabelColor?: string
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
  prefix,
  postfix,
  // Styling
  textEntryStyle,
  textEntryContainerStyle,
  labelStyle,
  labelTopPosition,
  labelBigFontSize,
  labelSmallFontSize,
  bgColor,
  borderColor,
  focusedBorderColor,
  selectionColor,
  prefixStyle,
  postfixStyle,
  textColor,
  labelColor,
  focusedLabelColor,
  ...props
}: ControlledTextEntryProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [currentValue, setCurrentValue] = useState<string | undefined>(
    undefined
  )
  const inputRef = useRef<LegacyRef<TextInput> | undefined>()

  useEffect(() => {
    if (inputRef.current) {
      // @ts-expect-error-next-line
      if (isFocused) inputRef.current.focus()
      // @ts-expect-error-next-line
      else inputRef.current.blur()
    }
  }, [isFocused, inputRef])

  useEffect(() => {
    if (prefix || postfix) setIsFocused(true)
  }, [prefix, postfix])

  useEffect(() => {
    if (defaultValue) setCurrentValue(defaultValue)
  }, [defaultValue])

  return (
    <Controller
      name={name ?? ''}
      control={control}
      defaultValue={defaultValue}
      rules={validation}
      render={({ field: { onChange, onBlur, value } }) => (
        <TouchableWithoutFeedback onPress={() => setIsFocused(true)}>
          <View style={t.relative}>
            <OptionalWrapper data={label}>
              <InputLabel
                text={label}
                isFocused={isFocused}
                value={currentValue}
                defaultValue={defaultValue}
                currentValue={currentValue}
                labelColor={labelColor}
                focusedLabelColor={focusedLabelColor}
                labelStyle={labelStyle}
                labelTopPosition={labelTopPosition}
                labelBigFontSize={labelBigFontSize}
                labelSmallFontSize={labelSmallFontSize}
                testID={labelTestID}
              />
            </OptionalWrapper>
            <View
              style={[
                styles.inputContainer,
                label ? t.pT9 : t.pT4,
                postfix && t.pR10,
                {
                  borderColor: isFocused ? focusedBorderColor : borderColor,
                  backgroundColor: bgColor,
                },
                textEntryContainerStyle,
              ]}
            >
              <OptionalWrapper data={icon}>{icon}</OptionalWrapper>
              <OptionalWrapper data={prefix}>
                <Txt style={[styles.prefix, prefixStyle]}>{prefix}</Txt>
              </OptionalWrapper>
              <TextInput
                // @ts-expect-error-next-line
                ref={inputRef}
                style={[
                  styles.input,
                  Platform.OS === 'android' && [t._mY4, t._mL1],
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
                defaultValue={defaultValue}
                {...props}
              />
              <OptionalWrapper data={postfix}>
                <Txt style={[styles.postfix, postfixStyle]}>{postfix}</Txt>
              </OptionalWrapper>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    />
  )
}

export default ControlledTextEntry
