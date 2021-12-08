import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Globals from './common/Globals';
import Routes from './Routes';
import MainProvider from './screens/main/main.provider';

// import { Provider } from 'urql';
// import { Client } from './common/helpers/client.service';

const App = () => {
	const [isLoggedIn] = useState<boolean>(true);

	// Initialize Urql Client
	// const client = new Client(API_URL, SUB_URL, setLoggedIn);

	return (
		// <Provider value={client.getClient()}>
		<SafeAreaProvider>
			<MainProvider>
				<Routes isLoggedIn={isLoggedIn} />
				<Globals />
			</MainProvider>
		</SafeAreaProvider>
		// </Provider>
	);
};

export default App;
