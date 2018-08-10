import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityItem extends Component {
	render(){
		const { city } = this.props;
		return (
			<div className="city-item-information">
				<h3 className="city-name">{city.name}</h3>
				<p className="city-description">{city.description}</p>
	        </div>
        )
	}
}

function mapStateToProps(state, {id, city}){
	return {
		city
	}
}

export default connect(mapStateToProps)(CityItem);