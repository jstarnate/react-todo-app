import { string } from 'prop-types';

function Edit({ fill }) {
    return (
        <svg
            width='20'
            height='20'
            viewBox='0 0 34 34'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect
                x='27.9607'
                width='8'
                height='30'
                transform='rotate(45 27.9607 0)'
                fill={fill}
            />
            <path
                d='M4.62619 23.3345L10.283 28.9914L2.82844 30.7891L4.62619 23.3345Z'
                fill={fill}
            />
        </svg>
    );
}

Edit.propTypes = {
    fill: string.isRequired,
};

export default Edit;
