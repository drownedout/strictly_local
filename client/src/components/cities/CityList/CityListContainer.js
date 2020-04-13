import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading';
import CityList from './CityList';
import { receiveCities } from '../../../actions/cities';

class CityListContainer extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(receiveCities());
	}

	render() {
		const { cities, loading } = this.props;
		return (
			<div>
				<LoadingBar />
				{loading === true
					? null
					: (
						<CityList cities={cities} />
					)}
			</div>
		);
	}
}

CityListContainer.defaultProps = {
	cities: [],
	loading: true,
	dispatch: null,
};

CityListContainer.propTypes = {
	cities: PropTypes.arrayOf(PropTypes.shape),
	loading: PropTypes.bool,
	dispatch: PropTypes.func,
};

function mapStateToProps({ cities }) {
	return {
		cities,
		loading: cities === null,
	};
}

export default connect(mapStateToProps)(CityListContainer);
