import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
	renderLinks() {
		const { authenticated } = this.props;
		if (authenticated) {
			return (
				<div className="nav-wrapper">
					<Link to="/cities">Explore</Link>
					<Link to="/protected">Protected Route</Link>
					<Link to="/logout">Logout</Link>
				</div>
			);
		}
		return (
			<div className="nav-wrapper">
				<Link to="/cities">Explore</Link>
				<Link to="/signup">Sign Up</Link>
				<Link to="/login">Login</Link>
			</div>
		);
	}

	render() {
		return (
			<nav className="navbar">
				<div className="nav-wrapper">
					<Link to="/">Home</Link>
					<Link to="/">About</Link>
					<Link to="/">Contact</Link>
				</div>
				{this.renderLinks()}
			</nav>
		);
	}
}

function mapStateToProps({ authentication }) {
	const { authenticated } = authentication;
	return { authenticated };
}

export default connect(mapStateToProps)(Navbar);
