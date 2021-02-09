import Header from 'Subcomponents/header/index';
import TodosList from './TodosList';

function Wrap() {
    return (
        <section className='todo'>
            <Header />
            <TodosList />
        </section>
    );
}

export default Wrap;
