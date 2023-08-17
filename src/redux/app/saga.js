/**
 * ****************************************************************************
 * @description     :   Saga to call api to get data common for all app
 * @created at      :   2020/12/03
 * @created by      :   QuyPN - quy.pham@toploop.co
 * @package         :   dashlite-admin-react
 * @copyright       :   Copyright (c) TOPLOOP
 * @version         :   1.0.0
 * ****************************************************************************
 */

/**
 * Import libraries
 */
import { all, takeEvery, put, call, fork } from 'redux-saga/effects';

/**
 * Import for redux
 */
import Types from './action-types';
import Actions from './actions';
import Factory from './factory';

/**
 * Listenning action type FETCHING_MENUS to get menus and change state of menu data
 * -----------------------------------------
 * @author : QuyPN - 2020/12/03 - create
 * @access : public
 */
export function* getMenus() {
  yield takeEvery(Types.FETCHING_MENUS, function* () {
    try {
      // call api
      const response = yield call(Factory.GetMenus);
      // call action update data when success
      yield put(Actions.GetMenusSuccess(response));
    } catch (error) {
      // call action reset data when failure
      yield put(Actions.GetMenusFailure(error));
    }
  });
}

/**
 * Listenning action type FETCHING_CHATS to get messages and change state of dropdown chats on right-header
 * -----------------------------------------
 * @author : QuyPN - 2020/12/03 - create
 * @access : public
 */
export function* getChats() {
  yield takeEvery(Types.FETCHING_CHATS, function* () {
    try {
      // call api
      const response = yield call(Factory.GetChats);
      // call action update data when success
      yield put(Actions.GetChatsSuccess(response));
    } catch (error) {
      // call action reset data when failure
      yield put(Actions.GetChatsFailure(error));
    }
  });
}

/**
 * Listenning action type FETCHING_NOTIFY to get notify and change state of dropdown notify on right-header
 * -----------------------------------------
 * @author : QuyPN - 2020/12/03 - create
 * @access : public
 */
export function* getNotify() {
  yield takeEvery(Types.FETCHING_NOTIFY, function* () {
    try {
      // call api
      const response = yield call(Factory.GetNotify);
      // call action update data when success
      yield put(Actions.GetNotifySuccess(response));
    } catch (error) {
      // call action reset data when failure
      yield put(Actions.GetNotifyFailure(error));
    }
  });
}

/**
 * Listenning action type FETCHING_SIDEBAR_MOBILE to get mobile menu and change state of sidebar on mobile
 * -----------------------------------------
 * @author : QuyPN - 2020/12/03 - create
 * @access : public
 */
export function* getSidebar() {
  yield takeEvery(Types.FETCHING_SIDEBAR_MOBILE, function* () {
    try {
      // call api
      const response = yield call(Factory.GetSidebar);
      // call action update data when success
      yield put(Actions.GetSidebarMobileSuccess(response));
    } catch (error) {
      // call action reset data when failure
      yield put(Actions.GetSidebarMobileFailure(error));
    }
  });
}

function* requestLoaderApp() {
  yield takeEvery(Types.LOAD_LOADER_START, function* () {
    try {
      yield put({
        type: Types.LOAD_LOADER_SUCCESS,
      });
    } catch (error) {}
  });
}
function* requestCloseLoaderApp() {
  yield takeEvery(Types.CLOSE_LOADER_START, function* () {
    try {
      yield put({
        type: Types.CLOSE_LOADER_SUCCESS,
      });
    } catch (error) {}
  });
}

/**
 * Fork all function in saga midleware
 * -----------------------------------------
 * @author : QuyPN - 2020/12/03 - create
 * @access : public
 */
export default function* rootSaga() {
  yield all([
    fork(getMenus),
    fork(getChats),
    fork(getNotify),
    fork(getSidebar),
    fork(requestLoaderApp),
    fork(requestCloseLoaderApp),
  ]);
}
