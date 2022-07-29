import React from 'react';
import { View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import DropdownLinkElement, {
	DropdownLinkProps as DropdownLinkElementProps,
} from '../../../../../lib/DropdownLink';
import Txt from '../Txt';

const DropdownLink = ({ ...props }: DropdownLinkElementProps) => (
	<DropdownLinkElement
		clearComponent={
			<View
				style={[
					t.h6,
					t.w6,
					t.roundedFull,
					t.bgGray700,
					t.itemsCenter,
					t.justifyCenter,
				]}
			>
				<Txt>X</Txt>
			</View>
		}
		{...props}
	/>
);

export default DropdownLink;
