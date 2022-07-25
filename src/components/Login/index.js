import React, { useState } from 'react';
import './login.css';
import axios from 'axios';

export default function Login() {
	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');

	const handleSubmitGet = (event) => {
		event.preventDefault();
		console.log({ email, password });

		axios({
			method: 'get',
			url: process.env.REACT_APP_API_URL,
		})
			.then((response) => {
				console.log('response :', response);
			})
			.catch((error) => {
				console.log('error :', error);
			});
	};

	return (
		<section className='section'>
			<form onSubmit={handleSubmitGet} className='section_from'>
				<input
					className='section_input_email'
					type='email'
					placeholder='Email'
					value={email}
					onChange={(event) => {
						setEmail(event.target.value);
					}}
				></input>
				<input
					className='section_input_password'
					type='password'
					placeholder='Password'
					value={password}
					onChange={(event) => {
						setPassword(event.target.value);
					}}
				></input>

				<button>Login</button>
			</form>
		</section>
	);
}
