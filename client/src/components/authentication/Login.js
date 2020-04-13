import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class Login extends Component {
	onSubmit = (formProps) => {
		const { login, history } = this.props;

		login(formProps, () => {
			history.push('/');
		});
	};

	redirectUser() {
		const { authenticated, history } = this.props;

		if (authenticated) {
			history.push('/');
		}
	}

	render() {
		// handleSubmit is provided by reduxForm
		const { handleSubmit, errorMessage } = this.props;

		return (
			<div className="form-container">
				{this.redirectUser()}
				<form className="form" onSubmit={handleSubmit(this.onSubmit)}>
					<h1>Login</h1>
					<fieldset>
						<label>Email</label>
						<Field
							name="email"
							type="text"
							component="input"
						/>
					</fieldset>
					<fieldset>
						<label>Password</label>
						<Field
							name="password"
							type="password"
							component="input"
						/>
					</fieldset>
					<div className="form-error">{errorMessage}</div>
					<button type="submit" className="btn primary">Login</button>
				</form>
			</div>
		);
	}
}

Login.defaultProps = {
	login: null,
	history: {},
	authenticated: '',
	handleSubmit: null,
	errorMessage: '',
};

Login.propTypes = {
	login: PropTypes.func,
	history: PropTypes.shape,
	handleSubmit: PropTypes.func,
	authenticated: PropTypes.string,
	errorMessage: PropTypes.string,
};

function mapStateToProps({ authentication }) {
	const { authenticated, errorMessage } = authentication;

	return {
		errorMessage,
		authenticated,
	};
}

export default compose(
	connect(mapStateToProps, actions),
	reduxForm({ form: 'login' }),
)(Login);
