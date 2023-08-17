import { all, fork, takeEvery, put, call } from 'redux-saga/effects';
import { GetMsg } from 'utils/Message';
import { toast } from 'react-toastify';
import actionNotFoundImage from './action';
import AppFactory from './factory';
import { getToast } from 'utils/Utils';
import useTrans from 'hooks/use-trans';

function* fetchNotFoundImageList(payload) {
    const data = payload?.payload;
    try {
        const response = yield call(() =>
            AppFactory.fetchNotFoundImageList(data),
        );
        yield put({
            type: actionNotFoundImage.FETCH_NOT_FOUND_IMAGE_LIST_SUCCESS,
            payload: response,
        });
    } catch (e) {
        yield put({
            type: actionNotFoundImage.FETCH_NOT_FOUND_IMAGE_LIST_FAILURE,
        });
    }
}

function* updateNotFoundImage(payload) {
    const { data, success, failed } = payload.payload;
    const { trans } = useTrans();
    try {
        const arrData = Object.values(data);
        const response = yield call(() => AppFactory.updateNotFoundImage(arrData));
        if (response.Code === 200) {
            yield put({
                type: actionNotFoundImage.UPDATE_NOT_FOUND_IMAGE_SUCCESS,
            });
            getToast(trans('update_message_success'));
            if (success) {
                success();
            }
        } else {
            if (failed) {
                failed();
            }
            getToast(GetMsg(response?.MsgNo), 'error');
        }
    } catch (e) {
        yield put({
            type: actionNotFoundImage.UPDATE_NOT_FOUND_IMAGE_FAILURE,
        });
        getToast(trans('update_message_failed'), 'error');
    }
}

function* watchFetchNotFoundImageList() {
    yield takeEvery(
        actionNotFoundImage.FETCH_NOT_FOUND_IMAGE_LIST,
        fetchNotFoundImageList,
    );
}
function* watchUpdateNotFoundImage() {
    yield takeEvery(
        actionNotFoundImage.UPDATE_NOT_FOUND_IMAGE,
        updateNotFoundImage,
    );
}
export default function* NotFoundImageSaga() {
    yield all([
        fork(watchFetchNotFoundImageList),
        fork(watchUpdateNotFoundImage),
    ]);
}
