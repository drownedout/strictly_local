import axios from 'axios';
import { RECEIVE_CITIES, RECEIVE_CITY } from './types';

export const receiveCities = () => async (dispatch) => {
	try {
		const response = await axios({
			url: 'http://localhost:4000/cities',
			method: 'get',
			responseType: 'json',
		});

		dispatch({ type: RECEIVE_CITIES, cities: response.data });
	} catch (error) {
		throw error;
	}
};

export const receiveCity = id => async (dispatch) => {
	try {
		const response = await axios({
			url: `http://localhost:4000/cities/${id}`,
			method: 'get',
			responseType: 'json',
		});

		dispatch({
			type: RECEIVE_CITY,
			city: response.data.city,
			events: response.data.events,
		});
	} catch (error) {
		throw error;
	}
};
