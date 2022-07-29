import React, { useContext } from 'react';
import { UserContext } from '../components/UserProvider/UserProvider';
import './style/Home/home.css';

export default function Home() {
	const { user } = useContext(UserContext);

	return (
		<>
			<div className='home'>
				<div className='home_blur'>
					<h1>Welcome {user.email}</h1>
				</div>
			</div>
		</>
	);
}
