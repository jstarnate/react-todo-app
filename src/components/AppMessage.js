import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { enableSidebar } from 'Actions/sidebar';

const AppMessage = ({ enableSidebar }) => (
	<section className='app__message flex--center'>
		<div>
			<h1 className='app__message-text'>Choose a category first to see or add to-dos</h1>
			<button className='app__message-button button' onClick={enableSidebar}>See categories</button>
		</div>
	</section>
)

AppMessage.propTypes = {
	enableSidebar: Proptypes.func
}

export default connect(null, { enableSidebar })(AppMessage);