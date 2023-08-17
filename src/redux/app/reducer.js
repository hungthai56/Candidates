/**
 * ****************************************************************************
 * @description     :   Reducer to receive action and change state for all app
 * @created at      :   2020/12/03
 * @created by      :   QuyPN - quy.pham@toploop.co
 * @package         :   dashlite-admin-react
 * @copyright       :   Copyright (c) TOPLOOP
 * @version         :   1.0.0
 * ****************************************************************************
 */

/**
 * import types of action will process
 */
import Types from './action-types';

/**
 * import factory to get data
 */
import Factory from './factory';

/**
 * Initial state of app
 */
const initialState = {
  /**
   * Data for left menu
   */
  menus: [],
  /**
   * Data message for dropdown chat
   */
  chats: [],
  /**
   * Data notify for dropdown notify
   */
  notify: [],
  /**
   * Data for sidebar menu on mobile
   */
  sidebarMenus: [],
  masterData: {
    PostStatus: [
      { value: 'Tất cả', label: 'Tất cả', key: '0' },
      { value: 'Chờ xét duyệt', label: 'Chờ xét duyệt', key: '10' },
      { value: 'Đã phê duyệt', label: 'Đã phê duyệt', key: '20' },
      {
        value: 'Không được phê duyệt',
        label: 'Không được phê duyệt',
        key: '30',
      },
      { value: 'Bị báo cáo', label: 'Bị báo cáo', key: '40' },
    ],
    CommentStatus: [
      { value: 'Tất cả', label: 'Tất cả', key: '0' },
      // { value: 'Hiện', label: 'Hiện', key: '1' },
      { value: 'Đã ẩn', label: 'Đã ẩn', key: '2' },
      { value: 'Bị báo cáo', label: 'Bị báo cáo', key: '3' },
    ],
    ReportPostStatus: [
      { value: '10', label: 'Mới', key: '10' },
      // { value: 'Hiện', label: 'Hiện', key: '1' },
      { value: '20', label: 'Đã giải quyết', key: '20' },
    ],
  },
  loadingApp: false,
};

/**
 * Reducer to process change data of app
 * -----------------------------------------
 * @author : QuyPN - 2020/12/03 - create
 * @param  : {Object} state - Current sate of app
 * @param  : {Object} action - information of action will process
 * @access : public
 */
export default function appReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * Change data of menu when get menus success
     */
    case Types.FETCHING_MENUS_SUCCESS:
      return {
        ...state,
        menus: action.data,
      };
    /**
     * Reset data of menu when get menus failure
     */
    case Types.FETCHING_MENUS_FAILURE:
      return {
        ...state,
        menus: [],
      };
    /**
     * Change data to show or hide sidebar menu
     */
    case Types.TOGGLE_MENU_MOBILE:
      return {
        ...state,
        openningMenuMobile: !state.openningMenuMobile,
      };
    /**
     * Change data to close sidebar menu
     */
    case Types.CLOSE_MENU_MOBILE:
      return {
        ...state,
        openningMenuMobile: false,
      };
    /**
     * Change data to active menu of current page anh show information of curent page on header
     */
    case Types.SET_ACTIVE_MENU:
      return {
        ...state,
        ...Factory.GetMenu(state.menus, action.data),
      };
    /**
     * Change data of menu on sidebar when get menus success
     */
    case Types.FETCHING_SIDEBAR_MOBILE_SUCCESS:
      return {
        ...state,
        sidebarMenus: action.data,
      };
    /**
     * Reset data of menu on sidebar when get menus failure
     */
    case Types.FETCHING_SIDEBAR_MOBILE_FAILURE:
      return {
        ...state,
        sidebarMenus: [],
      };
    /**
     * Change data of dropdown chats on right-header when get messages success
     */
    case Types.FETCHING_CHATS_SUCCESS:
      return {
        ...state,
        chats: action.data,
      };
    /**
     * Reset data of dropdown chats on right-header when get messages failure
     */
    case Types.FETCHING_CHATS_FAILURE:
      return {
        ...state,
        chats: [],
      };
    /**
     * Change data of dropdown notify on right-header when get notify success
     */
    case Types.FETCHING_NOTIFY_SUCCESS:
      return {
        ...state,
        notify: action.data,
      };
    /**
     * Reset data of dropdown notify on right-header when get notify failure
     */
    case Types.FETCHING_NOTIFY_FAILURE:
      return {
        ...state,
        notify: [],
      };
    case Types.LOAD_LOADER_SUCCESS:
      return {
        ...state,
        loadingApp: true,
      };
    case Types.CLOSE_LOADER_SUCCESS:
      return {
        ...state,
        loadingApp: false,
      };
    default:
      return state;
  }
}
