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
  label: [t.textGray700, t.fontSans, t.textBase, t.textSm, t.mB1],
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
  hideLabel,
  delimiter,
  navigateTo,
  onPress,
  clearComponent,
  clearComponentVisible,
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
          .join(delimiter ?? ' ')
      : ''
    const allValues = dropdown?.currentValues
      ? dropdown?.currentValues
          .map((selection) => `${selection.value}`)
          .join(delimiter ?? ' ')
      : ''
    setLabelsText(allLabels)
    setValuesText(allValues)
  }, [dropdown, delimiter])

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
          <View style={t.w10_12}>
            {/* Placeholder */}
            <OptionalWrapper data={!labelsText}>
              <Txt style={[styles.placeholder, placeholderStyle]}>
                {dropdown?.label}
              </Txt>
            </OptionalWrapper>
            {/* Label + Value */}
            <OptionalWrapper data={labelsText}>
              <OptionalWrapper data={!hideLabel}>
                <Txt style={[styles.label, labelStyle]}>{dropdown?.label}</Txt>
              </OptionalWrapper>
              <Txt style={[styles.value, disabled && t.opacity50, textStyle]}>
                {labelsText}
              </Txt>
            </OptionalWrapper>
          </View>
          {clearComponentVisible &&
          clearComponent &&
          dropdown?.currentValues?.length ? (
            <TouchableOpacity
              onPress={() => {
                if (setDropdown && dropdown)
                  setDropdown({
                    ...dropdown,
                    currentValues: undefined,
                  })
              }}
            >
              {clearComponent}
            </TouchableOpacity>
          ) : (
            <>
              {icon}
              {!icon && (
                <Icon
                  type='font'
                  fontName='Feather'
                  name={iconName ?? 'chevron-right'}
                  color={iconColor ?? color.white}
                  size={iconSize ?? 24}
                  style={[iconStyle]}
                />
              )}
            </>
          )}
        </TouchableOpacity>
      )}
    />
  )
}

export default ControlledDropdownPressable
