import actions from './action'

const initState = {
    loading: false,
    user: {},
}

function UseReducer(state = initState, action) {
    const { type } = action
    switch (type) {
        case actions.GET_USER_INFORMATION_SUCCESS:
            return {
                ...state,
                user: action.payload,
            }
        default:
            return {
                ...state,
            }
    }
}

export default UseReducer
