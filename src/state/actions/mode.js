export const toggleAddMode = () => dispatch => {
	dispatch({ type: 'TOGGLE_ADD_MODE' })
}

export const disableAddMode = () => dispatch => {
	dispatch({ type: 'DISABLE_ADD_MODE' })
}

export const disableEditMode = () => dispatch => {
	dispatch({ type: 'DISABLE_EDIT_MODE' })
}