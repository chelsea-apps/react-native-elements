import { Platform } from 'react-native';
import { useAnimationBuilder } from './useAnimationBuilder';
const useInputAnimations = (value, labelTopPosition, labelBigFontSize, labelSmallFontSize) => {
    const { animation, animationRef } = useAnimationBuilder();
    const fadeIn = () => animation({ toValue: 1 });
    const fadeOut = () => animation({ toValue: 0 });
    // TODO: Make values dynamic
    // Animate Label
    const labelYPosition = animationRef.interpolate({
        inputRange: [0, 1],
        outputRange: [labelTopPosition !== null && labelTopPosition !== void 0 ? labelTopPosition : 12, -1],
        extrapolate: 'clamp',
    });
    const labelXPosition = animationRef.interpolate({
        inputRange: [0, 1],
        outputRange: [0, Platform.OS === 'ios' ? 0 : 0],
        extrapolate: 'clamp',
    });
    const fontSize = animationRef.interpolate({
        inputRange: [0, labelSmallFontSize !== null && labelSmallFontSize !== void 0 ? labelSmallFontSize : 13],
        outputRange: [labelBigFontSize !== null && labelBigFontSize !== void 0 ? labelBigFontSize : 16, 0],
        extrapolate: 'clamp',
    });
    const animatedLabel = {
        fontSize,
        transform: [
            { translateY: !value ? labelYPosition : -1 },
            {
                translateX: !value ? labelXPosition : Platform.OS === 'ios' ? 0 : 0,
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