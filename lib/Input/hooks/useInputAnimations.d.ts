declare const useInputAnimations: (value: string, defaultValue?: string | undefined, labelTopPosition?: number | undefined, labelBigFontSize?: number | undefined, labelSmallFontSize?: number | undefined) => {
    fadeIn: () => void;
    fadeOut: () => void;
    animatedLabel: {
        fontSize: import("react-native").Animated.AnimatedInterpolation;
        transform: ({
            translateY: number | import("react-native").Animated.AnimatedInterpolation;
            translateX?: undefined;
        } | {
            translateX: number | import("react-native").Animated.AnimatedInterpolation;
            translateY?: undefined;
        })[];
    };
};
export default useInputAnimations;
