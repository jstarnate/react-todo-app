import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import state, { initialState } from './reducer';

const data = JSON.parse(localStorage.getItem('state')) || {
	categories: initialState.categories,
	todos: initialState.todos
};

function saveState(states) {
	localStorage.setItem('state', JSON.stringify(states));
}

const store = createStore(state, data, applyMiddleware(thunk));

store.subscribe(() => {
	saveState({
		categories: store.getState().categories,
		todos: store.getState().todos
	});
});

export default store;