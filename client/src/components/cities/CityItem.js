import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CityItem extends Component {
	render() {
		const { city, id } = this.props;
		return (
			<div className="city-item-information">
				<h3 className="city-name"><Link to={`/cities/${id}`}>{city.name}</Link></h3>
				<p className="city-description">{city.description}</p>
			</div>
		);
	}
}

function mapStateToProps(state, { city }) {
	return {
		city,
	};
}

export default connect(mapStateToProps)(CityItem);
