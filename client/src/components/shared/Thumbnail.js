import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Thumbnail({ imageSrc, name, description, path }) {
	return (
		<div className="city-item-content">
			<div className="image-container">
				<img src={imageSrc} alt="" />
			</div>
			<div className="city-item-information">
				<h3 className="city-name">
					<Link to={path}>
						{name}
					</Link>
				</h3>
				<p className="city-description">
					{description}
				</p>
			</div>
		</div>
	);
}

Thumbnail.defaultProps = {
	imageSrc: '',
	name: '',
	description: '',
	path: '',
};

Thumbnail.propTypes = {
	imageSrc: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	path: PropTypes.string,
};

export default Thumbnail;
