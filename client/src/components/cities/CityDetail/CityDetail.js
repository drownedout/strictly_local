import React from 'react';
import PropTypes from 'prop-types';


function CityDetail({ name, description }) {
	return (
		<div className="city-detail-container">
			<div className="city-detail-main">
				<h2 className="city-about-title">About</h2>
				<p className="city-description">{description}</p>
			</div>
			<div className="city-detail-aside">
				<div className="map-thumbnail"></div>
				<div className="city-meta"></div>
			</div>
		</div>
	);
}

CityDetail.defaultProps = {
	name: '',
	description: '',
};

CityDetail.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
};

export default CityDetail;
