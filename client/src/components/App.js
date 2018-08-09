import React, { Component } from 'react';
import Navbar from './shared/Navbar';
import Login from './authentication/Login';
import Signup from './authentication/Signup';

function App({ children }) {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
}

export default App;