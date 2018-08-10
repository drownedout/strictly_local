import axios from 'axios';
import { RECEIVE_CITIES } from './types';


export function receiveCities(){
	return function(dispatch){
		axios.get('http://localhost:4000/cities')
			.then(cities => {
				dispatch({
					type: RECEIVE_CITIES,
					cities: cities.data
				})
			})
	}
}
