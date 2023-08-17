import Constants from "utils/Constants";
import { HeadCellPost } from "./template-head/HeadCellPost";
import { HeadCellCandidates } from "./template-head/HeadCellCandidates";
const { default: actionTableConfig } = require("./action");
let initialState = {
  template: [
    {
      Key: Constants.TABLE_SCREEN.POST.VALUE,
      HeadCell: [...HeadCellPost],
    },
    {
      Key: Constants.TABLE_SCREEN.CANDIDATES.VALUE,
      HeadCell: [...HeadCellCandidates],
    }
  ],
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTableConfig.CHANGE_COLUMN_TABLE:
      let data = [...state.template];
      let index = data?.findIndex((x) => x.Key == action.payload.Key);
      if (index != -1) {
        data[index].HeadCell = action.payload.HeadCell;
      }
      return {
        ...state,
        template: data,
      };
    case actionTableConfig.RESET_COLUMN_TABLE:
      let dataReset = [...state.template];
      let indexReset = dataReset?.findIndex((x) => x.Key == action.payload.Key);
      if (indexReset != -1) {
        let dataOld = [];
        switch (action.payload.Key) {
          case Constants.TABLE_SCREEN.POST.VALUE:
            dataOld = HeadCellPost;
            break;
          case Constants.TABLE_SCREEN.CANDIDATES.VALUE:
            dataOld = HeadCellCandidates;
            break;
        }
        dataReset[indexReset].HeadCell = dataOld;
      }
      return {
        ...state,
        template: dataReset,
      };
    case actionTableConfig.REQUEST_GET_COLUMN_TABLE_SUCCESS:
      let dataSort = [...state.template];
      dataSort = dataSort?.map((x) => {
        if (x?.Key == action.payload?.Key) {
          return {
            ...x,
            HeadCell: [...action.payload?.HeadCell],
          };
        }
        return x;
      });
      return {
        ...state,
        template: dataSort,
      };
    case actionTableConfig.REQUEST_CHANGE_COLUMN_TABLE_SUCCESS:
      let dataChange = [...state.template];
      dataChange = dataChange?.map((x) => {
        if (x?.Key == action.payload?.Key) {
          return {
            ...x,
            HeadCell: [...action.payload?.HeadCell],
          };
        }
        return x;
      });
      return {
        ...state,
        template: dataChange,
      };
    default:
      return {
        ...state,
      };
  }
};

export default myReducer;
