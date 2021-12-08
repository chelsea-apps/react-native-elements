import React from 'react';
import { t } from 'react-native-tailwindcss';
import { View, StyleProp, ViewStyle } from 'react-native';
import Txt from '../elements/Txt';

type ListHeaderProps = {
	heading: string;
	subHeading?: string;
	style?: StyleProp<ViewStyle>;
};

const styles = {
	container: [t.borderB, t.borderOrange200, t.mB5, t.pB3],
	heading: [t.textGray300, t.fontSerifSemiBold, t.textXl],
	subHeading: [t.textGray300, t.textXs, t.mT1],
};

const ListHeader = ({ heading, subHeading, style }: ListHeaderProps) => {
	return (
		<View style={[styles.container, style]}>
			<Txt style={styles.heading}>{heading}</Txt>
			{subHeading && <Txt style={styles.subHeading}>{subHeading}</Txt>}
		</View>
	);
};

export default ListHeader;
