import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { LogBox, TouchableOpacity, View } from 'react-native'
import { color, t } from 'react-native-tailwindcss'

import Icon from '../../Icon'
import Txt from '../../Txt'
import OptionalWrapper from '../../Wrapper/OptionalWrapper'
import { DropdownLinkProps } from '..'

const styles = {
  container: [
    t.wFull,
    t.border,
    t.p4,
    t.rounded,
    t.borderYellow400,
    t.relative,
    t.flexRow,
    t.itemsCenter,
    t.justifyBetween,
  ],
  label: [t.textGray400, t.fontSans, t.textBase, t.textSm, t.mB1],
  placeholder: [t.textGray400, t.textLg],
  value: [t.textWhite, t.fontSans],
}

const ControlledDropdownPressable = ({
  // Functionality
  dropdown,
  setDropdown,
  control,
  validation,
  setValue,
  disabled,
  navigateTo,
  onPress,
  // Styling
  placeholderStyle,
  labelStyle,
  textStyle,
  bgColor,
  borderColor,
  icon,
  iconColor,
  iconSize,
  iconStyle,
  iconName,
}: DropdownLinkProps) => {
  const navigation = useNavigation<StackNavigationProp<any>>()

  /**
   *  Final selected value string
   */
  const [labelsText, setLabelsText] = useState<string>('')
  const [valuesText, setValuesText] = useState<string>('')

  useEffect(() => {
    const allLabels = dropdown?.currentValues
      ? dropdown?.currentValues
          .map((selection) => `${selection.label}`)
          .join(' ')
      : ''
    const allValues = dropdown?.currentValues
      ? dropdown?.currentValues
          .map((selection) => `${selection.value}`)
          .join(' ')
      : ''
    setLabelsText(allLabels)
    setValuesText(allValues)
  }, [dropdown])

  /**
   * On press action
   */
  const goToSelectionPage = () => {
    if (navigateTo) return navigateTo()
    return navigation.navigate('SelectDropdown', {
      dropdown,
      setDropdown,
    })
  }

  /**
   * Set Form Value after Selection
   */
  useEffect(() => {
    if (dropdown?.name && valuesText !== '') {
      if (setValue) setValue(dropdown.name, valuesText)
    }
  }, [dropdown, valuesText, setValue])

  /**
   * Passing setDropdown as a route parameter
   */
  useEffect(() => {
    LogBox.ignoreLogs([
      'Non-serializable values were found in the navigation state',
    ])
  }, [])

  return (
    <Controller
      name={dropdown?.name ?? ''}
      control={control}
      rules={validation}
      render={() => (
        <TouchableOpacity
          style={[
            styles.container,
            disabled && t.opacity25,
            {
              backgroundColor: bgColor ?? color.transparent,
              borderColor: borderColor ?? color.yellow400,
            },
          ]}
          disabled={disabled}
          onPress={() => {
            goToSelectionPage()
            if (onPress) onPress()
          }}
        >
          <View style={t.pR8}>
            {/* Placeholder */}
            <OptionalWrapper data={!labelsText}>
              <Txt style={[styles.placeholder, placeholderStyle]}>
                {dropdown?.label}
              </Txt>
            </OptionalWrapper>
            {/* Label + Value */}
            <OptionalWrapper data={labelsText}>
              <Txt style={[styles.label, labelStyle]}>{dropdown?.label}</Txt>
              <Txt style={[styles.value, disabled && t.opacity50, textStyle]}>
                {labelsText}
              </Txt>
            </OptionalWrapper>
          </View>
          {icon}
          {!icon && (
            <Icon
              type='font'
              fontName='Feather'
              name={iconName ?? 'chevron-down'}
              color={iconColor ?? color.white}
              size={iconSize ?? 24}
              style={[iconStyle]}
            />
          )}
        </TouchableOpacity>
      )}
    />
  )
}

export default ControlledDropdownPressable
