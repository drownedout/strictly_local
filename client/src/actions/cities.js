import axios from 'axios';
import { RECEIVE_CITIES, RECEIVE_CITY } from './types';


export function receiveCities(){
	return function(dispatch){
		axios({
			url: 'http://localhost:4000/cities',
			method: 'get',
			responseType: 'json'})
			.then(cities => {
				dispatch({
					type: RECEIVE_CITIES,
					cities: cities.data
				})
			})
	}
}


export function receiveCity(id){
	return function(dispatch){
		axios({
			url: `http://localhost:4000/cities/${id}`,
			method: 'get',
			responseType: 'json'})
			.then(city => {
				dispatch({
					type: RECEIVE_CITY,
					city: city.data
				})
			})

	}
}