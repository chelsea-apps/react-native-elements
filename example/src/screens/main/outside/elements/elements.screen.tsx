import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { useForm } from 'react-hook-form';
import { t } from 'react-native-tailwindcss';
import Wrapper from '../../../../common/components/elements/Wrapper';
import SecondaryHeader from '../../../../common/components/extensive/SecondaryHeader';
import { GeneralNavigator } from '../../general.navigator';
import ElementsForm, { ElementsFormData } from './components/ElementsForm';

const ElementsScreen = () => {
	const navigation = useNavigation<StackNavigationProp<GeneralNavigator>>();
	const {
		handleSubmit,
		control,
		formState: { errors },
		setValue,
	} = useForm<ElementsFormData>();

	const handleSaveData = (data: ElementsFormData) => console.log(data);

	return (
		<Wrapper type="fullScreenView">
			<SecondaryHeader navigation={navigation} smallTitle="Elements" />
			<Wrapper type="scrollView" contentContainerStyle={t.pT8}>
				<ElementsForm
					handleSubmit={handleSubmit}
					control={control}
					errors={errors}
					setValue={setValue}
					handleSaveData={handleSaveData}
				/>
			</Wrapper>
		</Wrapper>
	);
};

export default ElementsScreen;
