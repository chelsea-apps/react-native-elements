import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { t } from 'react-native-tailwindcss';

const EmptyScreen = () => {
	const windowHeight = useWindowDimensions().height;
	return <View style={[t.wFull, { height: windowHeight }]} />;
};

export default EmptyScreen;
