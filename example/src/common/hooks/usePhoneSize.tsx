import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

// IPhone 12 Pro Max- 428
// IPhone 12 / Pro - 390
// IPhone 12 Mini / SE 2nd Gen - 375
// IPhone SE 1st Gen - 320

export type PhoneSize = 'UltraSmall' | 'Small' | 'Normal' | 'Large';

const usePhoneSize = () => {
	const { width } = Dimensions.get('window');
	const [phoneSize, setPhoneSize] = useState<PhoneSize | undefined>(
		undefined,
	);

	useEffect(() => {
		setPhoneSize(
			width >= 320 && width < 375
				? 'UltraSmall'
				: width >= 375 && width < 390
				? 'Small'
				: width >= 390 && width < 428
				? 'Normal'
				: 'Large',
		);
	}, [width]);

	return phoneSize;
};

export default usePhoneSize;
