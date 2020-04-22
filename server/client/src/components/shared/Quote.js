import React from 'react';
import PropTypes from 'prop-types';

function Quote({ text, author }) {
	return (
		<div className="quote-container">
			<div className="inner-quote-container">
				<p className="quote">{text}</p>
				<p className="author">{author}</p>
			</div>
		</div>
	);
}

Quote.defaultProps = {
	text: '',
	author: '',
};

Quote.propTypes = {
	text: PropTypes.string,
	author: PropTypes.string,
};

export default Quote;
