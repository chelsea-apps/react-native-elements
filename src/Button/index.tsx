import React from 'react'
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'
import { t } from 'react-native-tailwindcss'

import Txt, { ReactNode } from '../Txt'

export interface IButtonProps extends TouchableOpacityProps {
  /** Text to show inside the button */
  children?: ReactNode | string
  /** Tailwind styling -> TouchableOpacity Container */
  style?: StyleProp<ViewStyle>
  /** Tailwind Styling -> Txt Component */
  textStyle?: StyleProp<TextStyle>
  /** Clickable / Non Clickable button */
  disabled?: boolean
  /** Icon component, sits left to the text */
  icon?: React.ReactNode
}

const styles = {
  button: [t.selfStretch, t.itemsCenter],
  text: [t.textBlack],
}

const Button = ({
  children,
  style,
  textStyle,
  disabled,
  icon,
  ...props
}: IButtonProps) => {
  return (
    <>
      <TouchableOpacity
        style={[styles.button, style]}
        disabled={disabled}
        {...props}
      >
        {icon && <Txt style={[t.mR2]}>{icon}</Txt>}
        {typeof children === 'string' ? (
          <Txt style={[styles.text, textStyle]}>{children}</Txt>
        ) : (
          [children]
        )}
      </TouchableOpacity>
    </>
  )
}

export default Button
