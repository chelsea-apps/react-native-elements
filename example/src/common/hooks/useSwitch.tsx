import { useState } from 'react';

const useSwitch = (initialValue: boolean) => {
	const [active, setActive] = useState<boolean>(initialValue);

	return {
		active,
		setActive,
	};
};

export default useSwitch;
