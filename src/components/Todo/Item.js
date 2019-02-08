import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTodo, editTodo, deleteTodo } from 'Actions/todos';
import { CheckedIcon, UncheckedIcon, EditIcon, CancelIcon } from 'Icons';

const Item = ({ id, description, category, done, toggleTodo, editTodo, deleteTodo }) => (
	<li className='todo__item flex--sb'>

		<label className='todo__description flex--ai-center'>
			<input className='todo__checkbox' type='checkbox' onChange={toggleTodo.bind(this, id)} />
			{
				done
				? <span><CheckedIcon /></span>
				: <span><UncheckedIcon /></span>
			}
			<span className={`todo__text ${done ? 'done' : ''}`}>{description}</span>
		</label>

		<div className='todo__buttons flex--ai-center'>
			{
				!done &&
				<button
					className='todo__button button'
					title='Edit'
					onClick={editTodo.bind(this, id)}>
					<EditIcon fill='#9f9f9f' />
				</button>
			}

			<button
				className='todo__button button'
				title='Delete'
				onClick={deleteTodo.bind(this, id)}>
				<CancelIcon fill='#9f9f9f' size='20' />
			</button>
		</div>

	</li>
)

Item.propTypes = {
	id: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
	description: PropTypes.string,
	category: PropTypes.string,
	done: PropTypes.bool,
	toggleTodo: PropTypes.func,
	editTodo: PropTypes.func,
	deleteTodo: PropTypes.func
}

export default connect(null, { toggleTodo, editTodo, deleteTodo })(Item);