import { RECEIVE_CURRENT_USER } from '../actions/types';

export default function users(state = {}, action) {
	switch (action.type) {
	case RECEIVE_CURRENT_USER:
		return {
			...state,
			currentUser: { ...action.user },
		};
	default:
		return state;
	}
}
