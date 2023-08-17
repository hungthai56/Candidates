import { all, call, fork, put, takeEvery } from 'redux-saga/effects'

import actions from './action'
import factories from './factory'
import Cookies from 'js-cookie'
import AppConfig from './../../utils/AppConfig';
import actionApp from '../app/action-types';

export function* getUser() {
    yield takeEvery(actions.GET_USER_INFORMATION, function* (payload) {
        const { data, onSuccess, onError, token } = payload

        try {
            // call api
            const response = yield call(() => factories.requestUser(data, token))
            // console.log('respon', response.data)
            // TODO
            if (response?.data) {
                // onSuccess && onSuccess()
                // day thong tin len store
                yield put({
                    type: actions.GET_USER_INFORMATION_SUCCESS, // action thuoc cho reducer
                    payload: response?.data,
                })
            } else {
                // onError && onError()
            }
        } catch (error) {
            console.log(error)
            // error && error(error);
        } finally {
            // do something here...
        }
    })
}

function* logoutUser(){
    yield takeEvery(actions.SUBMIT_LOGOUT,function* (payload){
        try {
            yield put({
                type:actionApp.LOAD_LOADER_START
            })
            yield put({
                type:actions.SUBMITTING_LOGOUT
            })
            const response=yield call(()=>factories.requestLogoutUser());

            if(response.Code == 200){
                yield put({
                    type:actions.SUBMIT_LOGOUT_SUCCESS
                })

                Cookies.remove('user');
                payload.callback?.success &&  payload.callback?.success();
                AppConfig.ACCESS_TOKEN='';
            }else{
                payload.callback?.error &&  payload.callback?.error();
            }
            yield put({
                type:actionApp.CLOSE_LOADER_START
            })
        } catch (error) {
            yield put({
                type:actions.SUBMIT_LOGOUT_FAILURE
            })
            yield put({
                type:actionApp.CLOSE_LOADER_START
            })
        } finally{

        }
    })
}

export default function* rootSaga() {
    yield all([fork(getUser),fork(logoutUser)])
}
