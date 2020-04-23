import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/authentication';

class Logout extends Component {
	componentDidMount() {
		const { logout } = this.props;
		logout();
	}

	render() {
		return (
			<div>
				<h2>You are now logged out!</h2>
			</div>
		);
	}
}

Logout.defaultProps = {
	logout: null,
};

Logout.propTypes = {
	logout: PropTypes.func,
};

export default connect(null, actions)(Logout);
