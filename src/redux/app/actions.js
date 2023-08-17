/**
 * ****************************************************************************
 * @description     :   All action of app
 * @created at      :   2020/12/03
 * @created by      :   QuyPN - quy.pham@toploop.co
 * @package         :   dashlite-admin-react
 * @copyright       :   Copyright (c) TOPLOOP
 * @version         :   1.0.0
 * ****************************************************************************
 */

/**
 * Import type of actions
 */
import Types from './action-types';

/**
 * Actions to get data common and needed for all app
 * -----------------------------------------
 * @author : QuyPN - 2020/12/03 - create
 * @access : public
 */
const Actions = {
  /**
   * Actions to get menus on left-menu
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @returns: {Object} - Action to require saga get data of menus
   * @access : public
   */
  GetMenus: () => ({
    type: Types.FETCHING_MENUS,
  }),
  /**
   * Actions change data of menus when get data of left-menu success
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @params : {Array} menus - List data of menus from saga
   * @returns: {Object} - Action get menus success
   * @access : public
   */
  GetMenusSuccess: (menues) => ({
    type: Types.FETCHING_MENUS_SUCCESS,
    data: menues,
  }),
  /**
   * Actions reset data of menus when get data of header failure
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @params : {Object} error - Data of exception
   * @returns: {Object} - Action get menus failure
   * @access : public
   */
  GetMenusFailure: (error) => ({
    type: Types.FETCHING_MENUS_FAILURE,
    data: error,
  }),
  /**
   * Actions to toggle the sidebar menu on mobile
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @returns: {Object} - Action to require saga toggle the sidebar menu
   * @access : public
   */
  ToggleMenuMobile: () => ({
    type: Types.TOGGLE_MENU_MOBILE,
  }),
  /**
   * Actions to close the sidebar menu on mobile
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @returns: {Object} - Action to require saga close the sidebar menu
   * @access : public
   */
  CloseMenuMobile: () => ({
    type: Types.CLOSE_MENU_MOBILE,
  }),
  /**
   * Actions set actived menu on left-menu
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @params : {string} url - Url of current page
   * @returns: {Object} - Action to require saga active menu on left-menu
   * @access : public
   */
  SetActiveMenu: (url) => ({
    type: Types.SET_ACTIVE_MENU,
    data: url,
  }),
  /**
   * Actions get data for sidebar menu
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @returns: {Object} - Action to require saga get data for sidebar menu
   * @access : public
   */
  GetSidebarMobile: () => ({
    type: Types.FETCHING_SIDEBAR_MOBILE,
  }),
  /**
   * Actions change data of menus when get data of sidebar-menu success
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @params : {Array} menus - List data of menus on sidebar from saga
   * @returns: {Object} - Action get data of sidebar-menus success
   * @access : public
   */
  GetSidebarMobileSuccess: (menus) => ({
    type: Types.FETCHING_SIDEBAR_MOBILE_SUCCESS,
    data: menus,
  }),
  /**
   * Actions reset data of menus when get data of sidebar-menu failure
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @params : {Array} error - Data error
   * @returns: {Object} - Action reset data of sidebar-menus
   * @access : public
   */
  GetSidebarMobileFailure: (error) => ({
    type: Types.FETCHING_SIDEBAR_MOBILE_FAILURE,
    data: error,
  }),
  /**
   * Actions to get data message for chat dropdown on right menu
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @returns: {Object} - Action to require saga get data messages
   * @access : public
   */
  GetChats: () => ({
    type: Types.FETCHING_CHATS,
  }),
  /**
   * Actions change data of message for dropdown chats when get data success
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @params : {Array} chats - List data of messages from saga
   * @returns: {Object} - Action get data of messages success
   * @access : public
   */
  GetChatsSuccess: (chats) => ({
    type: Types.FETCHING_CHATS_SUCCESS,
    data: chats,
  }),
  /**
   * Actions reset data of message for dropdown chats when get data failure
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @params : {Array} error - Data error
   * @returns: {Object} - Action reset data of messages
   * @access : public
   */
  GetChatsFailure: (error) => ({
    type: Types.FETCHING_CHATS_FAILURE,
    data: error,
  }),
  /**
   * Actions to get data notify for chat dropdown on right menu
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @returns: {Object} - Action to require saga get data messages
   * @access : public
   */
  GetNotify: () => ({
    type: Types.FETCHING_NOTIFY,
  }),
  /**
   * Actions change data of notify for dropdown chats when get data success
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @params : {Array} chats - List data of notify from saga
   * @returns: {Object} - Action get data of notify success
   * @access : public
   */
  GetNotifySuccess: (notify) => ({
    type: Types.FETCHING_NOTIFY_SUCCESS,
    data: notify,
  }),
  /**
   * Actions reset data of notify for dropdown chats when get data failure
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @params : {Array} error - Data error
   * @returns: {Object} - Action reset data of notify
   * @access : public
   */
  GetNotifyFailure: (error) => ({
    type: Types.FETCHING_NOTIFY_FAILURE,
    data: error,
  }),

  EnableLoader: () => ({
    type: Types.LOAD_LOADER_SUCCESS,
  }),

  UnableLoader: () => ({
    type: Types.CLOSE_LOADER_SUCCESS,
  }),
};

export default Actions;
