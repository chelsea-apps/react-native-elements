import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {
	Animated,
	StyleProp,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { color, t } from 'react-native-tailwindcss';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Txt from '../../elements/Txt';
import BackButton from './BackButton';

export interface SecondaryHeaderProps extends StackHeaderProps, CustomProps {}
export interface PageElementProps extends CustomProps {
	navigation: NavigationProp<ParamListBase>;
}
export type CustomProps = {
	scrollDistance?: number;
	overflowContent?: boolean;
	content?: React.ReactNode;
	headerRight?: React.ReactNode;
	headerRightBgColor?: string;
	title?: string;
	smallTitle?: string;
	smallTitleStyle?: StyleProp<TextStyle>;
	titleIcon?: string;
	onTitlePress?: () => void;
	onSmallTitlePress?: () => void;
	style?: StyleProp<ViewStyle>;
	contentStyle?: StyleProp<ViewStyle>;
	bgColor?: string;
	backStyle?: StyleProp<ViewStyle>;
	// Back Button
	hideBack?: boolean;
	backText?: string;
	backColor?: string;
	backBgColor?: string;
	onBackPress?: () => void;
};

const styles = {
	overflowContainer: [t.absolute, t.top0, t.right0, t.left0, t.z10],
	header: [t.flexRow, t.justifyBetween, t.itemsCenter],
	title: {
		container: [t.pX4, t.flexRow, t.itemsCenter, t.mR16, t.pB4],
		text: [t.text2xl, t.textGray300, t.fontMono],
		icon: [t.text2xl, t.textGray300, t.mR1],
	},
	smallTitleText: [t.fontSans, t.textCenter, t.textLg, t.mX24, t.textBlack],
	headerRight: [t.mR4, t.p2, t.rounded],
};

const SecondaryHeader = ({
	navigation,
	scrollDistance,
	overflowContent,
	content,
	headerRight,
	headerRightBgColor,
	title,
	smallTitle,
	smallTitleStyle,
	titleIcon,
	onTitlePress,
	onSmallTitlePress,
	style,
	contentStyle,
	bgColor,
	// Back Button
	hideBack,
	backColor,
	backBgColor,
	backText = 'Back',
	onBackPress,
	backStyle,
}: SecondaryHeaderProps | PageElementProps) => {
	const insets = useSafeAreaInsets();

	const [opacityValue, setOpacityValue] = useState<number>(0);
	useEffect(() => {
		if (scrollDistance) setOpacityValue(scrollDistance / 100);
	}, [scrollDistance]);

	const backgroundColor =
		typeof scrollDistance === 'number'
			? `rgba(255, 255, 255, ${opacityValue})`
			: bgColor ?? color.yellow400;

	const handleBackPress = () => {
		if (onBackPress) {
			return onBackPress();
		}
		navigation.goBack();
	};

	return (
		<Animated.View
			style={[
				overflowContent && styles.overflowContainer,
				{
					backgroundColor,
					paddingTop: 8 + insets.top,
					borderBottomLeftRadius: 10,
					borderBottomRightRadius: 10,
				},
				[t.pB1, t.shadowLg, t.z10, t.roundedB],
				style,
			]}
		>
			<View style={styles.header}>
				{!hideBack ? (
					<BackButton
						onPress={handleBackPress}
						textColor={backColor}
						text={backText}
						bgColor={backBgColor}
						style={backStyle}
					/>
				) : (
					<View /> // Necessary to keep the headerRight in place
				)}

				{smallTitle && (
					<TouchableOpacity
						style={[
							t.wFull,
							t.absolute,
							overflowContent && { opacity: opacityValue },
						]}
						activeOpacity={onSmallTitlePress ? 0.6 : 1}
						onPress={onSmallTitlePress}
					>
						<Txt
							style={[styles.smallTitleText, smallTitleStyle]}
							numberOfLines={1}
						>
							{smallTitle}
						</Txt>
					</TouchableOpacity>
				)}

				<View
					style={[
						styles.headerRight,
						{
							backgroundColor:
								headerRightBgColor && headerRight
									? headerRightBgColor
									: !headerRightBgColor && headerRight
									? color.white
									: color.transparent,
						},
					]}
				>
					{headerRight}
				</View>
			</View>

			{title && (
				<TouchableOpacity
					style={[styles.title.container, !content && t._mB1]}
					activeOpacity={onTitlePress ? 0.6 : 1}
					onPress={onTitlePress}
				>
					{titleIcon && (
						<Ionicon name={titleIcon} style={styles.title.icon} />
					)}
					<Txt style={styles.title.text}>{title}</Txt>
				</TouchableOpacity>
			)}

			<View
				style={[
					title && t._mT1,
					content && t._mB2,
					content && t.pB4,
					[t.pX4],
					contentStyle,
				]}
			>
				{content}
			</View>
		</Animated.View>
	);
};

export default SecondaryHeader;
