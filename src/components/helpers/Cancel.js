import { string, number } from 'prop-types';

function Cancel({ fill, size }) {
    return (
        <svg
            width={`${size}`}
            height={`${size}`}
            viewBox='0 0 31 31'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect
                y='3.53552'
                width='5'
                height='37.5118'
                transform='rotate(-45 0 3.53552)'
                fill={fill}
            />
            <rect
                x='26.5248'
                width='5'
                height='37.5118'
                transform='rotate(45 26.5248 0)'
                fill={fill}
            />
        </svg>
    );
}

Cancel.propTypes = {
    fill: string.isRequired,
    size: number.isRequired,
};

export default Cancel;
