import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import LoadingBar from 'react-redux-loading';
import CityItem from './CityItem';
import { receiveCities } from '../../actions/cities';

class CityList extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(receiveCities());
	}

	render() {
		const { cities, loading } = this.props;

		return (
			<div>
				<LoadingBar />
				{loading === true
					? null
					: (
						<div className="city-list-container">
							<h1>Cities</h1>
							<ul className="city-list">
								{_.map(cities, city => (
									<li key={city._id} className="city-item">
										<CityItem id={city._id} city={city} />
									</li>
								))}
							</ul>
						</div>
					)
				}
			</div>
		);
	}
}

function mapStateToProps({ cities }) {
	return {
		cities,
		loading: cities === null,
	};
}

export default connect(mapStateToProps)(CityList);
