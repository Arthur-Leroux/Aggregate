import React from 'react';
import './style/Profile/profile.css';
import FileInput from '../components/FileInput/FileInput';

export default function Profile() {
	return (
		<div className='profile'>
			<form>
				<h1 className='profile_title'>My Profile</h1>
				<FileInput />
				<input
					className='profile_firstname'
					type='text'
					placeholder='Firstname'
				></input>
				<input className='profile_name' type='text' placeholder='Name'></input>
				<input
					className='profile_birthday'
					type='date'
					placeholder='Birthday'
					min='2019-06-10'
				></input>
				<button type='submit'>Send</button>
			</form>
		</div>
	);
}
