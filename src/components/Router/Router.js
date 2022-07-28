/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute';
import GuestRoute from '../GuestRoute/GuestRoute';
import Register from '../Register/Register';
import Login from '../Login';
import Home from '../../Pages/Home';
import Profile from '../../Pages/Profile';
import Jobs from '../../Pages/Jobs';
import Friends from '../../Pages/Friends';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<GuestRoute />}>
					{/* Ici, les routes réservées aux utilisateurs pas connectés */}
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Route>

				<Route element={<AuthenticatedRoute />}>
					{/* Ici les routes réservées aux utilisateurs connectés */}
					<Route exact path='/' element={<Home />} />
					<Route exact path='/profile' element={<Profile />} />
					<Route exact path='/jobs' element={<Jobs />} />
					<Route exact path='/friends' element={<Friends />} />
				</Route>

				{/* Ici, les routes accessibles peu importe si on est connecté ou pas  */}
				{/* <Route ....... /> */}
			</Routes>
		</BrowserRouter>
	);
}
