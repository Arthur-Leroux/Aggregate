import React, { useState } from 'react';
import './register.css';

export default function Register() {
	const [name, setName] = useState('');

	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log({ email, name, password });
		fetch();
	};

	return (
		<section className='register_section'>
			<form onSubmit={handleSubmit} className='register_form'>
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
