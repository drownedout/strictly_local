import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityPage extends Component {
	render(){
		return (
			<div className="city-page">
				<div className="city-page-container">
					<h3 className="city-name">Name</h3>
					<p className="city-description">description</p>
				</div>
	        </div>
        )
	}
}

function mapStateToProps({ cities }, props) {
	const { id } = props.match.params
	return {
		id
	}
}


export default connect(mapStateToProps)(CityPage);