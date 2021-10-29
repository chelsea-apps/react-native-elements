import React from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { t } from 'react-native-tailwindcss'

import { ReactNode } from '../Txt'
import Button, { IButtonProps } from './index'

interface RoundedButtonProps extends IButtonProps {
  children: ReactNode | string
  textStyle?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
}

const styles = {
  button: [t.bgYellow400, t.roundedFull, t.pY3],
  text: [t.textCenter, t.textWhite],
}

const RoundedButton = ({
  children,
  style,
  textStyle,
  ...props
}: RoundedButtonProps) => {
  return (
    <Button
      style={[styles.button, style]}
      textStyle={[styles.text, textStyle]}
      {...props}
    >
      {children}
    </Button>
  )
}

export default RoundedButton
