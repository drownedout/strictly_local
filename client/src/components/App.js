import React from 'react';
import '../styles/css/App.css'
import Navbar from './shared/Navbar';

function App({ children }) {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
}

export default App;