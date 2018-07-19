import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignUp extends Component {

	// Arrow function so that we don't need to bind
	onSubmit = (formProps) => {
		this.props.signup(formProps);
	};

	render(){
		// handleSubmit is provided by reduxForm
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
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
				<button>Sign Up</button>
			</form>
		);
	}
}

export default compose(
	connect(null, actions),
	reduxForm({ form: 'signup' })
)(SignUp);