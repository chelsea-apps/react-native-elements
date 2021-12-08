import React from 'react';
import Backdrop from './Backdrop';
import FloatingWindow from './FloatingWindow';

export type ModalProps = {
	/**
	 * Animation trigger
	 */
	isOpen: boolean;
	/**
	 * Open or close modal
	 */
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	/**
	 * Block the modal from closing on outside tap
	 */
	blockClose?: boolean;
	/**
	 * Modal window content
	 */
	children: React.ReactNode;
	/**
	 * Pass a function on backdrop click
	 */
	onClose?: () => void;
};
/**
 * Confirmation popup modal for buying or selling shares
 * @param props
 */
const Modal = (props: ModalProps) => {
	return (
		<>
			<Backdrop {...props} />
			<FloatingWindow {...props} />
		</>
	);
};

export default Modal;
