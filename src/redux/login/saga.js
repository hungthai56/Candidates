import Cookies from 'js-cookie'
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import factories from './factory'
import actions from './action'
import UserActions from '../user/action'
import AppConfig from '../../utils/AppConfig';
import { GetMsg } from 'utils/Message'
import actionApp from '../app/action-types';

const handleToken = (token, refreshToken, expires) => {
    Cookies.set('user', JSON.stringify({
        Token:token,
        RefreshToken:refreshToken,
        Expires:expires
    }), { expires });
    AppConfig.ACCESS_TOKEN=token;
}
export function* signIn() {
    yield takeEvery(actions.SUBMIT_LOGIN2, function* (payload) {
        const { data, onSuccess, onError } = payload
        try {

            yield put({
                type:actionApp.LOAD_LOADER_START
            })
            const response = yield call(() => factories.requestSignIn(data))
            if (response?.Code === 200) {
                let token = response?.Data?.Token
                let expires = response?.Data?.Expires
                let refreshToken = response?.Data?.RefreshToken
                yield put({
                    type: UserActions.GET_USER_INFORMATION,
                    token,
                })
                if(token){
                    expires = parseInt(expires, 10);
                    handleToken(token, refreshToken,expires);
                }
                onSuccess && onSuccess();
            } else {
                onError && onError(GetMsg(response?.MsgNo))
            }
            yield put({
                type:actionApp.CLOSE_LOADER_START
            })
        } catch (error) {
            yield put({
                type:actionApp.CLOSE_LOADER_START
            })
        } finally {
            // do something here...
        }
    })
}

export default function* rootSaga() {
    yield all([fork(signIn)])
}
