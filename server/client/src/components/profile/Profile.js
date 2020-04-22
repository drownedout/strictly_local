import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrentUserData } from '../../actions/users';
import defaultProfilePicture from '../../styles/images/default_profile_photo.jpeg';

class Profile extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchCurrentUserData());
	}

	render() {
		const { currentUser } = this.props;
		const { firstName, lastName, profilePicture } = currentUser;
		return (
			<div className="container md">
				<h1>
					{firstName}
					{lastName}
				</h1>
				<img src={profilePicture || defaultProfilePicture} alt="profile_picture" />
			</div>
		);
	}
}

Profile.defaultProps = {
	currentUser: {
		firstName: '',
		lastName: '',
		profilePicture: defaultProfilePicture,
	},
	dispatch: null,
};

Profile.propTypes = {
	currentUser: PropTypes.instanceOf,
	dispatch: PropTypes.func,
};

function mapStateToProps({ users }) {
	const { currentUser } = users;

	return {
		currentUser
	};
}


export default connect(mapStateToProps)(Profile);
