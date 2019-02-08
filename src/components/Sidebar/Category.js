import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CancelIcon } from 'Icons';
import { selectCategory, deleteCategory, deleteTodosUnderCategory } from 'Actions/categories';
import { disableSidebar } from 'Actions/sidebar';

const mapStateToProps = ({ category, mobile }) => ({ category, mobile });

class Category extends Component {
	static propTypes = {
		id: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
		category: PropTypes.string,
		linkName: PropTypes.string,
		mobile: PropTypes.bool,
		selectCategory: PropTypes.func,
		disableSidebar: PropTypes.func,
		deleteCategory: PropTypes.func,
		deleteTodosUnderCategory: PropTypes.func,
	}

	select = linkName => {
		const { mobile, selectCategory, disableSidebar } = this.props;
		
		if(mobile) {
			disableSidebar();
		}

		selectCategory(linkName);
	}

	removeCategory = (id, linkName) => {
		const { deleteCategory, deleteTodosUnderCategory } = this.props;

		deleteCategory(id, linkName);
		deleteTodosUnderCategory(linkName);
	}

	render() {
		const { id, category, linkName } = this.props;

		return(
			<div className={`sidebar__nav-item flex--ai-center ${category === linkName ? 'active-category' : ''}`}>
				<button
					className='sidebar__link button'
					title={linkName}
					onClick={this.select.bind(this, linkName)}>
					{linkName}
				</button>

				<button
					className='sidebar__delete-button button'
					onClick={this.removeCategory.bind(this, id, linkName)}>
					<CancelIcon fill='#ffffff' size='15' />
				</button>
			</div>
		)
	}
}

export default connect(
	mapStateToProps,
	{ selectCategory, deleteCategory, deleteTodosUnderCategory, disableSidebar }
)(Category);