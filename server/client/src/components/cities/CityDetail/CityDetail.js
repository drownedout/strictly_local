import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Thumbnail from '../../shared/Thumbnail';


function CityDetail({ description, events }) {
	return (
		<div className="city-detail-container">
			<div className="city-detail-main">
				<h2 className="city-about-title">About</h2>
				<p className="city-description">{description}</p>
			</div>
			<div className="city-detail-aside">
				<div className="map-thumbnail"></div>
				<div className="city-meta"></div>
			</div>
			<ul>
				{_.map(events, _event => (
					<li key={_event._id} className="city-show-thumbnail">
						<Thumbnail
							imageSrc=""
							path={`/cities/${_event._id}`}
							name={_event.name}
							description={_event.description}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

CityDetail.defaultProps = {
	description: '',
	events: [],
};

CityDetail.propTypes = {
	description: PropTypes.string,
	events: PropTypes.arrayOf,
};

export default CityDetail;
