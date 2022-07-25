import React, { useState, useContext } from 'react';
import './login.css';
import axios from 'axios';
import { UserContext } from '../UserProvider/UserProvider';

export default function Login() {
	const [email, setEmail] = useState('');

	const [username, setUsername] = useState('');

	const { setUser } = useContext(UserContext);

	const handleSubmitGet = (event) => {
		event.preventDefault();
		console.log({ email, username });

		axios({
			method: 'get',
			url: `https://jsonplaceholder.typicode.com/users/`,
			params: { username: username, email: email },
		})
			.then((response) => {
				console.log('response :', response);
				//Todo: setUser({ email, username });
			})
			.catch((error) => {
				console.log('error :', error);
				setUser(false);
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
