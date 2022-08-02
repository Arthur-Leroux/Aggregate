import React, { useRef, useContext } from 'react';
import './Header.css';
import logo from '../assets/pictures/logo1.png';
import avatar from '../assets/pictures/avatar.png';
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
		<section className='header'>
			<img src={logo} alt='logo' className='logo' />
			<h1 a href='/' className='header_title_main'>
				Aggregate
				</h1>
			<div className='snackbar'>
				<img src={avatar} alt='avatar' className='header_avatar' />
				<div className='header_user_credentials'>
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
