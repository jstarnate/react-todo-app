export const addCategory = name => dispatch => {
	dispatch({
		type: 'ADD_CATEGORY',
		name
	})
}

export const selectCategory = name => dispatch => {
	dispatch({
		type: 'SELECT_CATEGORY',
		name
	})
}

export const deleteCategory = (id, name) => dispatch => {
	dispatch({
		type: 'DELETE_CATEGORY',
		id,
		name
	})
}

export const deleteTodosUnderCategory = category => dispatch => {
	dispatch({
		type: 'DELETE_TODOS_UNDER_CATEGORY',
		category
	})
}