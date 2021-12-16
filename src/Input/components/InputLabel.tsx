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
  currentValue: string | undefined
  text?: string
  labelStyle?: StyleProp<TextStyle>
  labelColor?: string
  focusedLabelColor?: string
  labelTopPosition?: number
  labelBigFontSize?: number
  labelSmallFontSize?: number
  testID?: string
}

const InputLabel = ({
  text,
  isFocused,
  value,
  defaultValue,
  currentValue,
  labelStyle,
  labelTopPosition,
  labelBigFontSize,
  labelSmallFontSize,
  labelColor,
  focusedLabelColor,
  testID,
}: InputLabelProps) => {
  const { animatedLabel, fadeIn, fadeOut } = useInputAnimations(
    value ?? '',
    defaultValue,
    labelTopPosition,
    labelBigFontSize,
    labelSmallFontSize
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
          {
            color:
              currentValue || defaultValue || value || isFocused
                ? focusedLabelColor
                : labelColor,
          },
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
