import actions from './action';

const initState = {
    isLoading: false,
    dataMenu: [],
    master: {},
    masterProduct: {}
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.FETCH_DATA_MENU_SUCCESS:
            return {
                ...state,
                dataMenu: action?.payload
            }
        case actions.GET_MASTER_SUCCESS:
            return {
                ...state,
                master: action?.payload
            }
        case actions.GET_MASTER_PRODUCT_SUCCESS:
            return {
                ...state,
                masterProduct: action?.payload
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer;