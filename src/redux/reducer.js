const initialState = {
    user: {}
}

const GET_USER = 'GET-USER',
    CLEAR_USER = 'CLEAR_USER',
    UPDATE_USER = "UPDATE_USER";


export function getUser(userObj) {
    return {
        type: GET_USER,
        payload: userObj
    }
}

export function clearUser() {
    return {
        type: CLEAR_USER,
        payload: {}
    }
}

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user,
    };
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_USER:
            return { ...state, user: payload }
        case CLEAR_USER:
            return { ...state, user: payload }
        case UPDATE_USER:
            return { ...state, user: payload };
        default:
            return state
    }
}