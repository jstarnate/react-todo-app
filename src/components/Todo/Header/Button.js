import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleAddMode } from 'Actions/mode';
import { PlusIcon, CancelIcon } from 'Icons';

const mapStateToProps = ({ addMode }) => ({ addMode });

const Button = ({ addMode, toggleAddMode }) => (
	<button
		className='header__button button'
		title={addMode ? 'Cancel' : 'Add a to-do'}
		onClick={toggleAddMode}>
		{
			addMode
			? <CancelIcon fill='#e12121' size='25' />
			: <PlusIcon fill='#21a1e1' size='25' />
		}
	</button>
)

Button.propTypes = {
	addMode: PropTypes.bool,
	toggleAddMode: PropTypes.func
}

export default connect(mapStateToProps, { toggleAddMode })(Button);