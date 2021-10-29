import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import {
  Control,
  Controller,
  FieldError,
  RegisterOptions,
  UseFormSetValue,
} from 'react-hook-form'
import { StyleProp, TextStyle, View } from 'react-native'
import { t } from 'react-native-tailwindcss'

import { FieldType } from '../Input'
import InputError from '../Input/components/InputError'
import InputPressable, { InputPressableProps } from '../InputPressable'

export interface TextareaLinkProps extends InputPressableProps {
  name?: string
  control?: Control<FieldType | any>
  validation?: RegisterOptions
  error?: FieldError
  defaultValue?: string
  setValue?: UseFormSetValue<FieldType | any>
  errorStyle?: StyleProp<TextStyle>
}

const TextareaLink = ({
  label,
  onPress,
  name,
  control,
  validation,
  error,
  setValue,
  defaultValue,
  errorStyle,
  ...props
}: TextareaLinkProps) => {
  const navigation = useNavigation<StackNavigationProp<any>>()
  const [linkValue, setLinkValue] = useState<string | undefined>()

  /**
   * Set Form Value after Typing
   */
  useEffect(() => {
    if (setValue && name && linkValue) setValue(name, linkValue)
  }, [setValue, name, linkValue])

  /**
   * Set Default Value
   */
  useEffect(() => {
    if (defaultValue) setLinkValue(defaultValue)
  }, [defaultValue])

  /**
   * On press action
   */
  // Add a controller to the other page and pass shit as params. Maybe even delete the controller from here and only keep the error
  const goToTypingPage = () => {
    if (onPress) return onPress()
    return navigation.navigate('TextareaEdit', {
      label,
      linkValue,
      setLinkValue,
    })
  }

  return (
    <View>
      <Controller
        name={name ?? ''}
        control={control}
        defaultValue={defaultValue}
        rules={validation}
        render={() => (
          <InputPressable
            label={label}
            value={linkValue}
            onPress={() => goToTypingPage()}
            {...props}
          />
        )}
      />

      {error && (
        <InputError error={error} errorStyle={[t._mT2, t.mB4, errorStyle]} />
      )}
    </View>
  )
}

export default TextareaLink
