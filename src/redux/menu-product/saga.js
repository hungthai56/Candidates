import { all, fork, takeEvery, put, call } from 'redux-saga/effects';
import { getToast } from 'utils/Utils';
import actions from './action';
import factories from './factory';

function* fetchMenuProduct(payload) {
    const data = payload?.payload;
    try {
        const response = yield call(() => factories.fetchProduct(data));

        yield put({
            type: actions.FETCH_DATA_MENU_SUCCESS,
            payload: response?.Genders,
        });
    } catch (e) {
        yield put({
            type: actions.FETCH_DATA_MENU_FAILURE,
        });
    }
}
function* getMaster() {
    try {
        const response = yield call(() => factories.getMaster());

        yield put({
            type: actions.GET_MASTER_SUCCESS,
            payload: response,
        });
    } catch (e) {
        yield put({
            type: actions.FETCH_DATA_MENU_FAILURE,
        });
    }
}
function* getMasterProduct() {
    try {
        const response = yield call(() => factories.getMasterProduct());

        yield put({
            type: actions.GET_MASTER_PRODUCT_SUCCESS,
            payload: response,
        });
    } catch (e) {
        yield put({
            type: actions.FETCH_DATA_MENU_FAILURE,
        });
    }
}
function* updateMenus(payload) {
    try {
        const response = yield call(() => factories.updateMenu(payload));

        if(response?.Code == 200){
            getToast("Chỉnh sửa menu thành công");
            yield put({
                type: actions.FETCH_DATA_MENU,
            });
            yield put({
                type: actions.UPDATE_DATA_MENU_SUCCESS,
                payload: response,
            });
        }else{
            getToast("Chỉnh sửa menu thất bại",'error');
        }
        
    } catch (e) {
        yield put({
            type: actions.FETCH_DATA_MENU_FAILURE,
        });
    }
}

function* watchFetchMenuProduct() {
    yield takeEvery(actions.FETCH_DATA_MENU, fetchMenuProduct);
}
function* watchFetchMasterProduct() {
    yield takeEvery(actions.GET_MASTER_PRODUCT, getMasterProduct);
}
function* watchFetchMaster() {
    yield takeEvery(actions.GET_MASTER, getMaster);
}
function* watchUpdateMenus() {
    yield takeEvery(actions.UPDATE_DATA_MENU, (payload)=> updateMenus(payload?.payload));
}
export default function* menuSaga() {
    yield all([
        fork(watchFetchMenuProduct),
        fork(watchFetchMaster),
        fork(watchFetchMasterProduct),
        fork(watchUpdateMenus),
    ]);
}
