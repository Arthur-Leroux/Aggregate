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
			url: '/',
			method: 'POST',
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
		<section className='register_section'>
			<form onSubmit={handleSubmitPost} className='register_form'>
				<input
					className='register_input_name'
					type='text'
					placeholder='Name'
					value={name}
					onChange={(event) => {
						setName(event.target.value);
					}}
				/>
				<input
					className='register_input_email'
					type='email'
					placeholder='Email'
					value={email}
					onChange={(event) => {
						setEmail(event.target.value);
					}}
				/>
				<input
					className='register_input_password'
					type='password'
					placeholder='Password'
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
