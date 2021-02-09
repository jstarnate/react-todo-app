import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unshiftAdd } from 'Actions';

function Form() {
    const [category, setCategory] = useState('');
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    function handleCategoryValue(event) {
        setCategory(event.target.value);
    }

    function addCategory(event) {
        event.preventDefault();

        const value = category.trim();
        const hasDuplicate = categories.some(({ name }) => name === value);
        const newCategory = {
            id: Date.now().toString(),
            name: value,
        };

        if (!value.length || hasDuplicate || value.length < 2) {
            return;
        }

        dispatch(unshiftAdd('categories', newCategory));
        setCategory('');
    }

    return (
        <form className='sidebar__form' onSubmit={addCategory}>
            <input
                className='sidebar__form-input'
                type='text'
                name='category'
                placeholder='Enter a category here'
                value={category}
                onChange={handleCategoryValue}
                autoFocus
            />

            <input className='sidebar__form-submit' type='submit' />
        </form>
    );
}

export default Form;
