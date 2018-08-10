import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Signup from './components/authentication/Signup';
import Login from './components/authentication/Login';
import Logout from './components/authentication/Logout';
import CityList from './components/cities/CityList';

import reducers from './reducers';

const store = createStore(
	reducers,
	{
		authentication: { authenticated: localStorage.getItem('token') }
	},
	applyMiddleware(reduxThunk)
);

ReactDOM.render(
	<Provider store={ store }>
		<BrowserRouter>
			<App>
				<Route path="/cities" exact component={CityList} />
				<Route path="/signup" exact component={Signup} />
				<Route path="/login" exact component={Login} />
				<Route path="/logout" exact component={Logout} />
			</App>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);