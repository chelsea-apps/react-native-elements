import React from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { t } from 'react-native-tailwindcss'

import { ReactNode } from '../Txt'
import Button, { IButtonProps } from './index'

export interface RoundedButtonProps extends IButtonProps {
  /** Text to show inside the button */
  children: ReactNode | string
  /** Tailwind Styling -> Txt Component */
  textStyle?: StyleProp<TextStyle>
  /** Tailwind styling -> TouchableOpacity Container */
  style?: StyleProp<ViewStyle>
  /** Clickable / Non Clickable button */
  disabled?: boolean
}

const styles = {
  button: [t.bgYellow400, t.roundedFull, t.pY3],
  text: [t.textCenter, t.textWhite],
}

const RoundedButton = ({
  children,
  style,
  textStyle,
  disabled,
  ...props
}: RoundedButtonProps) => {
  return (
    <Button
      style={[styles.button, disabled && t.opacity25, style]}
      textStyle={[styles.text, disabled && t.opacity25, textStyle]}
      {...props}
    >
      {children}
    </Button>
  )
}

export default RoundedButton
