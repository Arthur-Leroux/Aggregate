import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useIsUserConnected } from '../UserProvider/UserProvider';

/**
 * Ce composant sert à rediriger l'utilisateur vers la page de connexion
 * si il essaye d'accéder à une route necessitant d'être connecté
 */
export default function ProtectedRoute() {
	const isUserConnected = useIsUserConnected();

	if (!isUserConnected) {
		console.log("T'as pas le droit, redirection");

		return <Navigate to='/login' />;
	}

	return <Outlet />;
}
