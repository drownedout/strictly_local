import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render(){
		return (
			<div>
				<Link to='/'>Home</Link>
				<Link to='/signup'>Sign Up</Link>
				<Link to='/login'>Login</Link>
				<Link to='/logout'>Logout</Link>
				<Link to='/protect'>Protected Route</Link>
			</div>
		)
	}
}

export default Navbar;