import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { UserContext } from '../UserProvider/UserProvider';

export default function Login() {
	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');

	const { setUser } = useContext(UserContext);

	const handleSubmitGet = (event) => {
		event.preventDefault();
		console.log({ email, password });

		setUser({ email, password });

		axios({
			method: 'get',
			url: `https://jsonplaceholder.typicode.com/users/`, //TODO: Remplacer cette adresse par celle du Back
			params: { email, password },
		})
			.then((response) => {
				console.log('response :', response);
				//TODO: setUser({ email, password });
			})
			.catch((error) => {
				console.log('error :', error);
				setUser(false);
			});
	};

	return (
		<>
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
			<div className='redirect_user'>
				<span className='redirect_user_question'>Not a member yet ?</span>
				<span
					className='redirect_user_link'
					onClick={<Navigate to='/register' />}
				>
					Click here to register
				</span>
			</div>
		</>
	);
}
