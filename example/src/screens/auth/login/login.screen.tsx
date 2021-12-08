import React from 'react';
import { View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import Txt from '../../../common/components/elements/Txt';
import Wrapper from '../../../common/components/elements/Wrapper';

const styles = {
	container: [t.hFull, t.justifyCenter, t.itemsCenter],
	textContainer: [t.bgYellow400, t.p4],
	text: [t.fontBold, t.uppercase, t.textBlack],
};

const LoginScreen = () => {
	return (
		<Wrapper type="fullScreenView" style={styles.container}>
			<View style={styles.textContainer}>
				<Txt style={styles.text}>Login Screen</Txt>
			</View>
		</Wrapper>
	);
};

export default LoginScreen;
