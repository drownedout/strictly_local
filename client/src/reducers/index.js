import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { loadingBarReducer } from 'react-redux-loading';
import authentication from './authentication';
import cities from './cities';


export default combineReducers({
	authentication,
	cities,
	form: formReducer,
	loadingBar: loadingBarReducer,
});
