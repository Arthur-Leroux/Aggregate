import React from 'react';
import Login from './components/Login/index';
import Register from './components/Register/Register';
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<h1 className='App_title_main'>
				<strong>Aggregate</strong>
			</h1>
			<h2 className='App_subtitle'>devs' favorite spot</h2>
			<section className='App_auth_panel'>
				<h3 className='App_invite_auth'>Please sign in</h3>
				<div className='App_login'>
					<Login />
				</div>
				<h3 className='App_invite_auth'>or register</h3>
				<div className='App_register'>
					<Register />
				</div>
			</section>
		</div>
	);
};

export default App;
