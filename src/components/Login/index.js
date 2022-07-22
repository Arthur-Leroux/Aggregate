import React, { useState } from 'react';
import './login.css';

const Login = (props) => {
	const [newEmail, setnewEmail] = useState('');

	const [newPassword, setnewPassword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		//appel API pour se connecter.
	};

	return (
		<section className='section'>
			<form onSubmit={handleSubmit} className='section_from'>
				<input
					className='section_input_email'
					type='email'
					placeholder='Email'
					value={newEmail}
					onChange={(event) => {
						setnewEmail(event.target.value);
					}}
				></input>
				<input
					className='section_input_password'
					type='Password'
					placeholder='Password'
					value={newPassword}
					onChange={(event) => {
						setnewPassword(event.target.value);
					}}
				></input>

				<button>Login</button>
			</form>
		</section>
	);
};

export default Login;
