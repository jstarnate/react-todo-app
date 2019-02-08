import uuid from 'uuid/v4';

export const initialState = {
	categories: [],
	todos: [],
	category: null,
	addMode: false,
	editMode: false,
	editTarget: null,
	mobile: false,
	showSidebar: false
};

export default (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_CATEGORY':
			const newCategory = {
				id: (Date.now()).toString(),
				name: action.name
			};

			return { ...state, categories: [ newCategory, ...state.categories ] };

		case 'SELECT_CATEGORY':
			return { ...state, category: action.name };

		case 'DELETE_CATEGORY':
			const filtered = state.categories.filter(category => category.id !== action.id);

			return {
				...state,
				categories: filtered,
				category: state.category === action.name ? null : state.category
			};

		case 'DELETE_TODOS_UNDER_CATEGORY':
			return {
				...state,
				todos: state.todos.filter(todo => todo.category !== action.category)
			};

		case 'ADD_TODO':
			const newTodo = {
				id: uuid(),
				description: action.description,
				category: action.category,
				done: false
			};

			return {
				...state,
				addMode: false,
				todos: [ newTodo, ...state.todos ]
			};

		case 'TOGGLE_TODO':
			return {
				...state,
				todos: state.todos.map(todo => {
					if(todo.id === action.id) {
						return { ...todo, done: !todo.done };
					}
					return todo;
				})
			};

		case 'EDIT_TODO':
			return {
				...state,
				addMode: false,
				editMode: true,
				editTarget: action.id
			};

		case 'SUBMIT_EDITED_TODO':
			return {
				...state,
				todos: state.todos.map(todo => {
					if(state.editTarget === todo.id) {
						return { ...todo, description: action.description };
					}
					return todo;
				}),
				editMode: false,
				editTarget: null
			};

		case 'DELETE_TODO':
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.id)
			};

		case 'TOGGLE_ADD_MODE':
			return {
				...state,
				addMode: !state.addMode,
				editMode: false,
				editTarget: null
			};

		case 'DISABLE_ADD_MODE':
			return { ...state, addMode: false };

		case 'DISABLE_EDIT_MODE':
			return { ...state, editMode: false, editTarget: null };

		case 'MOBILE_ON':
			return { ...state, mobile: true };

		case 'MOBILE_OFF':
			return { ...state, mobile: false };

		case 'SHOW_SIDEBAR':
			return { ...state, showSidebar: true };

		case 'HIDE_SIDEBAR':
			return { ...state, showSidebar: false };

		default:
			return state;
	}
}