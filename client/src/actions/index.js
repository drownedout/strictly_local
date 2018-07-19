import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = (formProps, callback) => async dispatch => {
	try {
		const response = await axios.post(
			'http://localhost:4000/signup', 
			formProps
		);

		dispatch({ type: AUTH_USER, payload: response.data.token });

		// Store token into browser's local storage
		localStorage.setItem('token', response.data.token);

		// Redirect function
		callback();
	} catch (e) {
		dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
	}
};

export const logout = () => {
	localStorage.removeItem('token');

	return {
		type: AUTH_USER,
		payload: ''
	};
};