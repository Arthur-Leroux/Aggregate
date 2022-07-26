import React, { useContext } from 'react';
import { UserContext } from '../components/UserProvider/UserProvider';

export default function Home() {
	const { user } = useContext(UserContext);

	return (
		<>
			<h1>Welcome Home</h1>
			<h2>welcome {user.username}</h2>
		</>
	);
}
