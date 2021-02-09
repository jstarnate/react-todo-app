import { useDispatch, useSelector } from 'react-redux';
import Plus from 'Helpers/Plus';
import Cancel from 'Helpers/Cancel';
import { set } from 'Actions';

function Button() {
    const addMode = useSelector(state => state.addMode);
    const dispatch = useDispatch();

    function toggleAddMode() {
        dispatch(set('addMode', !addMode));
        dispatch(set('editMode', false));
        dispatch(set('editTarget', null));
    }

    return (
        <button
            className='header__button button'
            title={addMode ? 'Cancel' : 'Add a to-do'}
            onClick={toggleAddMode}>
            {addMode ? (
                <Cancel fill='#e12121' size={25} />
            ) : (
                <Plus fill='#21a1e1' size={25} />
            )}
        </button>
    );
}

export default Button;
