import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TodosContext } from '../Wrap';

const mapStateToProps = ({ todos }) => ({ todos });

const Status = ({ todos }) => {
	const completed = todos.filter(todo => todo.done).length;

	return(
		<TodosContext.Consumer>
			{({ link }) => {
				const filtered = todos.filter(todo => todo.category === link);
				const done = filtered.filter(item => item.done).length;

				return(
					<h1 className='header__status'>
						Done <em>{done}</em> out of <em>{filtered.length}</em> {filtered.length <= 1 ? 'to-do' : 'to-dos'}
					</h1>
				)
			}}
		</TodosContext.Consumer>
	)
}

Status.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object)
}

export default connect(mapStateToProps)(Status);