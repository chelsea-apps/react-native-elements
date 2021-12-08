import React from 'react';
import {
	ScrollView,
	StyleProp,
	View,
	ViewStyle,
	ScrollViewProps,
} from 'react-native';
import { t } from 'react-native-tailwindcss';

interface HorizontalListProps extends ScrollViewProps {
	children: React.ReactNode;
	style?: StyleProp<ViewStyle>;
	onRefresh?: () => Promise<void>;
	refreshing?: boolean;
}

const styles = {
	container: [t._mL4, t._mR4],
	innerContainer: [t.mL4, t.flexRow],
};

const HorizontalList = ({ children, style, ...props }: HorizontalListProps) => {
	return (
		<ScrollView
			{...props}
			horizontal
			showsHorizontalScrollIndicator={false}
			style={[styles.container, style]}
		>
			<View style={styles.innerContainer}>{children}</View>
		</ScrollView>
	);
};

export default HorizontalList;
