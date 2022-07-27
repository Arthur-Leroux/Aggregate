import React, { useRef, useContext } from 'react';
import './Header.css';
import logo from '../assets/pictures/logo1.png';
import Snackbar from '../Snackbar/Snackbar';
import { UserContext } from '../UserProvider/UserProvider';

export default function Header() {
	const SnackbarType = {
		success: 'success',
		fail: 'fail',
	};
	const snackbarRef = useRef(null);

	const { user } = useContext(UserContext);

	return (
		<section className='container'>
			<img src={logo} alt='logo' className='logo' />
			<h1 className='container_title_main'>Aggregate</h1>
			<div className='snackbar'>
				<div className='container_user_credentials'>
					{user.email}
					{user.picture}
				</div>
				<button
					className='showSnackbarBttn'
					onClick={() => {
						snackbarRef.current.show();
					}}
				>
					Log Out
				</button>
				<Snackbar
					ref={snackbarRef}
					message='User successfully disconnected !'
					type={SnackbarType.success}
				/>
			</div>
		</section>
	);
}
