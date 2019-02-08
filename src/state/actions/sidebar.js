export const enableSidebar = () => dispatch => {
	dispatch({ type: 'SHOW_SIDEBAR' })
}

export const disableSidebar = () => dispatch => {
	dispatch({ type: 'HIDE_SIDEBAR' })
}