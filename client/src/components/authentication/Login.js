import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Login extends Component {

	// Arrow function so that we don't need to bind
	onSubmit = formProps => {
		this.props.login(formProps, () => {
			this.props.history.push('/');
		});
	};

	redirectUser() {
		if (this.props.authenticated) {
			this.props.history.push('/');
		}
	}

	render(){
		// handleSubmit is provided by reduxForm
		const { handleSubmit } = this.props;

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
					<div className="form-error">{this.props.errorMessage}</div>
					<button className="btn primary">Login</button>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { 
		errorMessage: state.authentication.errorMessage,
		authenticated: state.authentication.authenticated
	};
}

export default compose(
	connect(mapStateToProps, actions),
	reduxForm({ form: 'login' })
)(Login);