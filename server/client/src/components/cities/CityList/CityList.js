import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Thumbnail from '../../shared/Thumbnail';

function CityList({ cities }) {
	return (
		<ul className="city-list">
			{_.map(cities, city => (
				<li key={city._id} className="city-item">
					<Thumbnail
						imageSrc=""
						path={`/cities/${city._id}`}
						name={city.name}
						description={city.description}
					/>
				</li>
			))}
		</ul>
	);
}

CityList.defaultProps = {
	cities: [],
};

CityList.propTypes = {
	cities: PropTypes.arrayOf(PropTypes.shape),
};


export default CityList;
