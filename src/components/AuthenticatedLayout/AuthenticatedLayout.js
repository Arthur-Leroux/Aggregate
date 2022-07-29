import React from 'react';

import Header from '../Header/Header';
import Leftmenu from '../Leftmenu/Leftmenu';

import './layout.css';

export default function AuthenticatedLayout(props) {
	return (
		<div className='logged_app'>
			<Header />
			<div className='main'>
				<Leftmenu />
				{props.children}
			</div>
		</div>
	);
}
