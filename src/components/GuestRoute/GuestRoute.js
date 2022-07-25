import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useIsUserConnected } from '../UserProvider/UserProvider';

/**
 * Ce composant sert à rediriger l'utilisateur vers la page home
 * si il essaye d'accéder à une route reservé aux utilisateurs non connectés
 */
export default function GuestRoute() {
	const isUserConnected = useIsUserConnected();

	if (isUserConnected) {
		console.log('Tu dois etre déco pour accéder à cette route, redirection');

		return <Navigate to='/' />;
	}

	return <Outlet />;
}
