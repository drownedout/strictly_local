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

		if(!city) {
			return <div> Loading... </div>
		}

		return (
			<div className="city-page">
				<div className="city-banner">
					<div className="city-banner-content">
						<h1 className="city-name">{city.name}</h1>
						<h3 className="city-state">California</h3>
					</div>
				</div>
				<div className="city-page-container">
					<div className="city-detail-main">
						<h2 className="city-about-title">About {city.name}, California</h2>
						<p className="city-description">Lorem ipsum dolor sit amet, consectetur 
						adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
						magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
						laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in 
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla qui officia 
						deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste 
						natus error sit voluptatem accusantium doloremque laudantium, totam 
						rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
						architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
						voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed 
						quia consequuntur magni dolores eos qui ratione voluptatem 
						sequi nesciunt</p>
					</div>
					<div className="city-detail-aside">
						<div className="map-thumbnail">
						</div>
						<div className="city-meta">
						</div>
					</div>
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
		city,
		loading: city === null
	}
}


export default connect(mapStateToProps)(CityPage);