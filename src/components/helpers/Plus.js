import { string, number } from 'prop-types';

function Plus({ fill, size }) {
    return (
        <svg
            width={`${size}`}
            height={`${size}`}
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect x='12.5' width='5' height='30' fill={fill} />
            <rect
                y='17.5'
                width='5'
                height='30'
                transform='rotate(-90 0 17.5)'
                fill={fill}
            />
        </svg>
    );
}

Plus.propTypes = {
    fill: string.isRequired,
    size: number.isRequired,
};

export default Plus;
