/* eslint-disable import/no-anonymous-default-export */
import { v4 as uuidv4 } from 'uuid';
import profilePicture from '../pictures/avatar.png';

// Cet objet nous sert simuler la réponse que l'api nous enverrait après s'etre connecté
export default {
	id: uuidv4(),
	profilePicture: profilePicture,
	email: 'ilovecatwoman@gotham.com',
	password: 'parents',
	firstname: 'Bruce',
	name: 'Wayne',
	gender: 'male',
	birthdate: '1939/30/03',
	job: 'Peacekeeper',
	description: "Freeze, t'es givré",
	address: 'Gotham City, New Jersey',
};
