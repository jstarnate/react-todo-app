import React, { createContext } from 'react';
import Header from './Header/Header';
import List from './List';

export const TodosContext = createContext();

export default ({ link }) => (
	<section className='todo'>
		<TodosContext.Provider value={{ link }}>
			<Header />
			<List />
		</TodosContext.Provider>
	</section>
)