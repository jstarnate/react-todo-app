import { arrayOf, object } from 'prop-types';
import Category from './Category';

const Categories = ({ categories }) => (
    <section className='sidebar__categories'>
        <nav>
            {categories.map(({ id, name }) => (
                <Category key={id} id={id} name={name} />
            ))}
        </nav>
    </section>
);

Categories.propTypes = {
    categories: arrayOf(object),
};

export default Categories;
