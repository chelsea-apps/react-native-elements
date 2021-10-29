import React from 'react'
import { FieldError } from 'react-hook-form'
import { StyleProp, TextStyle } from 'react-native'
import { color, t } from 'react-native-tailwindcss'

import Txt from '../../Txt'
import OptionalWrapper from '../../Wrapper/OptionalWrapper'

const styles = {
  error: [t.textRed400, t.textSm, t.mT2],
}

type InputErrorProps = {
  error?: FieldError
  errorStyle?: StyleProp<TextStyle>
  textColor?: string
}

const InputError = ({ error, errorStyle, textColor }: InputErrorProps) => (
  <OptionalWrapper data={error?.message}>
    <Txt
      style={[styles.error, { color: textColor ?? color.red400 }, errorStyle]}
    >
      {error?.message}
    </Txt>
  </OptionalWrapper>
)

export default InputError
