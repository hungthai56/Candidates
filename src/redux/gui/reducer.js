import { produce } from 'immer';
import actions from './action';

const initState = {
    isLoading: false,
    listGUI: [],
    gui: {}
};

export default (state = initState, { type, payload }) =>
    produce(state, (draft) => {
        switch (type) {
            case actions.FETCH_GUI_LIST:
                draft.isLoading = true;
                break;
            case actions.FETCH_GUI_LIST_SUCCESS:
                draft.isLoading = false;
                draft.listGUI = payload.GuiConfigs;
                draft.paging = payload.Paging;
                break;
            case actions.FETCH_GUI_LIST_FAILURE:
                draft.isLoading = false;
                break;
            case actions.FETCH_GUI_SUCCESS:
                draft.gui = payload?.GuiConfig;
                break;
            default:
                return draft;
        }
    });
