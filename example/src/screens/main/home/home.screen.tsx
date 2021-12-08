import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import Button from '../../../common/components/elements/Button';
import Txt from '../../../common/components/elements/Txt';
import Wrapper from '../../../common/components/elements/Wrapper';
import { GeneralNavigator } from '../general.navigator';

const styles = {
	container: [t.hFull, t.justifyCenter, t.itemsCenter],
	textContainer: [t.bgYellow400, t.p4],
	text: [t.fontBold, t.uppercase, t.textBlack],
	version: [t.absolute, t.bottom0, t.mB8, t.fontMedium],
};

const HomeScreen = () => {
	const navigation = useNavigation<StackNavigationProp<GeneralNavigator>>();
	return (
		<Wrapper type="fullScreenView" style={styles.container}>
			<View style={styles.textContainer}>
				<Txt style={styles.text}>Chelsea Apps Project Starter</Txt>
			</View>
			<Button
				style={[t.mT4]}
				textStyle={[t.textWhite]}
				onPress={() =>
					navigation.navigate('Outside', {
						screen: 'Elements',
					})
				}
			>
				View Elements Screen &gt;
			</Button>
			<Txt style={styles.version}>v2.0</Txt>
		</Wrapper>
	);
};

export default HomeScreen;
