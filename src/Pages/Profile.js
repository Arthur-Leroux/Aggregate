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
					<label className='profile_label_bd'>Enter your birthdate</label>
					<input
						className='profile_birthday'
						type='date'
						placeholder='Birthday'
						min='1900-06-10'
					></input>
					<button className='profile_btn' type='submit'>
						Send
					</button>
				</section>
				<section className='profile_right'>
					<input //! Changement de côté : droit
						className='profile_email'
						placeholder='Change my mail address'
					></input>
					<input
						className='profile_password'
						type='password'
						placeholder='New password'
					></input>
				</section>
			</form>
		</div>
	);
}
