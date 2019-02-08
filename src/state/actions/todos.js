export const addTodo = (description, category) => dispatch => {
	dispatch({
		type: 'ADD_TODO',
		description,
		category
	})
}

export const toggleTodo = id => dispatch => {
	dispatch({
		type: 'TOGGLE_TODO',
		id
	})
}

export const editTodo = id => dispatch => {
	dispatch({
		type: 'EDIT_TODO',
		id
	})
}

export const submitEditedTodo = description => dispatch => {
	dispatch({
		type: 'SUBMIT_EDITED_TODO',
		description
	})
}

export const deleteTodo = id => dispatch => {
	dispatch({
		type: 'DELETE_TODO',
		id
	})
}