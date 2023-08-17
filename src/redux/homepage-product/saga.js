import { all, fork, takeEvery, put, call } from 'redux-saga/effects';
import { GetMsg } from 'utils/Message';
import { toast } from 'react-toastify';
import actionsProduct from './action';
import factories from './factory';
import { getToast } from 'utils/Utils';

function* fetchProduct(payload) {
    const data = payload?.payload;
    try {
        const response = yield call(() => factories.fetchProduct(data));

        yield put({
            type: actionsProduct.FETCH_PRODUCT_SUCCESS,
            payload: response,
        });
    } catch (e) {
        yield put({
            type: actionsProduct.FETCH_PRODUCT_FAILURE,
        });
    }
}

function* updateProduct(payload) {
    const { newdata, callback, type } = payload.payload;
    const data = newdata.filter(
        (newdata) => newdata.ProductName !== '' && newdata.ProductSKU !== '',
    );
    try {
        const response = yield call(() => factories.updateProduct(data, type));
        if (response.Code === 200) {
            getToast("Lưu dữ liệu thành công")
            if (callback) {
                callback();
            }
        } else {
            getToast(GetMsg(response?.MsgNo), 'error')
        }
        yield put({
            type: actionsProduct.UPDATE_PRODUCT_SUCCESS,
        });
    } catch (e) {
        yield put({
            type: actionsProduct.UPDATE_PRODUCT_FAILURE,
        });
        getToast("Lỗi hệ thống", 'error')
    }
}

function* searchMoreProduct(payload) {
    const { searchValue } = payload;
    const fakeDataFromApi = factories.getListProductMore(searchValue);
    try {
        yield put({
            type: actionsProduct.SEARCH_PRODUCT_MORE_SUCCESS,
            payload: fakeDataFromApi,
        });
    } catch (e) {
        yield put({
            type: actionsProduct.SEARCH_PRODUCT_MORE_FAILURE,
        });
    }
}

function* watchFetchProduct() {
    yield takeEvery(actionsProduct.FETCH_PRODUCT, fetchProduct);
}

function* watchUpdateProduct() {
    yield takeEvery(actionsProduct.UPDATE_PRODUCT, updateProduct);
}
function* watchSearchMoreProduct() {
    yield takeEvery(actionsProduct.SEARCH_PRODUCT_MORE, searchMoreProduct);
}
export default function* bannerSaga() {
    yield all([
        fork(watchFetchProduct),
        fork(watchUpdateProduct),
        fork(watchSearchMoreProduct),
    ]);
}
