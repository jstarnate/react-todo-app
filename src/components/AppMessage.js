import { useDispatch } from 'react-redux';
import { set } from 'Actions';

function AppMessage() {
    const dispatch = useDispatch();

    function enableSidebar() {
        dispatch(set('showSidebar', true));
    }

    return (
        <section className='app__message flex--center'>
            <div>
                <h1 className='app__message-text'>
                    Choose a category first to see or add to-dos
                </h1>
                <button
                    className='app__message-button button'
                    onClick={enableSidebar}>
                    See categories
                </button>
            </div>
        </section>
    );
}

export default AppMessage;
