import { string, number, bool, oneOfType } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Checked from 'Helpers/Checked';
import Unchecked from 'Helpers/Unchecked';
import Edit from 'Helpers/Edit';
import Cancel from 'Helpers/Cancel';
import { set, update, destroy } from 'Actions';

function Item({ id, description, done }) {
    const todos = useSelector(state => state.todos);
    const selectedTodo = todos.find(todo => todo.id === id);
    const dispatch = useDispatch();

    function toggleTodo() {
        dispatch(
            update('todos', id, { ...selectedTodo, done: !selectedTodo.done })
        );
    }

    function enableEditmode() {
        dispatch(set('addMode', false));
        dispatch(set('editMode', true));
        dispatch(set('editTarget', id));
    }

    function deleteTodo() {
        dispatch(destroy('todos', id));
    }

    return (
        <li className='todo__item flex--sb'>
            <label className='todo__description flex--ai-center'>
                <input
                    className='todo__checkbox'
                    type='checkbox'
                    onChange={toggleTodo}
                />
                {done ? (
                    <span>
                        <Checked />
                    </span>
                ) : (
                    <span>
                        <Unchecked />
                    </span>
                )}
                <span className={`todo__text ${done ? 'done' : ''}`}>
                    {description}
                </span>
            </label>

            <div className='todo__buttons flex--ai-center'>
                {!done && (
                    <button
                        className='todo__button button'
                        title='Edit'
                        onClick={enableEditmode}>
                        <Edit fill='#9f9f9f' />
                    </button>
                )}

                <button
                    className='todo__button button'
                    title='Delete'
                    onClick={deleteTodo}>
                    <Cancel fill='#9f9f9f' size={20} />
                </button>
            </div>
        </li>
    );
}

Item.propTypes = {
    id: oneOfType([number, string]),
    description: string,
    done: bool,
};

export default Item;
