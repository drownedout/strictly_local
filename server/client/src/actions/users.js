import axios from 'axios';
import { RECEIVE_CURRENT_USER } from './types';


export const fetchCurrentUserData = () => async (dispatch) => {
	try {
		const response = await axios({
			url: 'http://localhost:4000/profile',
			params: {
				token: localStorage.getItem('token'),
			},
			method: 'get',
			responseType: 'json',
		});
		dispatch({ type: RECEIVE_CURRENT_USER, user: response.data });
	} catch (error) {
		throw error;
	}
};

export const fetchUsers = () => async (dispatch) => {
	dispatch({ type: RECEIVE_CURRENT_USER });
};
