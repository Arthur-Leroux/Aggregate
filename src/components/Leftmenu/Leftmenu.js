//import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Buttonprofile from '../Buttonprofile/Buttonprofile';
//import { FeedContext } from '../FeedProvider/FeedProvider'

//Import css
import './leftmenu.css';

export default function Leftmenu() {
	//const [search, setSearch] = useState('');
	//const { SetSearch } = useContext(UserContext);

	const [myProfile, setMyProfile] = useState('');

	const handleClick = (event) => {
		event.preventDefault();
		return console.log(Buttonprofile);
	};

	return (
		<div className='form'>
			<form>
				<input
					className='form_search'
					type='search'
					placeholder='Search'
					// value ={search}
				></input>
			</form>
			<h2
				className='form_title'
				onClick={handleClick}
				value={myProfile}
				onChange={(e) => {
					setMyProfile(e.target.value);
				}}
			>
				My profile
			</h2>

			<h2 className='form_title' onClick={handleClick}>
				My Jobs
			</h2>

			<h2 className='form_title' onClick={handleClick}>
				My Friends
			</h2>
		</div>
	);
}
