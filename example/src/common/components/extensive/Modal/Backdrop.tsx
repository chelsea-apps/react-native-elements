import React, { useEffect, useState } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { ModalProps } from './Modal';
import useBottomModalAnimations from '../../../hooks/animations/useBottomModalAnimations';
import OptionalWrapper from '../../elements/Wrapper/OptionalWrapper';

const styles = {
	container: [t.bgBlack, t.absolute, t.top0, t.bottom0, t.left0, t.right0],
	touchableContainer: [t.flex1],
};

type BackdropProps = Omit<ModalProps, 'children'>;

/**
 * Content overlat
 * @param props
 */
const Backdrop = ({ isOpen, setOpen, blockClose, onClose }: BackdropProps) => {
	const { fadeIn, fadeOut, animatedBackdropOpacity } =
		useBottomModalAnimations();
	const [isVisible, setIsVisible] = useState<boolean>(false);

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
						...animatedBackdropOpacity,
						zIndex: 10,
						elevation: 11,
					},
				]}
			>
				<TouchableOpacity
					style={[styles.touchableContainer]}
					onPress={() => {
						if (onClose && !blockClose) {
							onClose();
						} else if (!blockClose) {
							setOpen(false);
						}
					}}
				/>
			</Animated.View>
		</OptionalWrapper>
	);
};

export default Backdrop;
