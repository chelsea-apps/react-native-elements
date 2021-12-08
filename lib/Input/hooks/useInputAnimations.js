import { Platform } from 'react-native';
import { useAnimationBuilder } from './useAnimationBuilder';
const useInputAnimations = (value, defaultValue) => {
    const { animation, animationRef } = useAnimationBuilder();
    const fadeIn = () => animation({ toValue: 1 });
    const fadeOut = () => animation({ toValue: 0 });
    // Animate Label
    const labelYPosition = animationRef.interpolate({
        inputRange: [0, 1],
        outputRange: [12, -1],
        extrapolate: 'clamp',
    });
    const labelXPosition = animationRef.interpolate({
        inputRange: [0, 1],
        outputRange: [0, Platform.OS === 'ios' ? -1 : 0],
        extrapolate: 'clamp',
    });
    const fontSize = animationRef.interpolate({
        inputRange: [0, 4],
        outputRange: [18, 0],
        extrapolate: 'clamp',
    });
    const animatedLabel = {
        fontSize,
        transform: [
            { translateY: !value && !defaultValue ? labelYPosition : -1 },
            {
                translateX: !value && !defaultValue
                    ? labelXPosition
                    : Platform.OS === 'ios'
                        ? -1
                        : 0,
            },
        ],
    };
    return {
        fadeIn,
        fadeOut,
        animatedLabel,
    };
};
export default useInputAnimations;
//# sourceMappingURL=useInputAnimations.js.map