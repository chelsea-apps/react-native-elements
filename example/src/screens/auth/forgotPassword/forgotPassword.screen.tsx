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

const ForgotPasswordScreen = () => {
	return (
		<Wrapper type="fullScreenView" style={styles.container}>
			<View style={styles.textContainer}>
				<Txt style={styles.text}>Forgot Screen</Txt>
			</View>
		</Wrapper>
	);
};

export default ForgotPasswordScreen;
