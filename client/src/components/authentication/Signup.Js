import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignUp extends Component {
	onSubmit = (formProps) => {
		const { signup, history } = this.props;

		signup(formProps, () => {
			history.push('/');
		});
	};

	render() {
		// handleSubmit is provided by reduxForm
		const { handleSubmit, errorMessage } = this.props;

		return (
			<div className="form-container">
				<form className="form" onSubmit={handleSubmit(this.onSubmit)}>
					<h1>Sign Up</h1>
					<fieldset>
						<label>Username</label>
						<Field
							name="username"
							type="text"
							component="input"
						/>
					</fieldset>
					<fieldset>
						<label>First Name</label>
						<Field
							name="firstName"
							type="text"
							component="input"
						/>
					</fieldset>
					<fieldset>
						<label>Last Name</label>
						<Field
							name="lastName"
							type="text"
							component="input"
						/>
					</fieldset>
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
					<button type="submit" className="btn primary">Sign Up</button>
				</form>
			</div>
		);
	}
}

function mapStateToProps({ authentication }) {
	const { errorMessage } = authentication;
	return { errorMessage };
}

export default compose(
	connect(mapStateToProps, actions),
	reduxForm({ form: 'signup' }),
)(SignUp);
