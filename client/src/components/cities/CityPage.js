import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receiveCity } from '../../actions/cities';

class CityPage extends Component {
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
				<div className="city-banner">
					<div className="city-banner-content">
						<h1 className="city-name">{name}</h1>
						<h3 className="city-state">California</h3>
					</div>
				</div>

				<div className="city-page-container">
					<div className="city-detail-main">
						<h2 className="city-about-title">
							About {name}, California
						</h2>
						<p className="city-description">
							{description}
						</p>
					</div>
					<div className="city-detail-aside">
						<div className="map-thumbnail">
						</div>
						<div className="city-meta">
						</div>
					</div>
				</div>
			</div>
		);
	}
}

CityPage.propTypes = {
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


export default connect(mapStateToProps)(CityPage);
