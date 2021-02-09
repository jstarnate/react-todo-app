export const set = (name, payload) => ({
    type: 'SET',
    name,
    payload
})

export const pushAdd = (name, payload) => ({
    type: 'PUSH_ADD',
    name,
    payload
})

export const unshiftAdd = (name, payload) => ({
    type: 'UNSHIFT_ADD',
    name,
    payload
})

export const pushSpread = (name, payload) => ({
    type: 'PUSH_SPREAD',
    name,
    payload
})

export const unshiftSpread = (name, payload) => ({
    type: 'UNSHIFT_SPREAD',
    name,
    payload
})

export const update = (name, id, payload) => ({
    type: 'UPDATE',
    id,
    name,
    payload
})

export const destroy = (name, id) => ({
    type: 'DELETE',
    id,
    name
})