import { RECEIVE_CITIES } from '../actions/types';

export default function cities(state={}, action){
	switch(action.type){
		case RECEIVE_CITIES:
			console.log(action.cities);
			return {
				...state,
				...action.cities
			}
		default:
			return state;
	}
}