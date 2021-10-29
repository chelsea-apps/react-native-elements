import React, { ReactElement } from 'react'
import {
  Platform,
  Pressable,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'
import { color, t } from 'react-native-tailwindcss'

import Txt from '../Txt'
import OptionalWrapper from '../Wrapper/OptionalWrapper'

export type RadioSelectRowProps = {
  // Functionality
  label: string | ReactElement
  selected: boolean
  setSelected: React.Dispatch<React.SetStateAction<boolean>>
  // Styling
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  borderColor?: string
  selectionDefaultColor?: string
  selectionActiveColor?: string
}

const styles = {
  container: [t._mL4, t._mR4, t.pX4],
  innerContainer: [
    t.selfStretch,
    t.itemsCenter,
    t.justifyBetween,
    t.flexRow,
    t.borderB,
    t.borderYellow400,
    t.pB3,
    t.mT4,
  ],
  iconContainer: [
    t.w5,
    t.h5,
    t.border,
    t.borderWhite,
    t.roundedFull,
    t.justifyCenter,
    t.itemsCenter,
  ],
  radioCheck: [t.bgYellow400, t.roundedFull, { height: 13, width: 13 }],
}

/**
 *  PART OF selectDropdown Screen
 *  TO NOT BE USED INDEPENDENT
 */

const RadioSelectRow = ({
  // Functionality
  label,
  selected,
  setSelected,
  // Styling
  style,
  textStyle,
  borderColor,
  selectionActiveColor,
  selectionDefaultColor,
}: RadioSelectRowProps) => {
  return (
    <View style={[styles.container, style]}>
      <Pressable
        onPress={() => {
          setSelected(!selected)
          if (Platform.OS === 'ios') {
            ReactNativeHapticFeedback.trigger('impactLight', {
              enableVibrateFallback: false,
              ignoreAndroidSystemSettings: false,
            })
          }
        }}
      >
        <View
          style={[
            styles.innerContainer,
            { borderColor: borderColor ?? color.yellow400 },
          ]}
        >
          {/* Text */}
          {typeof label === 'string' ? (
            <Txt style={[t.textWhite, textStyle]}>{label}</Txt>
          ) : (
            React.cloneElement(label)
          )}
          {/* Selection Circle */}
          <View
            style={[
              styles.iconContainer,
              {
                borderColor: selectionDefaultColor ?? color.white,
              },
              selected && [
                {
                  borderColor: selectionActiveColor ?? color.yellow400,
                },
              ],
            ]}
          >
            <OptionalWrapper data={selected}>
              <View
                style={[
                  styles.radioCheck,
                  {
                    backgroundColor: selectionActiveColor ?? color.yellow400,
                  },
                ]}
              />
            </OptionalWrapper>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default RadioSelectRow
