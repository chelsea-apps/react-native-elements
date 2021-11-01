import React from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { t } from 'react-native-tailwindcss'

import { ReactNode } from '../Txt'
import Button, { IButtonProps } from './index'

export interface DefaultButtonProps extends IButtonProps {
  children: ReactNode | string
  textStyle?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
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

/**
 * Button with a full background color and rounded corners
 * @param children - Text to show inside the button
 * @param style - Tailwind styling -> TouchableOpacity Container
 * @param textStyle - Tailwind Styling -> Txt Component
 * @param disabled - Clickable / Non Clickable button
 * @param icon - Icon component, sits left to the
 * @param ...props - Other Initial Button
 * @returns A pressable button.
 */
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
