export default (state, action) => {
    if (action.type === 'SET') {
        state[action.name] = action.payload;
        return state;
    }

    if (action.type === 'PUSH_ADD') {
        state[action.name] = [...state[action.name], action.payload];
        return state;
    }

    if (action.type === 'UNSHIFT_ADD') {
        state[action.name] = [action.payload, ...state[action.name]];
        return state;
    }

    if (action.type === 'PUSH_SPREAD') {
        state[action.name] = [...state[action.name], ...action.payload];
        return state;
    }

    if (action.type === 'UNSHIFT_ADD') {
        state[action.name] = [...action.payload, ...state[action.name]];
        return state;
    }

    if (action.type === 'UPDATE') {
        const mapped = state[action.name].map(item => {
            if (item.id === action.id) {
                item = action.payload;
            }

            return item;
        });

        state[action.name] = mapped;

        return state;
    }

    if (action.type === 'DELETE') {
        const filtered = state[action.name].filter(
            item => item.id !== action.id
        );

        state[action.name] = filtered;

        return state;
    }

    return state;
};
