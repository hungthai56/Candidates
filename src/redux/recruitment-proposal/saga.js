import { all, fork, call, takeEvery, put } from 'redux-saga/effects';
import entries from 'lodash/entries';
import parseInt from 'lodash/parseInt';
import actionProposal from './action';
import AppFactory from './factory';
import { toast } from 'react-toastify';
import { GetMsg } from 'utils/Message';
import { getToast } from 'utils/Utils';
import Constant from 'utils/Constants'
function* fetchProposeList(payload) {
    const data = payload?.payload;
    try {
        const response = yield call(() => AppFactory.fetchProposeList(data));
        yield put({
            type: actionProposal.FETCH_PROPOSED_LOCATION_SUCCESS,
            payload: response,
        });
    } catch (e) {
        yield put({
            type: actionProposal.FETCH_PROPOSED_LOCATION_FAILURE,
        });
    }
}
function* getProposeDetail(payload) {
    const data = payload?.payload;
    try {
        const response = yield call(() => AppFactory.requestProposeDetail(data));
        yield put({
            type: actionProposal.GET_PROPOSE_DETAIL_START_SUCCESS,
            payload: response,
        });
    } catch (e) {
        yield put({
            type: actionProposal.GET_PROPOSE_DETAIL_START_FAILURE,
        });
    }
}
function* getProposeMaster(payload) {
    const data = payload?.payload;
    try {
        const response = yield call(() => AppFactory.requestProposeMaster(data));
        yield put({
            type: actionProposal.FETCH_PROPOSED_MASTER_SUCCESS,
            payload: response,
        });
    } catch (e) {
        yield put({
            type: actionProposal.FETCH_PROPOSED_MASTER_FAILURE,
        });
    }
}
function* deletePropose(payload) {
    const { data, callback } = payload.payload;
    try {
        const response = yield call(() => AppFactory.deletePro(data));
        if (response.Code === 200) {
            yield put({
                type: actionProposal.DELETE_PROPOSED_LOCATION_SUCCESS,
                payload: response,
            });
            getToast("Xoá đề xuất thành công.")
            if (callback) {
                callback(payload);
            }
        } else {
            payload?.callback?.failed();
            getToast(GetMsg(response?.MsgNo), 'error')
        }
    } catch (e) {
        yield put({
            type: actionProposal.DELETE_PROPOSED_LOCATION_FAILED,
        });
        const message = "Lỗi hệ thống !";
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
            theme: 'colored',
        });
    }
}
function* createProsose(payload) {
    
    try {
        const response = yield call(() => AppFactory.createProsose(payload.payload));
        if (response.Code === 200) {
            yield put({
                type: actionProposal.CREATE_PROPOSED_LOCATION_SUCCESS,
                payload: response,
            });
            const message = GetMsg('S001');
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT,
                theme: 'colored',
            });
            if (payload.callback) {
                payload.callback(response.Data.Id);
            }
        }
    } catch (e) {
        yield put({
            type: actionProposal.CREATE_PROPOSED_LOCATION_FAILED,
        });
    }
}
function* updatePropose(payload) {
    try {
        const response = yield call(() => AppFactory.updatePropose(payload.payload));
        if (response.Code === 200) {
            yield put({
                type: actionProposal.UPDATE_PROPOSED_LOCATION_SUCCESS,
                payload: response,
            });
            const message = GetMsg('S001');
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT,
                theme: 'colored',
            });
            if (payload.callback) {
                payload.callback(response.Data.Id);
            }
        }
    } catch (e) {
        yield put({
            type: actionProposal.UPDATE_PROPOSED_LOCATION_FAILED,
        });
    }
}
function* changeStatusPropose(payload) {
    try {
        const response = yield call(() => AppFactory.changeStatusPropose(payload.payload));
        if (response.Code === 200) {
            yield put({
                type: actionProposal.CHANGE_STATUS_PROPOSE_SUCCESS,
                payload: payload,
            });
            const message = GetMsg('S018');
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT,
                theme: 'colored',
            });
            if (payload.callback) {
                payload.callback(payload);
            }
        }
    } catch (e) {
        yield put({
            type: actionProposal.CHANGE_STATUS_PROPOSE_FAILED,
        });
    }
}
function* watchUpdatePropose() {
    yield takeEvery(actionProposal.UPDATE_PROPOSED_LOCATION, updatePropose);
}
function* watchFetchProposeDetail() {
    yield takeEvery(actionProposal.GET_PROPOSE_DETAIL_START, getProposeDetail);
}
function* watchFetchProposeMaster() {
    yield takeEvery(actionProposal.FETCH_PROPOSED_MASTER, getProposeMaster);
}
function* watchFetchProposeList() {
    yield takeEvery(actionProposal.FETCH_PROPOSED_LOCATION_LIST, fetchProposeList);
}
function* watchCreateProsose() {
    yield takeEvery(actionProposal.CREATE_PROPOSED_LOCATION, createProsose);
}
function* watchDeletePropose() {
    yield takeEvery(actionProposal.DELETE_PROPOSED_LOCATION, deletePropose)
}
function* watchChangeStatusPropose() {
    yield takeEvery(actionProposal.CHANGE_STATUS_PROPOSE, changeStatusPropose)
}
export default function* proposeSaga() {
    yield all([
        fork(watchChangeStatusPropose),
        fork(watchUpdatePropose),
        fork(watchFetchProposeDetail),
        fork(watchFetchProposeList),
        fork(watchFetchProposeMaster),
        fork(watchCreateProsose),
        fork(watchDeletePropose)
    ]);
}
