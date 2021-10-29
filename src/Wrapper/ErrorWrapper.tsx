import React, { useEffect, useState } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { color, t } from 'react-native-tailwindcss'
import { CombinedError } from 'urql'

import RoundedButton from '../Button/Rounded'
import Icon from '../Icon'
import Txt from '../Txt'
import OptionalWrapper from './OptionalWrapper'

export type ErrorWrapperProps = {
  title: string
  error?: CombinedError
  children: React.ReactNode
  onClose?: () => void
  style?: StyleProp<ViewStyle>
  show?: boolean
}

const styles = {
  title: {
    container: [
      t.flex,
      t.flexRow,
      t.itemsCenter,
      t.itemsCenter,
      t.justifyStart,
      t.mB4,
    ],
    text: [t.mL1, t.mY4, t.textXl, t.fontSans, t.textGreen700, t.selfStart],
  },
  messages: {
    container: [t.mB2],
    text: [t.textGreen700, t.selfStart],
  },
}

const ErrorWrapper = ({
  title,
  error,
  children,
  onClose,
  style = [t.p4],
  show,
}: ErrorWrapperProps) => {
  const [messages, setMessages] = useState<string[]>([])
  const [showError, setShowError] = useState<boolean>(false)

  useEffect(() => {
    if (show !== undefined) setShowError(show)
  }, [show])

  useEffect(() => {
    if (error) console.warn(error)

    const messages = new Set<string>()
    if (error?.graphQLErrors)
      error.graphQLErrors.forEach(({ message, extensions }) => {
        switch (extensions?.code) {
          case 'INTERNAL_SERVER_ERROR':
            messages.add(
              'Looks like something went wrong, please try again later.'
            )
            break
          case 'UNAUTHENTICATED':
            break
          default:
            messages.add(extensions?.message ?? message)
        }
      })
    else if (error?.networkError?.message)
      messages.add(error.networkError.message)
    else if (error?.message) messages.add(error.message)

    setShowError(messages.size > 0)
    setMessages([...messages.values()])
  }, [error])

  if (!showError) return <>{children}</>
  return (
    <View style={style}>
      {/* TODO: Wrap this with a card */}
      <View style={styles.title.container}>
        <Icon
          type='font'
          fontName='Ionicons'
          name='warning-outline'
          color={color.red500}
          size={35}
        />

        <Txt style={styles.title.text}>{title}</Txt>
      </View>
      <View style={styles.messages.container}>
        {messages.map((message) => (
          <Txt key={message} style={styles.messages.text}>
            {message}
          </Txt>
        ))}
      </View>
      <OptionalWrapper data={onClose}>
        <RoundedButton onPress={onClose} style={[t.mT4]}>
          Close
        </RoundedButton>
      </OptionalWrapper>
    </View>
  )
}

export default ErrorWrapper
