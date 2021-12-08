import { useAnimationBuilder } from './useAnimationBuilder';

const useBottomModalAnimations = () => {
	const { animation, animationRef } = useAnimationBuilder();

	const fadeIn = () =>
		animation({ toValue: 1, duration: 300, useNativeDriver: true });
	const fadeOut = () =>
		animation({ toValue: 0, duration: 300, useNativeDriver: true });

	// Animate Modal
	const modalYPosition = animationRef.interpolate({
		inputRange: [0, 1],
		outputRange: [600, 0],
		extrapolate: 'clamp',
	});
	const animatedModalTop = {
		transform: [{ translateY: modalYPosition }],
	};

	// Animate Backdrop
	const backdropOpacity = animationRef.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 0.75],
	});
	const animatedBackdropOpacity = {
		opacity: backdropOpacity,
	};

	return {
		fadeIn,
		fadeOut,
		animatedModalTop,
		animatedBackdropOpacity,
	};
};

export default useBottomModalAnimations;
