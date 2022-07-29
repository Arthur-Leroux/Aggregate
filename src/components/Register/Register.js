import React, { useState } from 'react';
import './register.css';
import axios from 'axios';

export default function Register() {
	const [name, setName] = useState('');

	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');

	const handleSubmitPost = (event) => {
		event.preventDefault();
		console.log({ email, name, password });
		axios({
			url: '/', //! A modifier en fonction du back
			method: 'POST',
			baseURL: process.env.REACT_APP_API_URL,
			data: { email, password }, //! Attention au firstName ou firstname
		})
			.then((response) => {
				console.log('response :', response);
			})
			.catch((error) => {
				console.log('error :', error);
			});
	};

	return (
		<section className='register_section'>
			<form onSubmit={handleSubmitPost} className='register_form'>
				<input
					className='register_input_email'
					type='text'
					placeholder='Email'
					value={name}
					onChange={(event) => {
						setName(event.target.value);
					}}
				/>
				<input
					className='register_input_password'
					type='password'
					placeholder='Password'
					value={email}
					onChange={(event) => {
						setEmail(event.target.value);
					}}
				/>
				<input
					className='register_input_password'
					type='password'
					placeholder='Confirm your password'
					value={password}
					onChange={(event) => {
						setPassword(event.target.value);
					}}
				/>
				<button type='submit'>Register</button>
			</form>
		</section>
	);
}
