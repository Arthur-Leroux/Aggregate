import React, { useState } from 'react';
import './login.css';
import axios from 'axios';

export default function Login() {
	const [email, setEmail] = useState('');

	const [username, setUsername] = useState('');

	const handleSubmitGet = (event) => {
		event.preventDefault();
		console.log({ email, username });
		axios({
			url: '/users',
			method: 'GET',
			baseURL: process.env.REACT_APP_API_URL,
		})
			.then((response) => {
				console.log('response :', response);
			})
			.catch((error) => {
				console.log('error :', error);
			})
			.finally(() => {
				console.log("it's ok");
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
					className='section_input_username'
					type='username'
					placeholder='username'
					value={username}
					onChange={(event) => {
						setUsername(event.target.value);
					}}
				></input>

				<button>Login</button>
			</form>
		</section>
	);
}
