import React from 'react'
import { Text, TextProps } from 'react-native'
import { t } from 'react-native-tailwindcss'

export type ReactNode =
  | React.ReactChild
  | React.ReactFragment
  | React.ReactPortal
  | boolean
  | null
  | undefined

export interface TxtProps extends TextProps {
  /** Text | Component to be displayed */
  children: React.ReactNode
}

const styles = {
  defaultText: [t.fontSans, t.textWhite, t.textBase],
}

const Txt = ({ children, style, ...props }: TxtProps) => {
  return (
    <Text
      {...props}
      style={[styles.defaultText, style]}
      allowFontScaling={false}
    >
      {children}
    </Text>
  )
}

export default Txt
