import React from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { t } from 'react-native-tailwindcss'

import { ReactNode } from '../Txt'
import Button, { IButtonProps } from './index'

export interface DefaultButtonProps extends IButtonProps {
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
    t.bgYellow400,
    t.rounded,
    t.pY3,
    t.flexRow,
    t.itemsCenter,
    t.justifyCenter,
  ],
  text: [t.textLg, t.textCenter, t.textBlack, t.fontMedium],
}

const DefaultButton = ({
  children,
  style,
  textStyle,
  disabled,
  icon,
  ...props
}: DefaultButtonProps) => {
  return (
    <Button
      icon={icon}
      style={[styles.button, disabled && t.bgGray300, style]}
      textStyle={[styles.text, disabled && t.opacity25, textStyle]}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  )
}

export default DefaultButton
