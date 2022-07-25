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

//------------------------------------------------
// //	<div className='App'>
// <h1 className='App_title_main'>
// <strong>Aggregate</strong>
// </h1>
// <h2 className='App_subtitle'>devs' favorite spot</h2>
// <section className='App_auth_panel'>
// <h3 className='App_invite_auth'>Please sign in</h3>
// <div className='App_login'>
// 	<Login />
// </div>
// <h3 className='App_invite_auth'>or register</h3>
// <div className='App_register'>
// 	<Register />
// </div>
// </section>
// </div>
