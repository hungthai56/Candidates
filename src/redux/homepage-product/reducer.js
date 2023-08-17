import { produce } from 'immer';
import actions from './action';

const initState = {
    isLoading: false,
    listProduct: [],

    searchProduct: [],
    searchMoreProduct: [],
    listTypeTop: [],
    listDisplayTop: [],
    listProductStatus: [],
};

export default (state = initState, { type, payload }) =>
    produce(state, (draft) => {
        switch (type) {
            case actions.FETCH_PRODUCT:
                draft.isLoading = true;
                break;
            case actions.FETCH_PRODUCT_SUCCESS:
                draft.isLoading = false;
                draft.listProduct = payload.Products;
                break;
            case actions.FETCH_PRODUCT_FAILURE:
                draft.isLoading = false;
                break;
            case actions.UPDATE_PRODUCT:
                draft.loading = true;
                break;
            case actions.UPDATE_PRODUCT_SUCCESS:
                draft.loading = false;
                break;
            case actions.UPDATE_PRODUCT_FAILURE:
                draft.loading = false;
                break;

            case actions.FETCH_SUGGEST_SEARCH_PRODUCT:
                draft.isLoading = true;
                break;
            case actions.FETCH_SUGGEST_SEARCH_PRODUCT_SUCCESS:
                draft.searchProduct = payload;
                break;
            case actions.FETCH_SUGGEST_SEARCH_PRODUCT_FAILURE:
                draft.isLoading = false;
                break;
            case actions.SEARCH_PRODUCT_MORE:
                draft.isLoading = true;
                break;
            case actions.SEARCH_PRODUCT_MORE_SUCCESS:
                draft.searchMoreProduct = payload;
                draft.isLoading = false;
                break;
            case actions.SEARCH_PRODUCT_MORE_FAILURE:
                draft.isLoading = false;
                break;
            default:
                return draft;
        }
    });
