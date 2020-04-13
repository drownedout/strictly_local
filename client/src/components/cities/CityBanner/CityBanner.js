import React from 'react';
import PropTypes from 'prop-types';
import paint from '../../../styles/images/paint.svg';

function CityBanner({ name }) {
	return (
		<div className="city-banner">
			<div className="city-banner-content">
				<h1 className="city-name">{name}</h1>
				<h3 className="city-state">California</h3>
			</div>
			<img className="banner-underline" src={paint} alt="underline" />
		</div>
	);
}

CityBanner.defaultProps = {
	name: '',
};

CityBanner.propTypes = {
	name: PropTypes.string,
};


export default CityBanner;
