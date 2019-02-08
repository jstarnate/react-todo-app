import React from 'react';
import Category from './Category';
import PropTypes from 'prop-types';

const Categories = ({ categories }) => (
	<section className='sidebar__categories'>
		<nav>
			{categories.map(({id, name}) => (
				<Category key={id} id={id} linkName={name} />
			))}
		</nav>
	</section>
)

Categories.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.object)
}

export default Categories;