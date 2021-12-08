import React, { useContext, useEffect, useState } from 'react';

type MainContextType = {
	// Modal
	modalOpen: boolean;
	setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	modalContent: React.ReactNode;
	setModalContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
};

/* eslint-disable */
export const MainContext = React.createContext<MainContextType>({
	// Modal
	modalOpen: false,
	setModalOpen: () => {},
	modalContent: <></>,
	setModalContent: () => {},
});

type MainProviderProps = { children: React.ReactNode };

const MainProvider = ({ children }: MainProviderProps) => {
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [modalContent, setModalContent] = useState<React.ReactNode>(<></>);

	/**
	 * Clear modal content after close
	 */
	useEffect(() => {
		if (!modalOpen) setModalContent(<></>);
	}, [modalOpen]);

	return (
		<MainContext.Provider
			value={{
				// Modal
				modalOpen,
				setModalOpen,
				modalContent,
				setModalContent,
				// Auth
			}}
		>
			{children}
		</MainContext.Provider>
	);
};

export const useMainContext = () => useContext(MainContext);

export default MainProvider;
