import React from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ScrollViewProps,
  View,
} from 'react-native'
import { t } from 'react-native-tailwindcss'

export interface WrapperProps extends ScrollViewProps {
  /** Pages elements */
  children: React.ReactNode
  /** Container type. 'scrollview' - Allows the content to be scrollable. 'list' - When the page contains only a flatlist. 'fixed' - content is not scrollable.  */
  type?: 'scrollView' | 'list' | 'fullScreenView'
  /** Quick way to make the content not scrollable */
  fixed?: boolean
  /** Space to be shown at the bottom when the keyboard is up. Default - 0 */
  keyboardVerticalOffset?: number
}

const Wrapper = ({
  children,
  style,
  contentContainerStyle,
  type,
  fixed,
  keyboardVerticalOffset,
  ...props
}: WrapperProps) => {
  const styles = {
    defaultContainer: [fixed && t.flex1],
    defaultContent: [t.pX4, t.pT4, t.pB8],
    fullScreenView: [t.flex1],
  }

  return !type || type === 'scrollView' ? (
    <ScrollView
      style={[styles.defaultContainer, style]}
      contentContainerStyle={[styles.defaultContent, contentContainerStyle]}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps='handled'
      {...props}
    >
      {children}
    </ScrollView>
  ) : type === 'list' ? (
    <View
      style={[styles.defaultContainer, t.flex1, style]}
      keyboardShouldPersistTaps='handled'
      {...props}
    >
      <View style={[t.pX4]}>{children}</View>
    </View>
  ) : type === 'fullScreenView' ? (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.fullScreenView, style]}
      keyboardVerticalOffset={keyboardVerticalOffset ?? 0}
      keyboardShouldPersistTaps='handled'
      {...props}
    >
      {children}
    </KeyboardAvoidingView>
  ) : (
    <></>
  )
}

export default Wrapper
