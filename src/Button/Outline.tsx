import React from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { t } from 'react-native-tailwindcss'

import { ReactNode } from '../Txt'
import Button, { IButtonProps } from './index'

export interface OutlineButtonProps extends IButtonProps {
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
  button: [
    t.border,
    t.borderYellow400,
    t.rounded,
    t.pY2,
    t.flexRow,
    t.itemsCenter,
    t.justifyCenter,
    t.pX4,
  ],
  text: [t.textCenter, t.textWhite, t.textLg, t.fontMedium],
}

const OutlineButton = ({
  children,
  style,
  textStyle,
  disabled,
  ...props
}: OutlineButtonProps) => {
  return (
    <Button
      style={[styles.button, disabled && t.borderGray300, style]}
      textStyle={[styles.text, disabled && t.opacity25, textStyle]}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  )
}

export default OutlineButton
