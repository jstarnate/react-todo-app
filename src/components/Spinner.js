import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ color }) => (
	<section className='app__loader flex--center'>
		<div className={`app__spinner spinner--${color}`} />
	</section>
)

Spinner.propTypes = {
	color: PropTypes.string.isRequired
}

export default Spinner;