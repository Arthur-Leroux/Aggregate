import React from 'react';
import './App.css';
import UserProvider from './components/UserProvider/UserProvider';
import Router from './components/Router/Router';

const App = () => {
	return (
		<UserProvider>
			<Router />
		</UserProvider>
	);
};

export default App;
