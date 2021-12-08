import { useRef } from 'react';
import { Animated } from 'react-native';
/**
 * Starting point for vanilla animations in react native
 * @param toValue Value to transition to
 * @param duration Animation Duration
 * @param useNativeDriver If animation uses supported styles (ex; opacity), it should be true for better performance
 */
export const useAnimationBuilder = () => {
    const animationRef = useRef(new Animated.Value(0)).current;
    const animation = ({ toValue, duration = 250, useNativeDriver = false, easing, }) => {
        Animated.timing(animationRef, {
            toValue,
            duration,
            useNativeDriver,
            easing,
        }).start();
    };
    return { animation, animationRef };
};
//# sourceMappingURL=useAnimationBuilder.js.map