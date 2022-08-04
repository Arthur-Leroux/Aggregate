import React from 'react';
import './style/Profile/profile.css';
import FileInput from '../components/FileInput/FileInput';
import myprofile from '../components/assets/data/myprofile';

export default function Profile() {
	return (
		<div className='profile'>
			<h1 className='profile_title'>My Profile</h1>

			<div className='my_current_profile'>
				<span className='my_current_profile_picture'>
					My picture : {myprofile.profilePicture}
				</span>
				<span className='my_current_profile_name'>Name : {myprofile.name}</span>
				<span className='my_current_profile_firstname'>
					Firstname : {myprofile.firstname}
				</span>
				<span className='my_current_profile_birthdate'>
					Birthdate : {myprofile.birthdate}
				</span>
				<span className='my_current_profile_gender'>
					Gender : {myprofile.gender}
				</span>
				<span className='my_current_profile_job'>Job : {myprofile.job}</span>
				<span className='my_current_profile_description'>
					Description : {myprofile.description}
				</span>
				<span className='my_current_profile_address'>
					Address : {myprofile.address}
				</span>
			</div>

			<div className='edit_my_profile'>
				<form>
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
						<input
							className='profile_job'
							type='text'
							placeholder='My current job'
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
		</div>
	);
}
