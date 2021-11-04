import React from 'react'
import { StyleProp, TextStyle, View } from 'react-native'
import { color, t } from 'react-native-tailwindcss'

import Txt from '../../Txt'
import OptionalWrapper from '../../Wrapper/OptionalWrapper'

const styles = {
  container: [t.flexRow, t.itemsCenter, t.mT2],
  icon: [t.mR2],
  info: [t.textWhite, t.textSm],
}

type InputInfoTextProps = {
  /** Info text string */
  text?: string
  /** Info text styling */
  infoStyle?: StyleProp<TextStyle>
  /** Info text color */
  textColor?: string
  /** Info text testID */
  testID?: string
}

const InputInfoText = ({
  text,
  infoStyle,
  textColor,
  testID,
}: InputInfoTextProps) => (
  <OptionalWrapper data={text}>
    <View style={styles.container}>
      <Txt
        style={[styles.info, { color: textColor ?? color.white }, infoStyle]}
        testID={testID}
      >
        {text}
      </Txt>
    </View>
  </OptionalWrapper>
)

export default InputInfoText
