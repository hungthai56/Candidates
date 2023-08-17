export const POPUP_TEXT_TYPE = 'POPUP_TEXT_TYPE';
export const EVENT_SHOW_POPUP = 'EVENT_SHOW_POPUP';
export const EVENT_SHOW_POPUP2 = 'EVENT_SHOW_POPUP2';
export const EVENT_SHOW_POPUP_CANCEL_POST = 'EVENT_SHOW_POPUP_CANCEL_POST';
export const EVENT_SHOW_POPUP_DELETE = 'EVENT_SHOW_POPUP_DELETE';
export const EVENT_SHOW_POPUP_ACCEPT = 'EVENT_SHOW_POPUP_ACCEPT';
export const EVENT_SHOW_POPUP_COMMENT = 'EVENT_SHOW_POPUP_COMMENT';
export const EVENT_SHOW_POPUP_HISTORY_REPORT =
    'EVENT_SHOW_POPUP_HISTORY_REPORT';
export const EVENT_SHOW_POPUP_IMAGES_POST = 'EVENT_SHOW_POPUP_IMAGES_POST';
export const EVENT_SHOW_POPUP_CHANGE_COLUMN_NUMBER =
    'EVENT_SHOW_POPUP_CHANGE_COLUMN_NUMBER';
export const EVENT_SHOW_POPUP_MENU_MESSAGE = 'EVENT_SHOW_MENU_MESSAGE';
export const FIRST_POPUP = 1;
export const SECOND_POPUP = 2;
export const EVENT_SHOW_POPUP_CONTENT = 'EVENT_SHOW_POPUP_CONTENT';
export const LIST_TAG_SHARED_POPUP = 'LIST_TAG_SHARED_POPUP';

// Share component
export const POPUP_ROUTER = 'POPUP_ROUTER';
export const LIST_PRODUCT_SHARED_POPUP = 'LIST_PRODUCT_SHARED_POPUP';
export const CREATE_PRODUCT_SHARED_POPUP = 'CREATE_PRODUCT_SHARED_POPUP';
export const MODULE_PRODUCT = 'MODULE_PRODUCT';
export const MODULE_ORDER = 'MODULE_ORDER';
export const RELOAD_PERMISSION = 'RELOAD_PERMISSION';
export const EVENT_CHANGE_HEADER = 'EVENT_CHANGE_HEADER';

export const EVENT_SHOW_POPUP_CATEGORY_CHILD= 'EVENT_SHOW_POPUP_CATEGORY_CHILD';
export const EVENT_SHOW_POPUP_CATEGORY_TRANFER= 'EVENT_SHOW_POPUP_CATEGORY_TRANFER';
export const POPUP_CONFIRM= 'POPUP_CONFIRM';
export const NEWS_POPUP= 'NEWS_POPUP';
export const RECRUITMENT_POPUP= 'RECRUITMENTPopup';


export default class EventRegister {
    static listeners = {
        count: 0,
        refs: {},
    };

    static addEventListener(eventName, callback) {
        if (typeof eventName === 'string' && typeof callback === 'function') {
            EventRegister.listeners.count += 1;
            const eventId = `l${EventRegister.listeners.count}`;
            EventRegister.listeners.refs[eventId] = {
                name: eventName,
                callback,
            };
            return eventId;
        }
        return false;
    }

    static removeEventListener(id) {
        if (typeof id === 'string') {
            return delete EventRegister.listeners.refs[id];
        }
        return false;
    }

    static removeAllListeners() {
        let removeError = false;
        Object.keys(EventRegister.listeners.refs).forEach((id) => {
            const removed = delete EventRegister.listeners.refs[id];
            removeError = !removeError ? !removed : removeError;
        });
        return !removeError;
    }

    static emitEvent(eventName, data) {
        Object.keys(EventRegister.listeners.refs).forEach((id) => {
            if (
                EventRegister.listeners.refs[id] &&
                eventName === EventRegister.listeners.refs[id].name
            ) {
                EventRegister.listeners.refs[id].callback(data);
            }
        });
    }

    static on(eventName, callback) {
        return EventRegister.addEventListener(eventName, callback);
    }

    static off(eventName) {
        return EventRegister.removeEventListener(eventName);
    }

    static offAll() {
        return EventRegister.removeAllListeners();
    }

    static emit(eventName, data) {
        EventRegister.emitEvent(eventName, data);
    }
}
