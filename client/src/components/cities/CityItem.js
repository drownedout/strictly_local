import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityItem extends Component {
	render(){
		const { city } = this.props;
		return (
			<div>
				<p>{city.name}</p>
				<p>{city.description}</p>
	        </div>
        )
	}
}

function mapStateToProps({ }, {id, city}){
	return {
		city
	}
}

export default connect(mapStateToProps)(CityItem);