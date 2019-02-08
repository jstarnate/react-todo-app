import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Status from './Status';
import Button from './Button';
import { MenuIcon } from 'Icons';
import { enableSidebar } from 'Actions/sidebar';

const mapStateToProps = ({ mobile }) => ({ mobile });

const Header = ({ mobile, enableSidebar }) => (
	<header className='header flex--sb'>
		{
			mobile &&
			<button className='header__menu-button button' onClick={enableSidebar}>
				<MenuIcon />
			</button>
		}
		<Status />
		<Button />
	</header>
)

Header.propTypes = {
	mobile: PropTypes.bool,
	enableSidebar: PropTypes.func
}

export default connect(mapStateToProps, { enableSidebar })(Header);