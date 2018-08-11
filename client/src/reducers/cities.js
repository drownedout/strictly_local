import _ from 'lodash';
import { RECEIVE_CITIES } from '../actions/types';
import { RECEIVE_CITY } from '../actions/types';

export default function cities(state={}, action){
	switch(action.type){
		case RECEIVE_CITIES:
			return _.mapKeys(action.cities, '_id')
		case RECEIVE_CITY:
			return {
				...state,
				[action.city._id]: action.city
			}
		default:
			return state;
	}
}