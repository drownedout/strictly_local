import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveCities } from '../../actions/cities';
import LoadingBar from 'react-redux-loading';
import CityItem from './CityItem';

class CityList extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
	   	dispatch(receiveCities());
	}

	render(){
		const { cities, loading } = this.props;

		return (
			<div>
				<LoadingBar />
				{loading === true
		            ? null
		            : <div>
		              	<h1>Cities</h1>
		              	<ul>
		              	{Object.values(cities).map((city) => (
				            <li key={city._id}>
				              <CityItem id={city._id} city={city}/>
				            </li>
				        ))}
				        </ul>
		              </div>
		        }
	        </div>
        )
	}
}

function mapStateToProps({ cities }){
	return {
		cities,
		loading: cities === null
	}
}

export default connect(mapStateToProps)(CityList);