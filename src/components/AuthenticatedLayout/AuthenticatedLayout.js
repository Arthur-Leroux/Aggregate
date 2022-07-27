import React from 'react';
<<<<<<< HEAD
import Header from "../Header/Header";
import Leftmenu from '../Leftmenu/Leftmenu';

export default function AuthenticatedLayout(props) {
	return (
		<div className='logged_app'>
		<Header />
		<Leftmenu />
		{props.children}
		</div>
		
	)
	
=======
import Header from '../Header/Header';
import LeftMenu from '../Leftmenu/Leftmenu';

export default function AuthenticatedLayout(props) {
	return (
		<>
			<Header />
			<LeftMenu />
			<div className='logged_user'>{props.children}</div>
		</>
	);
>>>>>>> 908738c52479fe7af53acf8e64b566841bc96a36
}
