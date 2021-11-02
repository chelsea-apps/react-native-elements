import React from 'react'
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { color, t } from 'react-native-tailwindcss'

import Icon from '../Icon'
import Txt from '../Txt'
import OptionalWrapper from '../Wrapper/OptionalWrapper'

export type IconStylingProps = {
  /** Icon component that should replace the default Font icon */
  icon?: React.ReactElement
  /** Color of the current Font Icon color */
  iconColor?: string
  /** Size of the current Font Icon color - default 24 */
  iconSize?: number
  /** Styles of the Icon component */
  iconStyle?: StyleProp<ViewStyle>
  /** Feather Icons icon name */
  iconName?: string
}

export interface InputPressableProps extends IconStylingProps {
  /** Small text above the value */
  label: string
  /** Value text*/
  value?: string
  /** Action to be taken onPress */
  onPress?: () => void
  /** If true, there will be no icon on the right side of the container */
  noIcon?: boolean
  /** View Container styles - including errors and info text */
  style?: StyleProp<ViewStyle>
  /** Value Txt styles */
  textStyle?: StyleProp<TextStyle>
  /** Small Txt above value styles */
  labelStyle?: StyleProp<TextStyle>
  /** Text in the middle styles - shows if no value is present */
  placeholderStyle?: StyleProp<TextStyle>
  /** Container background color */
  bgColor?: string
  /** Value text color */
  textColor?: string
  /** Container border color */
  borderColor?: string
  /** Small Txt above value color */
  labelColor?: string
}

const styles = {
  container: [
    t.border,
    t.p4,
    t.rounded,
    t.textBase,
    t.borderYellow400,
    t.mB4,
    t.flexRow,
    t.itemsCenter,
    t.justifyBetween,
  ],
  label: [
    t.textGray400,
    t.fontSans,
    t.textBase,
    t.textSm,
    { marginBottom: 6, fontSize: 15 },
  ],
  placeholder: [t.textGray400, t.textLg],
  icon: [t._mL4],
}

const InputPressable = ({
  // Functionality
  value,
  label,
  onPress,
  noIcon,
  // Styling
  style,
  textStyle,
  labelStyle,
  placeholderStyle,
  bgColor,
  textColor,
  borderColor,
  labelColor,
  icon,
  iconColor,
  iconSize,
  iconStyle,
  iconName,
}: InputPressableProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: bgColor ?? color.transparent,
          borderColor: borderColor ?? color.yellow400,
        },
        style,
      ]}
      onPress={onPress}
    >
      <View style={t.pR8}>
        {/* Placeholder - show if no value */}
        <OptionalWrapper data={!value}>
          <Txt style={[styles.placeholder, placeholderStyle]}>{label}</Txt>
        </OptionalWrapper>
        {/* Label + Value - show if no value */}
        <OptionalWrapper data={value}>
          <Txt
            style={[
              styles.label,
              {
                color: labelColor ?? color.gray400,
              },
              labelStyle,
            ]}
          >
            {label}
          </Txt>
          <Txt
            style={[
              textStyle,
              {
                color: textColor ?? color.white,
              },
            ]}
            numberOfLines={1}
            ellipsizeMode='tail'
          >
            {value}
          </Txt>
        </OptionalWrapper>
      </View>
      {icon}
      {!icon && !noIcon && (
        <Icon
          type='font'
          fontName='Feather'
          name={iconName ?? 'chevron-right'}
          color={iconColor ?? color.white}
          size={iconSize ?? 24}
          style={[styles.icon, iconStyle]}
        />
      )}
    </TouchableOpacity>
  )
}

export default InputPressable
