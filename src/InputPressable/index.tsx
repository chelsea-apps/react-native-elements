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
  icon?: React.ReactElement
  iconColor?: string
  iconSize?: number
  iconStyle?: StyleProp<ViewStyle>
  iconName?: string
}

export interface InputPressableProps extends IconStylingProps {
  // Functionality
  label: string
  value?: string
  onPress?: () => void
  noIcon?: boolean
  // Styling
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  labelStyle?: StyleProp<TextStyle>
  placeholderStyle?: StyleProp<TextStyle>
  bgColor?: string
  textColor?: string
  borderColor?: string
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
        <OptionalWrapper data={!value}>
          <Txt style={[styles.placeholder, placeholderStyle]}>{label}</Txt>
        </OptionalWrapper>
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
