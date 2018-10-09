import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Logout extends Component {
	componentDidMount() {
		const { logout } = this.props;
		logout();
	}

	render() {
		return (
			<div>
				<h2>
					You are now logged out!
				</h2>
			</div>
		);
	}
}

export default connect(null, actions)(Logout);
