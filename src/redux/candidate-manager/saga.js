import { all, fork, call, takeEvery, put } from 'redux-saga/effects';
import entries from 'lodash/entries';
import parseInt from 'lodash/parseInt';
import actionProposal from './action';
import AppFactory from './factory';
import { toast } from 'react-toastify';
import { GetMsg } from 'utils/Message';
import { getToast } from 'utils/Utils';
import Constant from 'utils/Constants'

function* fetchCandidateList(payload) {
    const data = payload?.payload;
    try {
        const response = yield call(() => AppFactory.fetchCandidateList(data));
        yield put({
            type: actionProposal.FETCH_CANDIDATES_LIST_SUCCESS,
            payload: response,
        });
    } catch (e) {
        yield put({
            type: actionProposal.FETCH_CANDIDATES_LIST_FAILURE,
        });
    }
}

function* fetchEmployees(payload) {
    const data = payload?.payload;
    try {
        const response = yield call(() => AppFactory.fetchEmployees(data));
        yield put({
            type: actionProposal.FETCH_EMPLOYEES_SUCCESS,
            payload: response,
        });
    } catch (e) {
        yield put({
            type: actionProposal.FETCH_EMPLOYEES_FAILURE,
        });
    }
}

function* getCandidateDetail(payload) {
    const data = payload?.payload;
    try {
        const response = yield call(() => AppFactory.requestCandidateDetail(data));
        yield put({
            type: actionProposal.GET_CANDIDATE_DETAIL_SUCCESS,
            payload: response,
        });
    } catch (e) {
        yield put({
            type: actionProposal.GET_CANDIDATE_DETAIL_FAILURE,
        });
    }
}

function* getRecruitment(payload) {
    const data = payload?.payload;
    try {
        const response = yield call(() => AppFactory.getRecruitment(data));
        yield put({
            type: actionProposal.GET_RECRUITMENT_BY_ID_SUCCESS,
            payload: response,
        });
    } catch (e) {
        yield put({
            type: actionProposal.GET_RECRUITMENT_BY_ID_FAILED,
        });
    }
}
function* getCandidateMaster(payload) {
    const data = payload?.payload;
    try {
        const response = yield call(() => AppFactory.requestCandidateMaster(data));
        yield put({
            type: actionProposal.FETCH_CANDIDATES_MASTER_SUCCESS,
            payload: response,
        });
    } catch (e) {
        yield put({
            type: actionProposal.FETCH_CANDIDATES_MASTER_FAILURE,
        });
    }
}
function* deleteCandidate(payload) {
    const { data, callback } = payload.payload;
    try {
        const response = yield call(() => AppFactory.deleteCandidate(data));
        if (response.Code === 200) {
            yield put({
                type: actionProposal.DELETE_CANDIDATES_SUCCESS,
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
            type: actionProposal.DELETE_CANDIDATES_FAILED,
        });
        const message = "Lỗi hệ thống !";
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
            theme: 'colored',
        });
    }
}
function* createCandidate(payload) {
    try {
        const response = yield call(() => AppFactory.createCandidate(payload.payload));
        if (response.Code === 200) {
            yield put({
                type: actionProposal.CREATE_CANDIDATES_SUCCESS,
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
            type: actionProposal.CREATE_CANDIDATES_FAILED,
        });
    }
}
function* updateCandidate(payload) {
    try {
        const response = yield call(() => AppFactory.updateCandidate(payload.payload));
        if (response.Code === 200) {
            yield put({
                type: actionProposal.UPDATE_CANDIDATES_SUCCESS,
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
            type: actionProposal.UPDATE_CANDIDATES_FAILED,
        });
    }
}
function* changeStatusCandidate(payload) {
    try {
        const response = yield call(() => AppFactory.changeStatusStatus(payload.payload));
        if (response.Code === 200) {
            yield put({
                type: actionProposal.CHANGE_STATUS_CANDIDATE_SUCCESS,
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
            type: actionProposal.CHANGE_STATUS_CANDIDATE_FAILED,
        });
    }
}
function* watchUpdateCandidate() {
    yield takeEvery(actionProposal.UPDATE_CANDIDATES, updateCandidate);
}
function* watchFetchCandidateDetail() {
    yield takeEvery(actionProposal.GET_CANDIDATE_DETAIL, getCandidateDetail);
}
function* watchFetchCandidateMaster() {
    yield takeEvery(actionProposal.FETCH_CANDIDATES_MASTER, getCandidateMaster);
}
function* watchFetchCandidateList() {
    yield takeEvery(actionProposal.FETCH_CANDIDATES_LIST, fetchCandidateList);
}

function* watchCreateCandidate() {
    yield takeEvery(actionProposal.CREATE_CANDIDATES, createCandidate);
}
function* watchDeleteCandidate() {
    yield takeEvery(actionProposal.DELETE_CANDIDATES, deleteCandidate)
}
function* watchChangeStatusCandidate() {
    yield takeEvery(actionProposal.CHANGE_STATUS_CANDIDATE, changeStatusCandidate)
}
function* watchFetchRecruitment() {
    yield takeEvery(actionProposal.GET_RECRUITMENT_BY_ID, getRecruitment)
}

function* watchFetchEmployees() {
    yield takeEvery(actionProposal.FETCH_EMPLOYEES, fetchEmployees)
}
export default function* proposeSaga() {
    yield all([
        fork(watchChangeStatusCandidate),
        fork(watchUpdateCandidate),
        fork(watchFetchCandidateDetail),
        fork(watchFetchCandidateList),
        fork(watchFetchCandidateMaster),
        fork(watchCreateCandidate),
        fork(watchDeleteCandidate),
        fork(watchFetchRecruitment),
        fork(watchFetchEmployees)
    ]);
}
