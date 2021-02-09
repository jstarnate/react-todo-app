import { useSelector, useDispatch } from 'react-redux';
import { string, number, oneOfType } from 'prop-types';
import Cancel from 'Helpers/Cancel';
import { set, destroy } from 'Actions';

function Category({ id, name }) {
    const todos = useSelector(state => state.todos);
    const category = useSelector(state => state.category);
    const mobile = useSelector(state => state.mobile);
    const dispatch = useDispatch();
    const activeClass = category === name ? 'active-category' : '';

    function select() {
        if (mobile) {
            dispatch(set('showSidebar', false));
        }

        dispatch(set('category', name));
    }

    function removeCategory() {
        const selectedCategory = category === name ? null : category;
        const filteredTodos = todos.filter(todo => todo.category !== name);

        dispatch(set('category', selectedCategory));
        dispatch(destroy('categories', id));
        dispatch(set('todos', filteredTodos));
    }

    return (
        <div className={`sidebar__nav-item flex--ai-center ${activeClass}`}>
            <button
                className='sidebar__link button'
                title={name}
                onClick={select}>
                {name}
            </button>

            <button
                className='sidebar__delete-button button'
                onClick={removeCategory}>
                <Cancel fill='#ffffff' size={15} />
            </button>
        </div>
    );
}

Category.propTypes = {
    id: oneOfType([number, string]),
    name: string,
};

export default Category;
