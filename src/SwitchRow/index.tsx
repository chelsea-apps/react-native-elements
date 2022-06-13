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
  /** Current selection state */
  active: boolean
  /** Change current selection state */
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  /** Text to be displayed on the left */
  label: string
  /** TouchableOpacity (View) container styles */
  style?: StyleProp<ViewStyle>
  /** Left text styles */
  labelStyle?: StyleProp<TextStyle>
  /** Color of the left text when the switch is active */
  labelActiveColor?: string
  /** Color of the left text when the switch is not active */
  labelDefaultColor?: string
  /** Color of the track text when the switch is active */
  trackActiveColor?: string
  /** Color of the track text when the switch is not active */
  trackDefaultColor?: string
  /** Color of the thumb text when the switch is not active */
  thumbColor?: string
  /** Color of the thumb text when the switch is active */
  thumbActiveColor?: string
  /** Boolean to set touch area for toggling switch */
  toggleOnSwitchIconPressOnly?: boolean
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
  thumbActiveColor,
  toggleOnSwitchIconPressOnly = false,
}: SwitchRowProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => setActive(!active)}
      activeOpacity={1}
      disabled={toggleOnSwitchIconPressOnly}
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
      <TouchableOpacity
        onPress={() => setActive(!active)}
        activeOpacity={1}
        disabled={!toggleOnSwitchIconPressOnly}
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
    </TouchableOpacity>
  )
}

export default SwitchRow
