import React from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { t } from 'react-native-tailwindcss'

import { ReactNode } from '../Txt'
import Button, { IButtonProps } from './index'

export interface RoundedButtonProps extends IButtonProps {
  children: ReactNode | string
  textStyle?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
}

const styles = {
  button: [t.bgYellow400, t.roundedFull, t.pY3],
  text: [t.textCenter, t.textWhite],
}

/**
 * Button with a full background and full rounded cordenrs
 * @param children - Text to show inside the button
 * @param style - Tailwind styling -> TouchableOpacity Container
 * @param textStyle - Tailwind Styling -> Txt Component
 * @param ...props - Other Initial Button props
 * @returns A pressable button.
 */
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
