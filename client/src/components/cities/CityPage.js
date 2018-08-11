import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveCity } from '../../actions/cities';

class CityPage extends Component {

	componentDidMount() {
		const { dispatch, id } = this.props;
	   	dispatch(receiveCity(id));
	}

	render(){
		const { city } = this.props;
		return (
			<div className="city-page">
				<div className="city-page-container">
					<h3 className="city-name">Name</h3>
					<p className="city-description"></p>
				</div>
	        </div>
        )
	}
}

function mapStateToProps({ cities }, props) {
	const { id } = props.match.params;
	const city  = cities[id];

	console.log(cities);
	return {
		id,
		city
	}
}


export default connect(mapStateToProps)(CityPage);