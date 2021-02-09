import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from 'Subcomponents/sidebar/index';
import Spinner from 'Helpers/Spinner';
import AppMessage from './AppMessage';
import { set } from 'Actions';

const Todos = lazy(() => import('./subcomponents/todos/index'));

function App() {
    const category = useSelector(state => state.category);
    const mobile = useSelector(state => state.mobile);
    const showSidebar = useSelector(state => state.showSidebar);
    const dispatch = useDispatch();

    function checkWindowSize() {
        if (window.innerWidth <= 768) {
            dispatch(set('mobile', true));
            dispatch(set('showSidebar', false));
        } else {
            dispatch(set('mobile', false));
            dispatch(set('showSidebar', true));
        }
    }

    useEffect(() => {
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);

        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    return (
        <section className='app flex'>
            {showSidebar && <Sidebar />}

            {category ? (
                <Suspense fallback={<Spinner color='blue' />}>
                    <Todos />
                </Suspense>
            ) : mobile ? (
                <AppMessage />
            ) : null}
        </section>
    );
}

export default App;
