import React, { useState, useContext } from 'react';

import './login.css';
import axios from 'axios';
import { UserContext } from '../UserProvider/UserProvider';

export default function Login() {
	const [email, setEmail] = useState('');

	const [password, setPassword] = useState(''); // changement de userName en password pour la page login

	const { setUser } = useContext(UserContext);

	const handleSubmitGet = (event) => {
		event.preventDefault();
		console.log({ email, password }); // => changement de userName en password pour la page login

		setUser({ email, password }); // => changement de userName en password pour la page login

		axios({
			method: 'get',
			url: `https://jsonplaceholder.typicode.com/users/`, //TODO: Remplacer cette adresse par celle du Back
			params: { email, password }, // => changement de userName en password pour la page login
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
					type='password' // => changement de userName en password pour la page login
					placeholder='password' // => changement de userName en password pour la page login
					value={password} // => changement de userName en password pour la page login
					onChange={(event) => {
						setPassword(event.target.value); // => changement de userName en password pour la page login
					}}
				></input>

				<button>Login</button>
			</form>
		</section>
	);
}
