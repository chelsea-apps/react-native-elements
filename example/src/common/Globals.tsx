import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { MainContext } from '../screens/main/main.provider';
import Modal from './components/extensive/Modal/Modal';
// import Toast from 'react-native-toast-message';

/**
 * Place to add all the global components that are meant to be included in the App.js file, outside of the navigators
 */
const Globals = () => {
	const { modalOpen, setModalOpen, modalContent } = useContext(MainContext);
	return (
		<>
			<StatusBar
				translucent
				backgroundColor="transparent"
				barStyle="light-content"
			/>
			{/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
			<Modal isOpen={modalOpen} setOpen={setModalOpen}>
				{modalContent}
			</Modal>
		</>
	);
};

export default Globals;
