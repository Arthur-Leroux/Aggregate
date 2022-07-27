import React from 'react';

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
	

	}