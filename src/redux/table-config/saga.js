import { all, call, fork, put, takeEvery } from "@redux-saga/core/effects";
import Constants from "utils/Constants";
import Actions from "./action";
import Factories from "./factory";
import { HeadCellPost } from "./template-head/HeadCellPost";
import { HeadCellCandidates } from "./template-head/HeadCellCandidates";

let TableDefault = {
  [Constants.TABLE_SCREEN.POST]: HeadCellPost,
  [Constants.TABLE_SCREEN.CANDIDATES]: HeadCellCandidates,
};

export function* RequestDataTable() {
  yield takeEvery(Actions.REQUEST_GET_COLUMN_TABLE, function* (payload) {
    try {
      const response = yield call(() =>
        Factories.getHeadTable(payload?.payload?.Key)
      );
      let HeadCell = [];
      let dataConvert = [];
      if (response?.Id) {
        HeadCell = JSON.parse(response?.OrderString);
        HeadCell?.map((x) => {
          dataConvert.push({
            ...TableDefault[response?.Id][x?.field],
            unEnabled: x?.isRequired,
            isHidden: !x?.isShow,
          });
        });
      } else {
        let dataDefault = TableDefault[payload.payload?.Key];
        HeadCell = Object.keys(dataDefault)?.map((key) => {
          return dataDefault[key];
        });
      }

      yield put({
        type: Actions.REQUEST_GET_COLUMN_TABLE_SUCCESS,
        payload: {
          HeadCell: dataConvert,
          Key: response?.Id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  });
}
export function* RequestChangeHeadTable() {
  yield takeEvery(Actions.REQUEST_CHANGE_COLUMN_TABLE, function* (payload) {
    try {
      let paramsHeadCell = [];
      [...payload.payload?.HeadCell]?.map((x) => {
        paramsHeadCell.push({
          isShow: !x?.isHidden,
          isRequired: x?.unEnabled,
          field: x?.field,
        });
      });
      const response = yield call(() =>
        Factories.updateHeadTable({
          OrderString: JSON.stringify(paramsHeadCell),
          Id: payload.payload?.Key,
        })
      );

      if (response?.Code == 200) {
        yield put({
          type: Actions.REQUEST_CHANGE_COLUMN_TABLE_SUCCESS,
          payload: {
            HeadCell: payload.payload?.HeadCell,
            Key: payload.payload?.Key,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
}
export function* RequestResetHeadTable() {
  yield takeEvery(Actions.REQUEST_RESET_COLUMN_TABLE, function* (payload) {
    try {
      let dataOld = [];
      dataOld = TableDefault[payload.payload?.Key];
      let paramsHeadCell = [];
      let _dataOld = Object.keys(dataOld)?.map((key) => {
        return dataOld[key];
      });
      [..._dataOld]?.map((x) => {
        paramsHeadCell.push({
          isShow: !x?.isHidden,
          isRequired: x?.unEnabled,
          field: x?.field,
        });
      });
      const response = yield call(() =>
        Factories.updateHeadTable({
          OrderString: JSON.stringify(paramsHeadCell),
          Id: payload.payload?.Key,
        })
      );

      if (response?.Code == 200) {
        yield put({
          type: Actions.REQUEST_CHANGE_COLUMN_TABLE_SUCCESS,
          payload: {
            HeadCell: _dataOld,
            Key: payload.payload?.Key,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
}

export default function* RootSaga() {
  yield all([
    fork(RequestDataTable),
    fork(RequestChangeHeadTable),
    fork(RequestResetHeadTable),
  ]);
}
