import React from 'react';
import { NavLink } from 'react-router-dom';

//Import css
import './leftmenu.css';

export default function Leftmenu() {
	return (
		<div className='form'>
			<form>
				<input
					className='form_search'
					type='search'
					placeholder='Search'
				></input>
			</form>
			<NavLink to='/' className='form_profile'>
				My Feed
			</NavLink>
			<NavLink to='/profile' className='form_profile'>
				My profile
			</NavLink>
			<NavLink to='/friends' className='form_profile'>
				My Friends
			</NavLink>
		</div>
	);
}
