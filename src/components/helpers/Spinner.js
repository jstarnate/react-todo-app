import { string } from 'prop-types';

function Spinner({ color }) {
    return (
        <section className='app__loader flex--center'>
            <div className={`app__spinner spinner--${color}`} />
        </section>
    );
}

Spinner.propTypes = {
    color: string.isRequired,
};

export default Spinner;
