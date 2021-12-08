import { useState } from 'react';

const useScrollDistance = () => {
	const [scrollDistance, setScrollDistance] = useState<number>(0);

	const handleScroll = (event: Record<string, any>) => {
		const offsetY = event.nativeEvent.contentOffset.y;
		setScrollDistance(offsetY);
	};

	return {
		handleScroll,
		scrollDistance,
	};
};

export default useScrollDistance;
