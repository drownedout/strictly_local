import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

	renderLinks(){
		if (this.props.authenticated){
			return (
				<div className="nav-wrapper">
					<Link to='/cities'>Explore</Link>
					<Link to='/protected'>Protected Route</Link>
					<Link to='/logout'>Logout</Link>
				</div>
			);
		} else {
			return (
				<div className="nav-wrapper">
					<Link to='/cities'>Explore</Link>
					<Link to='/signup'>Sign Up</Link>
					<Link to='/login'>Login</Link>
				</div>
			)
		}
	}

	render(){
		return (
			<nav className="navbar">
				<div className="nav-wrapper">
					<Link to='/'>Home</Link>
					<Link to='/'>About</Link>
					<Link to='/'>Contact</Link>
				</div>
				{this.renderLinks()}
			</nav>
		)
	}
}

function mapStateToProps(state){
	return { authenticated: state.authentication.authenticated }
}

export default connect(mapStateToProps)(Navbar);