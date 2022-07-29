import React from 'react';
import './style/Profile/profile.css';
import FileInput from '../components/FileInput/FileInput';

export default function Profile() {
	return (
		<div className='profile'>
			<form>
				<h1 className='profile_title'>My Profile</h1>
				<FileInput />
				<section className='profile_left'>
					<input
						className='profile_firstname'
						type='text'
						placeholder='Firstname'
					></input>
					<input //! Changement de côté : gauche
						className='profile_name'
						type='text'
						placeholder='Name'
					></input>
					<input
						className='profile_birthday'
						type='date'
						placeholder='Birthday'
						min='1900-06-10'
						max='2020-01-01'
					></input>
					<button className='profile_btn' type='submit'>
						Send
					</button>
				</section>
				<section className='profile_right'>
					<form className='profile_user_credentials'>
						<input //! Changement de côté : droit
							className='profile_email'
							type='email'
							placeholder='Change my mail address'
						></input>
						<input
							className='profile_password'
							type='password'
							placeholder='New password'
						></input>
						<input
							className='profile_password_confirm'
							type='password'
							placeholder='Confirm new password'
						></input>
						<button className='profile_btn' type='submit'>
							Send
						</button>
					</form>
				</section>
			</form>
		</div>
	);
}
