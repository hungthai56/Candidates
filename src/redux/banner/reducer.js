import { produce } from 'immer';
import actions from './action';

const initState = {
    isLoading: false,
    listBanner: [],
    paging: {},
    listStatus: [],
    listPositions: [],
    listDisplay: [],
    listScreen: [],
    listPageStructures: []
};

export default (state = initState, { type, payload }) =>
    produce(state, (draft) => {
        switch (type) {
            case actions.FETCH_BANNER_MASTER:
                draft.isLoading = true;
                break;
            case actions.FETCH_BANNER_MASTER_SUCCESS:
                draft.isLoading = false;
                draft.listStatus = payload.Status;
                draft.listPositions = payload.Positions;
                draft.listDisplay = payload.Genders;
                draft.listLink = payload.TypeOfLink;
                draft.listScreen = payload.Screens;
                draft.listPageStructures = payload.PageStructures;
                break;
            case actions.FETCH_BANNER_MASTER_FAILURE:
                draft.isLoading = false;
                break;
            case actions.FETCH_BANNER_LIST:
                draft.isLoading = true;
                break;
            case actions.FETCH_BANNER_LIST_SUCCESS:
                draft.listBanner = payload.Sliders;
                draft.paging = payload.Paging;
                draft.isLoading = false;
                break;
            case actions.FETCH_BANNER_LIST_FAILURE:
                draft.isLoading = false;
                break;
            default:
                return draft;
        }
    });
