import React, { Component } from 'react';
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
