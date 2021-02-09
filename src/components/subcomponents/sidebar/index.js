import { Suspense, lazy, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'Helpers/Spinner';
import Form from './Form';
import UpArrow from 'Helpers/UpArrow';
import { set } from 'Actions';

const Categories = lazy(() => import('./Categories'));

function Sidebar() {
    const categories = useSelector(state => state.categories);
    const mobile = useSelector(state => state.mobile);
    const showSidebar = useSelector(state => state.showSidebar);
    const dispatch = useDispatch();
    const sidebar = useRef(null);

    function hideSidebar(event) {
        if (!sidebar.current.contains(event.target)) {
            dispatch(set('showSidebar', false));
        }
    }

    useEffect(() => {
        if (mobile && showSidebar) {
            setTimeout(() => {
                window.addEventListener('click', hideSidebar);
            }, 0);
        }

        return () => {
            window.removeEventListener('click', hideSidebar);
        };
    }, []);

    return (
        <>
            {mobile && showSidebar && <div className='app__overlay' />}
            <aside className='sidebar' ref={sidebar}>
                <div className='sidebar__wrap flex flex--column'>
                    <Form />
                    {!categories.length ? (
                        <div className='sidebar__message'>
                            <span className='sidebar__icon'>
                                <UpArrow />
                            </span>
                            <h2>Add a category.</h2>
                        </div>
                    ) : (
                        <Suspense fallback={<Spinner color='white' />}>
                            <Categories {...{ categories }} />
                        </Suspense>
                    )}
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
