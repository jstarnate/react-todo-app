import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';
import todoInput from './TodoInput';
import Plus from 'Helpers/Plus';
import Edit from 'Helpers/Edit';
import { set, unshiftAdd, update } from 'Actions';

function List() {
    const todos = useSelector(state => state.todos);
    const addMode = useSelector(state => state.addMode);
    const editMode = useSelector(state => state.editMode);
    const editTarget = useSelector(state => state.editTarget);
    const selectedCategory = useSelector(state => state.category);
    const dispatch = useDispatch();
    const selected = todos.find(todo => todo.id === editTarget);
    const specificTodos = todos.filter(
        todo => todo.category === selectedCategory
    );
    const AddTodoInput = todoInput(addTodo, selectedCategory);
    const EditTodoInput = todoInput(submitEditedTodo);

    function disableAddMode() {
        dispatch(set('addMode', false));
    }

    function addTodo(description, category) {
        const newTodo = {
            id: uuidv4(),
            done: false,
            description,
            category,
        };

        dispatch(unshiftAdd('todos', newTodo));
        dispatch(set('addMode', false));
    }

    function disableEditMode() {
        dispatch(set('editMode', false));
        dispatch(set('editTarget', null));
    }

    function submitEditedTodo(description) {
        dispatch(update('todos', editTarget, { ...selected, description }));
        dispatch(set('editMode', false));
        dispatch(set('editTarget', null));
    }

    return (
        <section className='todo__list'>
            <ul>
                {addMode && (
                    <AddTodoInput
                        list={specificTodos}
                        icon={<Plus fill='#ffffff' size={20} />}
                        closeEvent={disableAddMode}
                    />
                )}
                {specificTodos.map(item =>
                    editMode && editTarget === item.id ? (
                        <EditTodoInput
                            key={item.id}
                            list={specificTodos}
                            selectedValue={selected.description}
                            icon={<Edit fill='#ffffff' />}
                            closeEvent={disableEditMode}
                        />
                    ) : (
                        <TodoItem key={item.id} {...item} />
                    )
                )}
            </ul>
        </section>
    );
}

export default List;
