import { Animated } from 'react-native';
/**
 * Type Support for Animation Builder Arguments
 */
export declare type AnimationBuilderArgs = {
    toValue: number;
    duration?: number;
    useNativeDriver?: boolean;
    easing?: (value: number) => number;
};
/**
 * Starting point for vanilla animations in react native
 * @param toValue Value to transition to
 * @param duration Animation Duration
 * @param useNativeDriver If animation uses supported styles (ex; opacity), it should be true for better performance
 */
export declare const useAnimationBuilder: () => {
    animation: ({ toValue, duration, useNativeDriver, easing, }: AnimationBuilderArgs) => void;
    animationRef: Animated.Value;
};
