import React, { useEffect } from 'react'
import { Animated, StyleProp, TextStyle } from 'react-native'
import { t } from 'react-native-tailwindcss'

import OptionalWrapper from '../../Wrapper/OptionalWrapper'
import useInputAnimations from '../hooks/useInputAnimations'

const styles = {
  label: [
    t.textGray400,
    t.fontSans,
    t.absolute,
    t.textBase,
    t.top0,
    t.left0,
    t.mL4,
    t.mT4,
    t.textBase,
    { zIndex: 1 },
  ],
}

type InputLabelProps = {
  isFocused: boolean
  value: string | undefined
  defaultValue: string | undefined
  text?: string
  labelStyle?: StyleProp<TextStyle>
  labelColor?: string
  focusedLabelColor?: string
  testID?: string
}

const InputLabel = ({
  text,
  isFocused,
  value,
  defaultValue,
  labelStyle,
  labelColor,
  focusedLabelColor,
  testID,
}: InputLabelProps) => {
  const { animatedLabel, fadeIn, fadeOut } = useInputAnimations(
    value ?? '',
    defaultValue
  )

  useEffect(
    () => (isFocused || value || defaultValue ? fadeIn() : fadeOut()),
    [isFocused, fadeIn, value, defaultValue, fadeOut]
  )

  return (
    <OptionalWrapper data={text}>
      <Animated.Text
        style={[
          styles.label,
          { ...animatedLabel },
          { color: isFocused ? focusedLabelColor : labelColor },
          labelStyle,
        ]}
        testID={testID}
      >
        {text}
      </Animated.Text>
    </OptionalWrapper>
  )
}

export default InputLabel
