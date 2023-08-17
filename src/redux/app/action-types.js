/**
 * ****************************************************************************
 * @description     :   All types will be process of app
 * @created at      :   2020/12/03
 * @created by      :   QuyPN - quy.pham@toploop.co
 * @package         :   dashlite-admin-react
 * @copyright       :   Copyright (c) TOPLOOP
 * @version         :   1.0.0
 * ****************************************************************************
 */

/**
 * All types will be process of app
 * -----------------------------------------
 * @author : QuyPN - 2020/12/03 - create
 * @access : public
 */
const Types = {
  // Get Data for menus
  /**
   * Type to get data of menu on left menu
   */
  FETCHING_MENUS: 'FETCHING_MENUS',
  /**
   * Type to process when get data of menu success
   */
  FETCHING_MENUS_SUCCESS: 'FETCHING_MENUS_SUCCESS',
  /**
   * Type to process when get data of menu failure
   */
  FETCHING_MENUS_FAILURE: 'FETCHING_MENUS_FAILURE',

  // Toggle menu mobile
  /**
   * Close sidebar mobile
   */
  CLOSE_MENU_MOBILE: 'CLOSE_MENU_MOBILE',
  /**
   * Toggle sidebar mobile
   */
  TOGGLE_MENU_MOBILE: 'TOGGLE_MENU_MOBILE',

  /**
   * Setting active menu on the left menu
   */
  SET_ACTIVE_MENU: 'SET_CURENT_MENU',

  // Get data for sidebar menu
  /**
   * Type to get data of menu on sidebar menu
   */
  FETCHING_SIDEBAR_MOBILE: 'FETCHING_SIDEBAR_MOBILE',
  /**
   * Type to process when get data of sidebar menu success
   */
  FETCHING_SIDEBAR_MOBILE_SUCCESS: 'FETCHING_SIDEBAR_MOBILE_SUCCESS',
  /**
   * Type to process when get data of sidebar menu failure
   */
  FETCHING_SIDEBAR_MOBILE_FAILURE: 'FETCHING_SIDEBAR_MOBILE_FAILURE',

  // Get data for dropdown chats on right header
  /**
   * Type to get messages on right header
   */
  FETCHING_CHATS: 'FETCHING_CHATS',
  /**
   * Type to process when get messages success
   */
  FETCHING_CHATS_SUCCESS: 'FETCHING_CHATS_SUCCESS',
  /**
   * Type to process when get messages failure
   */
  FETCHING_CHATS_FAILURE: 'FETCHING_CHATS_FAILURE',

  // Get data for dropdown chats on right header
  /**
   * Type to get messages on right header
   */
  FETCHING_NOTIFY: 'FETCHING_NOTIFY',
  /**
   * Type to process when get messages success
   */
  FETCHING_NOTIFY_SUCCESS: 'FETCHING_NOTIFY_SUCCESS',
  /**
   * Type to process when get messages failure
   */
  FETCHING_NOTIFY_FAILURE: 'FETCHING_NOTIFY_FAILURE',

  LOADING_LOADER: 'LOADING_LOADER',
  LOAD_LOADER_START: 'LOAD_LOADER_START',
  LOAD_LOADER_SUCCESS: 'LOAD_LOADER_SUCCESS',
  LOAD_LOADER_FAIL: 'LOAD_LOADER_FAIL',

  LOADING_CLOSE_LOADER: 'LOADING_CLOSE_LOADER',
  CLOSE_LOADER_START: 'CLOSE_LOADER_START',
  CLOSE_LOADER_SUCCESS: 'CLOSE_LOADER_SUCCESS',
  CLOSE_LOADER_FAIL: 'CLOSE_LOADER_FAIL',

  LOADING_APP_START: 'LOADING_APP_START',
  CLOSE_LOADING_APP: 'CLOSE_LOADING_APP',
  LOADING_APP_POPUP_START: 'LOADING_APP_POPUP_START',
  CLOSE_LOADING_APP_POPUP: 'CLOSE_LOADING_APP_POPUP',
};

export default Types;
