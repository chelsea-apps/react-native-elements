import React from 'react'
import {
  StyleProp,
  Switch,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { color, t } from 'react-native-tailwindcss'

import Txt from '../Txt'

export type SwitchRowProps = {
  // Functionality
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  label: string
  // Styling
  style?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  labelActiveColor?: string
  labelDefaultColor?: string
  trackActiveColor?: string
  trackDefaultColor?: string
  thumbColor?: string
}

const styles = {
  container: [
    t.flexRow,
    t.justifyBetween,
    t.itemsCenter,
    t.borderOrange200,
    t.mB4,
    t.p4,
    t.border,
    t.borderYellow400,
    t.rounded,
  ],
}

const SwitchRow = ({
  // Functionality
  active,
  setActive,
  label,
  // Styling
  style,
  labelStyle,
  labelActiveColor,
  labelDefaultColor,
  trackActiveColor,
  trackDefaultColor,
  thumbColor,
}: SwitchRowProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => setActive(!active)}
      activeOpacity={1}
    >
      <View style={[t.flexRow, t.itemsCenter]}>
        <Txt
          style={[
            t.textLg,
            labelStyle,
            {
              color: !active
                ? labelDefaultColor ?? color.gray400
                : labelActiveColor ?? color.white,
            },
          ]}
        >
          {label}
        </Txt>
      </View>
      <Switch
        trackColor={{
          false: trackDefaultColor ?? color.black,
          true: trackActiveColor ?? color.yellow400,
        }}
        ios_backgroundColor={trackDefaultColor ?? color.black}
        thumbColor={thumbColor ?? '#f4f3f4'}
        onValueChange={(value) => setActive(value)}
        value={active}
      />
    </TouchableOpacity>
  )
}

export default SwitchRow
