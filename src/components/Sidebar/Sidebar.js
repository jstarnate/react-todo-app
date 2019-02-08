import React, { Component, Fragment, createRef, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import SidebarMessage from './Message';
import Form from './Form';
import { disableSidebar } from 'Actions/sidebar';

const mapStateToProps = ({ categories, mobile, showSidebar }) => ({ categories, mobile, showSidebar });

const Categories = lazy(() => import('./Categories'))

class Sidebar extends Component {
	static propTypes = {
		categories: PropTypes.arrayOf(PropTypes.object),
		mobile: PropTypes.bool,
		showSidebar: PropTypes.bool,
		disableSidebar: PropTypes.func
	}

	sidebar = createRef()

	componentDidMount() {
		if(this.props.mobile && this.props.showSidebar) {
			setTimeout(() => {
				window.addEventListener('click', this.hideSidebar);
			}, 0);
		}
	}

	componentWillUnmount() {
		window.removeEventListener('click', this.hideSidebar);
	}

	hideSidebar = e => {
		const target = e.target;

		if(!this.sidebar.current.contains(target)) {
			this.props.disableSidebar();
		}
	}

	render() {
		const { categories, mobile, showSidebar } = this.props;
		
		return(
			<Fragment>
				{ (mobile && showSidebar) && <div className='app__overlay' /> }
				<aside className='sidebar' ref={this.sidebar}>
					<div className='sidebar__wrap flex flex--column'>
						<Form />
						{
							!categories.length ?
							<SidebarMessage /> :
							<Suspense fallback={<Spinner color='white' />}>
								<Categories {...{ categories }} />
							</Suspense>
						}
					</div>
				</aside>
			</Fragment>
		)
	}
}

export default connect(mapStateToProps, { disableSidebar })(Sidebar);