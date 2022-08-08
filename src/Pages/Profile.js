import React, { useState } from 'react';
import './style/Profile/profile.css';
import FileInput from '../components/FileInput/FileInput';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import myprofile from '../components/assets/data/myprofile';

export default function Profile() {
	const [firstname, setFirstname] = useState(myprofile.firstname);
	function firstnameHandler() {
		console.log('Tu as écris dans le champs controlé');
	}
	// const [name, setName] = useState('RICARD');
	// const [birthdate, setBirthdate] = useState('1985/12/23');
	// const [gender, setGender] = useState('Male');
	// const [job, setJob] = useState('Astronaute');
	// const [description, setDescription] = useState('Code warrior');
	// const [address, setAddress] = useState('Marmande, France');

	return (
		<>
			<div className='profile'>
				<div className='my_profile'>
					<Card
						key={myprofile.id}
						sx={{ maxWidth: 345 }}
						className='my_current_profile'
					>
						<CardActionArea>
							<CardMedia
								component='img'
								height='350'
								image={myprofile.profilePicture}
								alt='perso_profile'
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant='h5'
									component='div'
									value={firstname}
									onChange={(event) => {
										setFirstname(event.target.value);
									}}
								>
									Firstname : {firstname}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Birthdate : {myprofile.birthdate}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Gender : {myprofile.gender}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Job : {myprofile.job}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									My bio : {myprofile.description}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Address : {myprofile.address}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
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
							<textarea
								className='profile_description'
								type='text'
								placeholder='Add a bio'
							></textarea>
							<select name='gender' className='profile_gender'>
								<option value='' selected disabled hidden>
									My gender
								</option>
								<option value='man'>Man</option>
								<option value='woman'>Woman</option>
							</select>
							<input
								className='profile_address'
								type='text'
								placeholder='Town, State, Country'
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
		</>
	);
}
