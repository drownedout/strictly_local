import React from 'react';
import PropTypes from 'prop-types';

function Title({ text, backgroundImage }) {
	const styles = {
		'background-image': backgroundImage,
	};

	return (
		<h1 style={styles}>{text}</h1>
	);
}

Title.defaultProps = {
	text: '',
	backgroundImage: '',
};

Title.propTypes = {
	text: PropTypes.string,
	backgroundImage: PropTypes.string,
};

export default Title;
