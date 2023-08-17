import { all, fork, takeEvery, put, call } from 'redux-saga/effects';
import moment from 'moment';
import { GetMsg } from 'utils/Message';
import { toast } from 'react-toastify';
import actionGUI from './action';
import AppFactory from './factory';
import { getToast } from 'utils/Utils';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* fetchGUIList(payload) {
    const formData = payload.payload;
    if (formData.To) {
        formData.To = moment(formData.To).format();
    }
    if (formData.From) {
        formData.From = moment(formData.From).format();
    }

    try {
        const response = yield call(() => AppFactory.listGui(formData));
        yield put({
            type: actionGUI.FETCH_GUI_LIST_SUCCESS,
            payload: response,
        });
    } catch (e) {
        yield put({
            type: actionGUI.FETCH_GUI_LIST_FAILURE,
        });
    }
}

function* fetchGUIDetail(payload) {

    try {
        const response = yield call(() => AppFactory.GuiDetail(payload));
        yield put({
            type: actionGUI.FETCH_GUI_SUCCESS,
            payload: response,
        });
    } catch (e) {
        yield put({
            type: actionGUI.FETCH_GUI_LIST_FAILURE,
        });
    }
}

function* deleteGUI(payload) {
    const { data, callback } = payload.payload;
    try {
        const response = yield call(() => AppFactory.deleteGUI(data));
        if (response?.Code == 200) {
            getToast("Xoá giao diện thành công")
            if (callback) {
                callback();
            }
        } else {
            getToast("Xoá giao diện không thành công")
        }
        yield put({
            type: actionGUI.DELETE_GUI_SUCCESS,
        });
    } catch (e) {
        yield put({
            type: actionGUI.DELETE_GUI_FAILURE,
        });
        getToast("Lỗi hệ thống",'error');
    }
}

function* updateGui(payload) {
    const { params, callback } = payload.payload;
    const response = yield call(()=> AppFactory.updateGui(params));
    try {
        if (response?.Code == 200) {
            yield put({
                type: actionGUI.UPDATE_GUI_SUCCESS,
            });
            getToast("Update giao diện thành công");
            if (callback) {
                callback();
            }
        } else {
            getToast("Update giao diện không thành công",'error');
            payload?.callback?.failed();
        }
    } catch (e) {
        yield put({
            type: actionGUI.UPDATE_GUI_FAILURE,
        });
        toast.error(GetMsg('E001'), {
            position: toast.POSITION.TOP_RIGHT,
            theme: 'colored',
        });
    }
}
function* createGUI(payload) {
    const { data, callback } = payload.payload;

    try {
        const response = yield call(() => AppFactory.createGUI(data));
        if (response?.Code == 200) {
            yield put({
                type: actionGUI.CREATE_GUI_SUCCESS,
            });
            getToast("Tạo giao diện thành công")
            if (callback) {
                callback();
            }
        } else {
            getToast(GetMsg(response?.MsgNo),'error');
            payload?.callback?.failed();
        }
    } catch (e) {
        yield put({
            type: actionGUI.CREATE_GUI_SUCCESS,
        });
        getToast("Tạo giao diện không thành công",'error')
    }
}
function* watchUpdateGui() {
    yield takeEvery(actionGUI.UPDATE_GUI, updateGui);
}
function* watchDeleteGUI() {
    yield takeEvery(actionGUI.DELETE_GUI, deleteGUI);
}
function* watchCreateGui() {
    yield takeEvery(actionGUI.CREATE_GUI, createGUI);
}
function* watchFetchGUIList() {
    yield takeEvery(actionGUI.FETCH_GUI_LIST, fetchGUIList);
}
function* watchFetchGUIDetail() {
    yield takeEvery(actionGUI.FETCH_GUI, (payload)=> fetchGUIDetail(payload?.payload));
}

export default function* guiSaga() {
    yield all([
        fork(watchFetchGUIList),
        fork(watchUpdateGui),
        fork(watchDeleteGUI),
        fork(watchCreateGui),
        fork(watchFetchGUIDetail),
    ]);
}
