import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CityList from '../../components/cities/CityList';

function CityIndex() {
	return (
		<div className="city-list-container">
			<h1 className="city-list-header">Cities</h1>
			<CityList />
		</div>
	);
}


export default CityIndex;
