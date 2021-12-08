import { DropdownState } from '../../../../../lib/DropdownLink';

export type SelectDropdownNavigator = {
	dropdown: DropdownState;
	setDropdown: React.Dispatch<React.SetStateAction<DropdownState>>;
};
