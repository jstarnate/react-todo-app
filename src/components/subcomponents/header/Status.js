import { useSelector } from 'react-redux';

function Status() {
    const todos = useSelector(state => state.todos);
    const category = useSelector(state => state.category);
    const displayedTodos = todos.filter(todo => todo.category === category);
    const done = displayedTodos.filter(item => item.done).length;

    return (
        <h1 className='header__status'>
            Done <em>{done}</em> out of <em>{displayedTodos.length}</em>{' '}
            {displayedTodos.length <= 1 ? 'to-do' : 'to-dos'}
        </h1>
    );
}

export default Status;
