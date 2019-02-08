import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TodosContext } from './Wrap';
import Item from './Item';
import todoForm from './Form';
import { PlusIcon, EditIcon } from 'Icons';
import { addTodo, submitEditedTodo } from 'Actions/todos';
import { disableAddMode, disableEditMode } from 'Actions/mode';

const mapStateToProps = ({ todos, addMode, editMode, editTarget, disableAddMode, disableEditMode }) => ({
	todos, addMode, editMode, editTarget, addTodo, submitEditedTodo, disableAddMode, disableEditMode
});

const List = ({ todos, addMode, editMode, editTarget, addTodo, submitEditedTodo, disableAddMode, disableEditMode }) => (
	<TodosContext.Consumer>
		{({ link }) => {
			const specificTodos = todos.filter(todo => todo.category === link);
			const selected = todos.find(todo => todo.id === editTarget);
			const AddForm = todoForm(addTodo, link);
			const EditForm = todoForm(submitEditedTodo);

			return(
				<section className='todo__list'>
					<ul>
						{
							addMode &&
							<AddForm
								list={specificTodos}
								windowEvent={disableAddMode}
								icon={<PlusIcon fill='#ffffff' size='20' />} />
						}
						{specificTodos.map(item => (
							editMode && editTarget === item.id
							? <EditForm
									key={item.id}
									list={specificTodos}
									value={selected.description}
									windowEvent={disableEditMode}
									icon={<EditIcon fill='#ffffff' />} />
							: <Item key={item.id} {...item} />
						))}
					</ul>
				</section>
			)
		}}
	</TodosContext.Consumer>
)

List.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object),
	addMode: PropTypes.bool,
	editMode: PropTypes.bool,
	editTarget: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
	addTodo: PropTypes.func,
	submitEditedTodo: PropTypes.func,
	disableAddMode: PropTypes.func,
	disableEditMode: PropTypes.func
}

export default connect(mapStateToProps, { addTodo, submitEditedTodo, disableAddMode, disableEditMode })(List);