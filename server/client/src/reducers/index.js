import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { loadingBarReducer } from 'react-redux-loading';
import authentication from './authentication';
import cities from './cities';
import users from './users';


export default combineReducers({
	authentication,
	cities,
	users,
	form: formReducer,
	loadingBar: loadingBarReducer,
});
