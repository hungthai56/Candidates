import { produce } from 'immer';
import actions from './action';

const initState = {
    isLoading: false,
    listNotFoundImage: [],
    firstNotFoundImage: {},
    secondNotFoundImage: {},
    lastNotFoundImage: {},
};

export default (state = initState, { type, payload }) =>
    produce(state, (draft) => {
        switch (type) {
            case actions.FETCH_NOT_FOUND_IMAGE_LIST:
                draft.isLoading = true;
                break;
            case actions.FETCH_NOT_FOUND_IMAGE_LIST_SUCCESS:
                draft.isLoading = false;
                draft.listNotFoundImage = payload.NotFoundImages;
                draft.firstNotFoundImage = payload.NotFoundImages?.[0];
                draft.secondNotFoundImage = payload.NotFoundImages?.[1];
                draft.lastNotFoundImage = payload.NotFoundImages?.[2];
                break;
            case actions.FETCH_NOT_FOUND_IMAGE_LIST_FAILURE:
                draft.isLoading = false;
                break;
            default:
                return draft;
        }
    });
