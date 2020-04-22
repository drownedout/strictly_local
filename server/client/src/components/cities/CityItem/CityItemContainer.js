import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading';
import { connect } from 'react-redux';
import { receiveCity } from '../../../actions/cities';

import CityBanner from '../CityBanner';
import CityDetail from '../CityDetail';
import Menu from '../../shared/Menu';


class CityItemContainer extends Component {
	componentDidMount() {
		const { dispatch, id } = this.props;
		dispatch(receiveCity(id));
	}

	render() {
		const { city, loading } = this.props;
		const { name, description, events } = city;

		return (
			<div>
				<LoadingBar />
				{loading === true
					? null
					: (
						<div className="city-page">
							<CityBanner name={name} />
							<Menu />
							<CityDetail
								name={name}
								description={description}
								events={events}
							/>
						</div>
					)}
			</div>
		);
	}
}

CityItemContainer.defaultProps = {
	id: '',
	city: { name: '', description: '', events: [] },
	loading: true,
	dispatch: PropTypes.func,
};

CityItemContainer.propTypes = {
	id: PropTypes.string,
	city: PropTypes.shape,
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
