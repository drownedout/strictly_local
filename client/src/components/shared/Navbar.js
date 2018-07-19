import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

	renderLinks(){
		if (this.props.authenticated){
			return (
				<div>
					<Link to='/logout'>Logout</Link>
					<Link to='/protected'>Protected Route</Link>
				</div>
			);
		} else {
			return (
				<div>
					<Link to='/signup'>Sign Up</Link>
					<Link to='/login'>Login</Link>
				</div>
			)
		}
	}

	render(){
		return (
			<div>
				<Link to='/'>Home</Link>
				{this.renderLinks()}
			</div>
		)
	}
}

function mapStateToProps(state){
	return { authenticated: state.authentication.authenticated }
}

export default connect(mapStateToProps)(Navbar);