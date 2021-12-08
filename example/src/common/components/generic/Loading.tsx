import React from 'react';
import { t } from 'react-native-tailwindcss';
import { Image, StyleProp, ViewStyle } from 'react-native';
import Wrapper from '../elements/Wrapper';

type LoadingProps = {
	style?: StyleProp<ViewStyle>;
};

const styles = {
	container: [t.justifyCenter, t.itemsCenter, t.flex1, t.bgOrange200],
	spinner: [t.w13, t.h13],
};

const Loading = ({ style }: LoadingProps) => {
	return (
		<Wrapper contentContainerStyle={[styles.container, style]}>
			<Image
				// eslint-disable-next-line
				source={require('../../../../assets/icons/spinner.gif')}
				style={styles.spinner}
			/>
		</Wrapper>
	);
};

export default Loading;
