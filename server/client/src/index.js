import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import middleware from './middleware';

import App from './components/App';
import Login from './components/authentication/Login';
import Logout from './components/authentication/Logout';
import CityIndex from './pages/City/CityIndex';
import CityItem from './components/cities/CityItem';
import SignUp from './components/authentication/SignUp';
import Home from './components/static/Home';

import reducers from './reducers';

const store = createStore(
	reducers,
	{
		authentication: {
			authenticated: localStorage.getItem('token')
		},
	},
	middleware,
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App>
				<Route path="/" exact component={Home} />
				<Route path="/cities" exact component={CityIndex} />
				<Route path="/cities/:id" exact component={CityItem} />
				<Route path="/signup" exact component={SignUp} />
				<Route path="/login" exact component={Login} />
				<Route path="/logout" exact component={Logout} />
			</App>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root'),
);
