import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar/Sidebar';
import Spinner from './Spinner';
import AppMessage from './AppMessage';
import { mobileOn, mobileOff } from 'Actions/mobile';
import * as sidebarActions from 'Actions/sidebar';

const mapStateToProps = ({ categories, category, mobile, showSidebar }) => ({ categories, category, mobile, showSidebar });

const TodoWrap = lazy(() => import('./Todo/Wrap'));

class App extends Component {
	static propTypes = {
		categories: PropTypes.arrayOf(PropTypes.object),
		category: PropTypes.string,
		mobile: PropTypes.bool,
		showSidebar: PropTypes.bool,
		mobileOn: PropTypes.func,
		mobileOff: PropTypes.func,
		enableSidebar: PropTypes.func,
		disableSidebar: PropTypes.func
	}

	componentDidMount() {
		this.checkWindowSize();
		window.addEventListener('resize', this.checkWindowSize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.checkWindowSize);
	}

	checkWindowSize = () => {
		const { mobileOn, mobileOff, enableSidebar, disableSidebar } = this.props;

		if(window.innerWidth <= 768) {
			mobileOn();
			disableSidebar();
		} else {
			mobileOff();
			enableSidebar();
		}
	}

	render() {
		const { category, mobile, showSidebar } = this.props;

		return(
			<section className='app flex'>
      	
      	{ showSidebar && <Sidebar /> }

      	{
      		category
      		? <Suspense fallback={<Spinner color='blue' />}>
							<TodoWrap link={category} />
						</Suspense>
					: (mobile) ? <AppMessage /> : null
      	}
      
      </section>
		)
	}
}

export default connect(mapStateToProps, { mobileOn, mobileOff, ...sidebarActions })(App);