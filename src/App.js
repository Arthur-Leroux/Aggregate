import React from 'react';
import './App.css';
import UserProvider from './components/UserProvider/UserProvider';
import Router from './components/Router/Router';

const App = () => {
	return (
		<UserProvider>
			<div className='App'>
				<h1 className='App_title_main'>
					<strong>Aggregate</strong>
				</h1>
				<h2 className='App_subtitle'>devs' favorite spot</h2>
				<Router />
			</div>
		</UserProvider>
	);
};

export default App;
