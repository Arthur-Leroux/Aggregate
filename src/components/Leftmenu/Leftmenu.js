//import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
		return console.log(Buttonprofile());
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
			<NavLink to='/profile' className='form_profile'>
				My profile
			</NavLink>

			<NavLink to='/jobs' className='form_profile'>
				My Jobs
			</NavLink>

			<NavLink to='/friends' className='form_profile'>
				My Friends
			</NavLink>
		</div>
	);
}
