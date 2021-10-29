import React from 'react'
import { FieldError } from 'react-hook-form'
import { StyleProp, TextStyle } from 'react-native'
import { t } from 'react-native-tailwindcss'

import Txt from '../../Txt'
import OptionalWrapper from '../../Wrapper/OptionalWrapper'

type DropdownErrorProps = {
  error?: FieldError
  textStyle?: StyleProp<TextStyle>
}

const styles = {
  error: [t.textRed400, t.textSm, t.mT2],
}

const DropdownError = ({ error, textStyle }: DropdownErrorProps) => {
  return (
    <OptionalWrapper data={error?.message}>
      <Txt style={[styles.error, textStyle]}>{error?.message}</Txt>
    </OptionalWrapper>
  )
}

export default DropdownError
