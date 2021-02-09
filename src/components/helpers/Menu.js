function Menu() {
    return (
        <svg
            width='25'
            height='20'
            viewBox='0 0 25 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <mask
                id='mask0'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='25'
                height='20'>
                <rect width='25' height='20' fill='white' />
            </mask>
            <g mask='url(#mask0)'>
                <rect width='25' height='4' rx='2' fill='#21A1E1' />
                <rect y='8' width='25' height='4' rx='2' fill='#21A1E1' />
                <rect y='16' width='25' height='4' rx='2' fill='#21A1E1' />
            </g>
        </svg>
    );
}

export default Menu;
