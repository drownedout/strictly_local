import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receiveCity } from '../../../actions/cities';

import CityBanner from '../CityBanner';
import CityDetail from '../CityDetail';

class CityItemContainer extends Component {
	componentDidMount() {
		const { dispatch, id } = this.props;
		dispatch(receiveCity(id));
	}

	render() {
		const { city } = this.props;
		const { name, description } = city;

		if (!city) {
			return <div> Loading... </div>;
		}

		return (
			<div className="city-page">
				<CityBanner name={name} />
				<CityDetail name={name} description={description} />
			</div>
		);
	}
}

CityItemContainer.propTypes = {
	id: PropTypes.string,
	city: PropTypes.object,
	loading: PropTypes.bool,
	dispatch: PropTypes.func,
};


function mapStateToProps({ cities }, props) {
	const { id } = props.match.params;
	const city = cities[id];

	return {
		id,
		city,
		loading: city === null,
	};
}


export default connect(mapStateToProps)(CityItemContainer);
