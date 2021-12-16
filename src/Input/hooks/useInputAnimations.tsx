import { Platform } from 'react-native'

import { useAnimationBuilder } from './useAnimationBuilder'

const useInputAnimations = (
  value: string,
  defaultValue?: string,
  labelTopPosition?: number,
  labelBigFontSize?: number,
  labelSmallFontSize?: number
) => {
  const { animation, animationRef } = useAnimationBuilder()

  const fadeIn = () => animation({ toValue: 1 })
  const fadeOut = () => animation({ toValue: 0 })

  // TODO: Make values dynamic
  // Animate Label
  const labelYPosition = animationRef.interpolate({
    inputRange: [0, 1],
    outputRange: [labelTopPosition ?? 12, -1], // off focus position
    extrapolate: 'clamp',
  })
  const labelXPosition = animationRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Platform.OS === 'ios' ? 0 : 0],
    extrapolate: 'clamp',
  })
  const fontSize = animationRef.interpolate({
    inputRange: [0, labelSmallFontSize ?? 13],
    outputRange: [labelBigFontSize ?? 16, 0],
    extrapolate: 'clamp',
  })
  const animatedLabel = {
    fontSize,
    transform: [
      { translateY: !value && !defaultValue ? labelYPosition : -1 },
      {
        translateX:
          !value && !defaultValue
            ? labelXPosition
            : Platform.OS === 'ios'
            ? 0
            : 0,
      },
    ],
  }

  return {
    fadeIn,
    fadeOut,
    animatedLabel,
  }
}

export default useInputAnimations
