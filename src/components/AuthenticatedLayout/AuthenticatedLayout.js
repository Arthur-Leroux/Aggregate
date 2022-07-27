import React from 'react';
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
}
