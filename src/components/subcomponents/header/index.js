import { useDispatch, useSelector } from 'react-redux';
import Status from './Status';
import Button from './Button';
import Menu from 'Helpers/Menu';
import { set } from 'Actions';

function Header() {
    const mobile = useSelector(state => state.mobile);
    const dispatch = useDispatch();

    function enableSidebar() {
        dispatch(set('showSidebar', true));
    }

    return (
        <header className='header flex--sb'>
            {mobile && (
                <button
                    className='header__menu-button button'
                    onClick={enableSidebar}>
                    <Menu />
                </button>
            )}

            <Status />
            <Button />
        </header>
    );
}

export default Header;
