/**
 * ****************************************************************************
 * @description     :   Export all midleware function of saga
 * @created at      :   2020/12/03
 * @created by      :   QuyPN - quy.pham@toploop.co
 * @package         :   dashlite-admin-react
 * @copyright       :   Copyright (c) TOPLOOP
 * @version         :   1.0.0
 * ****************************************************************************
 */

/**
 * imprt libraries
 */
import { all } from 'redux-saga/effects';

/**
 * impoprt saga of other components
 */
import AppSagas from './app/saga';
// import ChatSagas from './chat/saga'
import LoginSaga from './login/saga';
import UserSaga from './user/saga';
import AppCandidates from './candidate-manager/saga';
import AppReruitmentProposal from './recruitment-proposal/saga';

/**s
 * Fork all function in saga midleware
 * -----------------------------------------
 * @author : QuyPN - 2020/12/03 - create
 * @access : public
 */
export default function* rootSaga() {
    yield all([
        AppSagas(),
        LoginSaga(),
        UserSaga(),
        AppCandidates(),
        AppReruitmentProposal(),
    ]);
}
