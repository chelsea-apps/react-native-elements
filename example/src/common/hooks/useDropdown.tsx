import { useState } from 'react';
import { DropdownState } from '../../../lib/DropdownLink';

const useDropdown = (dropdownData: DropdownState) => {
	const [dropdown, setDropdown] = useState<DropdownState>(dropdownData);

	return {
		dropdown,
		setDropdown,
	};
};

export default useDropdown;
