import React from 'react'
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

export type CheckboxSelectRowProps = {
  // Functionality
  label: string | React.ReactElement
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
    t.pB3,
    t.mT4,
  ],
  iconContainer: [
    t.w5,
    t.h5,
    t.border,
    t.borderWhite,
    t.justifyCenter,
    t.itemsCenter,
    { borderRadius: 4 },
  ],
  checkboxCheck: [{ height: 13, width: 13, borderRadius: 0 }],
}

/**
 *  PART OF selectDropdown Screen
 *  TO NOT BE USED INDEPENDENT
 */

const CheckboxSelectRow = ({
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
}: CheckboxSelectRowProps) => {
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

          {/* Selection Square */}
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
                  styles.checkboxCheck,
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

export default CheckboxSelectRow
