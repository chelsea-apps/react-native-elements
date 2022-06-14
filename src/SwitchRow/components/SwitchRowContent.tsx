import React from 'react'
import { Switch, TouchableOpacity, View } from 'react-native'
import { color, t } from 'react-native-tailwindcss'
import { SwitchRowProps } from '../..'
import Txt from '../../Txt'

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

const SwitchRowContent = ({
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
  thumbActiveColor,
  toggleOnSwitchOnly,
}: SwitchRowProps) => {
  return (
    <View style={[styles.container, style]}>
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
      <TouchableOpacity
        onPress={() => setActive(!active)}
        activeOpacity={1}
        disabled={!toggleOnSwitchOnly}
      >
        <Switch
          trackColor={{
            false: trackDefaultColor ?? color.black,
            true: trackActiveColor ?? color.yellow400,
          }}
          ios_backgroundColor={trackDefaultColor ?? color.black}
          thumbColor={
            !active ? thumbColor ?? '#F4F3F4' : thumbActiveColor ?? '#F4F3F4'
          }
          onValueChange={(value) => setActive(value)}
          value={active}
        />
      </TouchableOpacity>
    </View>
  )
}

export default SwitchRowContent
