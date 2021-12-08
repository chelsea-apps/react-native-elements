import React, { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Animated, Platform, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { ModalProps } from './Modal';
import useBottomModalAnimations from '../../../hooks/animations/useBottomModalAnimations';
import OptionalWrapper from '../../elements/Wrapper/OptionalWrapper';

const styles = {
	container: [
		t.bgWhite,
		t.absolute,
		t.bottom0,
		t.left0,
		t.right0,
		t.p4,
		t.pX6,
		t.pB0,
		{ borderTopLeftRadius: 30, borderTopRightRadius: 30 },
		t.z100,
	],
	topBar: [t.h1, t.rounded, t.bgGray400, t.w20, t.mB4],
};

type FloatingWindowProps = ModalProps;

/**
 * Content for buy/sell confirmation modal
 * @param props
 */
const FloatingWindow = ({ isOpen, children }: FloatingWindowProps) => {
	const { animatedModalTop, fadeIn, fadeOut } = useBottomModalAnimations();
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const insets = useSafeAreaInsets();

	useEffect(() => {
		if (isOpen === isVisible) return;

		if (isOpen) {
			fadeIn();
			setIsVisible(true);
		} else {
			fadeOut();
			setTimeout(() => setIsVisible(false), 400);
		}
		// eslint-disable-next-line
	}, [isOpen, fadeIn, fadeOut]);

	return (
		<OptionalWrapper data={isVisible}>
			<Animated.View
				style={[
					styles.container,
					{
						paddingBottom:
							Platform.OS === 'ios'
								? insets.bottom > 34
									? insets.bottom
									: 34
								: 16 + insets.bottom,
					},
					{ ...animatedModalTop, zIndex: 30, elevation: 31 },
				]}
			>
				<View style={t.itemsCenter}>
					<View style={styles.topBar} />
				</View>
				{children}
			</Animated.View>
		</OptionalWrapper>
	);
};

export default FloatingWindow;
