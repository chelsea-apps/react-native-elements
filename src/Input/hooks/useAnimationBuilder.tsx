import { useRef } from 'react'
import { Animated } from 'react-native'

/**
 * Type Support for Animation Builder Arguments
 */
export type AnimationBuilderArgs = {
  toValue: number
  duration?: number
  useNativeDriver?: boolean
  easing?: (value: number) => number
}
/**
 * Starting point for vanilla animations in react native
 * @param toValue Value to transition to
 * @param duration Animation Duration
 * @param useNativeDriver If animation uses supported styles (ex; opacity), it should be true for better performance
 */
export const useAnimationBuilder = () => {
  const animationRef = useRef(new Animated.Value(0)).current
  const animation = ({
    toValue,
    duration = 250,
    useNativeDriver = false,
    easing,
  }: AnimationBuilderArgs) => {
    Animated.timing(animationRef, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start()
  }
  return { animation, animationRef }
}
