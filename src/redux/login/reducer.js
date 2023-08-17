import actions from './action'

const initState = {
    loading: false,
    status: null,
    error: null,
    submit: null,
}

function LoginReducer(state = initState, action) {
    const { type } = action
    switch (type) {
    // normal login
        case actions.SUBMITING_LOGIN2:
            return {
                ...state,
                loading: true,
                submit: null,
            }
        case actions.SUBMIT_LOGIN_SUCCESS2:
            return {
                ...state,
                loading: false,
                submit: true,
            }
        case actions.SUBMIT_LOGIN_FAILURE2:
            const { error } = action
            return {
                ...state,
                loading: false,
                status: error?.status,
                submit: false,
            }
            // reset
        case actions.RESET_FORM_LOGIN2:
            return {
                ...state,
                loading: false,
                status: null,
                submit: null,
            }
            //----------------------------------------------
            // RESET_SIGN_IN
            //----------------------------------------------
        case actions.RESET_SIGN_IN2:
            return {
                ...initState,
            }
        default:
            return {
                ...state,
            }
    }
}

export default LoginReducer
