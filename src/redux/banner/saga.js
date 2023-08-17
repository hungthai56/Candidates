import { all, fork, call, takeEvery, put } from 'redux-saga/effects';
import entries from 'lodash/entries';
import parseInt from 'lodash/parseInt';
import { toast } from 'react-toastify';
import { GetMsg } from 'utils/Message';
import actionBanner from './action';
import appActions from '../app/actions';
import AppFactory from './factory';
import { getToast } from 'utils/Utils';

function* fetchBannerMaster() {
    try {
        const response = yield call(() => AppFactory.dataMasterBanner());
        response.Positions = entries(response.Positions).map(([key, value]) => ({
            value: parseInt(key),
            label: value,
        }));

        response.Status = entries(response.Status).map(([key, value]) => ({
            value: parseInt(key),
            label: value,
        }));

        response.Genders = response.Genders.map(({ Id, Name }) => ({
            value: Id,
            label: Name,
        }));

        response.TypeOfLink = entries(response.TypeOfLink).map(([key, value]) => ({
            value: parseInt(key),
            label: value,
        }));

        yield put({
            type: actionBanner.FETCH_BANNER_MASTER_SUCCESS,
            payload: response,
        });
    } catch (e) {
        yield put({
            type: actionBanner.FETCH_BANNER_MASTER_FAILURE,
        });
    }
}

function* fetchBannerList(payload) {
    const data = payload?.payload;
    try {
        const response = yield call(() => AppFactory.fetchBannerList(data));
        yield put({
            type: actionBanner.FETCH_BANNER_LIST_SUCCESS,
            payload: response,
        });
    } catch (e) {
        yield put({
            type: actionBanner.FETCH_BANNER_LIST_FAILURE,
        });
    }
}

function* updateBanner(payload) {
    const { data, callback } = payload.payload;
    const { FileImage, FileWebImage } = data;
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
        if (typeof data[key] === 'object') {
        } else {
            formData.append(key, data[key]);
        }
    });

    if (typeof FileImage === 'object' && FileImage != null) {
        formData.append('FileImage', FileImage);
    }

    if (typeof FileWebImage === 'object' && FileWebImage != null) {
        formData.append('FileWebImage', FileWebImage);
    }
    try {
        yield put(appActions.EnableLoader());
        const response = yield call(() => AppFactory.updateBanner(formData));
        yield put(appActions.UnableLoader());
        if (response.Code === 200) {
            yield put({
                type: actionBanner.UPDATE_BANNER_SUCCESS,
            });
            getToast("Chỉnh sửa banner thành công")
            if (callback) {
                callback();
            }
        } else {
            getToast(GetMsg(response?.MsgNo),'error')
            payload?.callback?.failed()
        }
    } catch (e) {
        yield put(appActions.UnableLoader());
        yield put({
            type: actionBanner.UPDATE_BANNER_FAILURE,
        });
        toast.error(GetMsg('E001'), {
            position: toast.POSITION.TOP_RIGHT,
            theme: 'colored',
        });
    }
}

function* deleteBanner(payload) {
    const { data, callback } = payload.payload;
    try {
        const response = yield call(() => AppFactory.deleteBanner(data));
        if (response.Code === 200) {
            yield put({
                type: actionBanner.DELETE_BANNER_SUCCESS,
            });
            getToast("Xoá banner thành công.")

            if (callback) {
                callback();
            }
        }else{
            payload?.callback?.failed();
            getToast(GetMsg(response?.MsgNo),'error')
        }
    } catch (e) {
        yield put({
            type: actionBanner.DELETE_BANNER_FAILURE,
        });
        const message = "Lỗi hệ thống !";
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
            theme: 'colored',
        });
    }
}

function* createBanner(payload) {
    const { data, callback } = payload.payload;
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
        if (typeof data[key] === 'object') {
            formData.append(key, data[key]);
        } else {
            formData.append(key, data[key]);
        }
    });

    try {
        yield put(appActions.EnableLoader());
        const response = yield call(() => AppFactory.createBanner(formData));
        yield put(appActions.UnableLoader());
        if (response.Code === 200) {
            yield put({
                type: actionBanner.CREATE_BANNER_SUCCESS,
            });
            getToast("Tạo banner thành công.")
            if (callback) {
                callback();
            }
        }else{
            payload?.callback?.failed();
            getToast(GetMsg(response?.MsgNo),'error')
        }
    } catch (e) {
        yield put({
            type: actionBanner.CREATE_BANNER_FAILURE,
        });
        yield put(appActions.UnableLoader());
        const message = GetMsg('E001');
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
            theme: 'colored',
        });
    }
}

function* watchUpdateBanner() {
    yield takeEvery(actionBanner.UPDATE_BANNER, updateBanner);
}

function* watchFetchBannerMaster() {
    yield takeEvery(actionBanner.FETCH_BANNER_MASTER, fetchBannerMaster);
}

function* watchFetchBannerList() {
    yield takeEvery(actionBanner.FETCH_BANNER_LIST, fetchBannerList);
}

function* watchDeleteBanner() {
    yield takeEvery(actionBanner.DELETE_BANNER, deleteBanner);
}

function* watchCreateBanner() {
    yield takeEvery(actionBanner.CREATE_BANNER, createBanner);
}

export default function* bannerSaga() {
    yield all([
        fork(watchFetchBannerList),
        fork(watchUpdateBanner),
        fork(watchDeleteBanner),
        fork(watchCreateBanner),
        fork(watchFetchBannerMaster),
    ]);
}
