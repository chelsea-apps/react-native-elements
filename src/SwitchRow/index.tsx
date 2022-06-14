import React from 'react'
import { StyleProp, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import SwitchRowContent from './components/SwitchRowContent'

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
  toggleOnSwitchOnly?: boolean
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
  toggleOnSwitchOnly = false,
}: SwitchRowProps) => {
  // Props for switchRow content
  const switchRowContentProps = {
    active,
    setActive,
    label,
    labelStyle,
    labelActiveColor,
    labelDefaultColor,
    trackActiveColor,
    trackDefaultColor,
    thumbColor,
    thumbActiveColor,
    toggleOnSwitchOnly,
    style,
  }

  return !toggleOnSwitchOnly ? (
    <TouchableOpacity onPress={() => setActive(!active)} activeOpacity={1}>
      <SwitchRowContent {...switchRowContentProps} />
    </TouchableOpacity>
  ) : (
    <SwitchRowContent {...switchRowContentProps} />
  )
}

export default SwitchRow
