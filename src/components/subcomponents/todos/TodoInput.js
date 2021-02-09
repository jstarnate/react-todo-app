import { useEffect, useState } from 'react';
import { arrayOf, string, object, element, func } from 'prop-types';

function todoForm(submitEvent, otherData = null) {
    function Form({ list, selectedValue, icon, closeEvent }) {
        const [inputValue, setInputValue] = useState(selectedValue || '');

        function disableForm(event) {
            if (
                event.key === 'Escape' ||
                event.code === 'Escape' ||
                event.which === 27 ||
                event.keyCode === 27
            ) {
                closeEvent();
            }
        }

        function handleInputValue(event) {
            setInputValue(event.target.value);
        }

        function submit(event) {
            event.preventDefault();

            const value = inputValue.trim();
            const hasDuplicate = list.some(item => item.description === value);

            if (
                !value.length ||
                hasDuplicate ||
                value.length < 6 ||
                value.length > 30 ||
                !/^[A-Za-z0-9 ]+$/.test(value)
            ) {
                return;
            }

            submitEvent(value, otherData);
            setInputValue('');
        }

        useEffect(() => {
            window.addEventListener('keyup', disableForm);

            return () => {
                window.removeEventListener('keyup', disableForm);
            };
        }, []);

        return (
            <li className='todo__form-wrap'>
                <form className='todo__form flex' onSubmit={submit}>
                    <input
                        className='todo__input'
                        type='text'
                        name='description'
                        placeholder='Must be 6-30 characters long'
                        value={inputValue}
                        onChange={handleInputValue}
                        autoFocus
                    />

                    <button type='submit' className='todo__submit button'>
                        {icon}
                    </button>
                </form>
            </li>
        );
    }

    Form.propTypes = {
        list: arrayOf(object).isRequired,
        selectedValue: string,
        icon: element.isRequired,
        closeEvent: func.isRequired,
    };

    return Form;
}

export default todoForm;
