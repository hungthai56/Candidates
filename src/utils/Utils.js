import md5 from 'md5';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import Constants from './Constants';
import action from '../redux/candidate-manager/action';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeadCell from './../shared/components/candidates-manager/CustomHeadCell'
import EventRegister, {
    EVENT_SHOW_POPUP,
    FIRST_POPUP,
    POPUP_TEXT_TYPE,
    EVENT_SHOW_POPUP2,
    EVENT_SHOW_POPUP_CANCEL_POST,
    EVENT_SHOW_POPUP_DELETE,
    EVENT_SHOW_POPUP_ACCEPT,
    EVENT_SHOW_POPUP_COMMENT,
    EVENT_SHOW_POPUP_HISTORY_REPORT,
    EVENT_SHOW_POPUP_IMAGES_POST,
} from './EventRegister';
import AppConfig from './AppConfig';
import { toast } from 'react-toastify';
export default class Utils {
    /**
      @argument: val - string
      @returns: string
      @description: encode md5 string
    */
    static MD5(val) {
        return md5(`${val}`);
    }
    /**
      @argument: none
      @returns: boolean
      @description: check user is logged
    */
    static isLogged() {
        const token =
            (Cookies.get('user') && JSON.parse(Cookies.get('user'))?.Token) || '';
        const jwtDecodeValue = Utils.decodeJWT(token);
        if (!token || jwtDecodeValue.isExpired) {
            return false;
        }
        return true;
    }
    /**
      @argument: token - string
      @returns: object
      @description: decode jwt token
    */
    static decodeJWT(token) {
        if (!token) {
            return null;
        }
        const value = jwtDecode(token);
        return {
            isExpired: value.exp < new Date().getTime() / 1000,
        };
    }
    static ConvertType(type) {
        switch (type) {
            case Constants.STATUS_POST.STATUS_APPROVE:
                return (
                    <span style={{ color: '#138300', fontSize: 12 }}>
                        {Constants.TEXT_POST_TYPE.STATUS_APPROVE}
                    </span>
                );
            case Constants.STATUS_POST.STATUS_NOT_APPROVE:
                return (
                    <span style={{ color: '#FF4D4D', fontSize: 12 }}>
                        {Constants.TEXT_POST_TYPE.STATUS_NOT_APPROVE}
                    </span>
                );
            case Constants.STATUS_POST.STATUS_WAIT_APPROVE:
                return (
                    <span style={{ color: '#DAB600', fontSize: 12 }}>
                        {Constants.TEXT_POST_TYPE.STATUS_WAIT_APPROVE}
                    </span>
                );
            case Constants.STATUS_POST.STATUS_REPORT:
                return (
                    <span style={{ color: '#FF2C00', fontSize: 12 }}>
                        {Constants.TEXT_POST_TYPE.STATUS_REPORT}
                    </span>
                );
            default:
                return (
                    <span style={{ color: '#138300', fontSize: 12 }}>
                        {Constants.TEXT_POST_TYPE.STATUS_APPROVE}
                    </span>
                );
        }
    }
    static ConvertTypeStatus(type) {
        switch (type) {
            case Constants.STATUS_POST.STATUS_APPROVE:
                return (
                    <span style={{ color: "#fff", fontSize: "12px", display: "flex", padding: "6px 22px", alignItems: "center", borderRadius: "3px", background: "#008A5A", width: "115px", justifyContent: "center" }}>
                        {Constants.TEXT_PROPOSE_TYPE.STATUS_ACCEPT}
                    </span>
                );
            case Constants.STATUS_POST.STATUS_NOT_APPROVE:
                return (
                    <span style={{ color: "#fff", fontSize: "12px", display: "flex", padding: "6px 22px", alignItems: "center", borderRadius: "3px", background: "#D72F2F", width: "115px", justifyContent: "center" }}>
                        {Constants.TEXT_PROPOSE_TYPE.STATUS_BAN}
                    </span>
                );
            case Constants.STATUS_POST.STATUS_WAIT_APPROVE:
                return (
                    <span style={{ color: "#fff", fontSize: "12px", display: "flex", padding: "6px 22px", alignItems: "center", borderRadius: "3px", background: "#FF8246", width: "115px", justifyContent: "center" }}>
                        {Constants.TEXT_PROPOSE_TYPE.STATUS_LOADING}
                    </span>
                );
            default:
                return (
                    <span style={{ color: "#fff", fontSize: "12px", display: "flex", padding: "6px 22px", alignItems: "center", borderRadius: "3px", background: "#008A5A", width: "115px", justifyContent: "center" }}>
                        {Constants.TEXT_PROPOSE_TYPE.STATUS_ACCEPT}
                    </span>
                );
        }
    }

    static ConvertTypePosition(type) {
        const { Positions } = useSelector(
            (state) => state.AppReruitmentProposal,
        );
        let title = ''
        const result = Object.entries(Positions);
        result.forEach(key => {
            if(key[0] == type){
                title = key[1]
            }
        });
        return (
            <span>
                {title}
            </span>
        )
    }

    static ConvertTypeWorkType(type) {
        const { WorkType } = useSelector(
            (state) => state.AppReruitmentProposal,
        );
        let title = ''
        const result = Object.entries(WorkType);
        result.forEach(key => {
            if(key[0] == type){
                title = key[1]
            }
        });
        return (
            <span>
                {title}
            </span>
        )
    }

    static ConvertTypeDepartment(type) {
        const { Departments } = useSelector(
            (state) => state.AppCandidates,
        );
        let title = ''
        const result = Object.entries(WorkType);
        result.forEach(key => {
            if(key[0] == type){
                title = key[1]
            }
        });
        return (
            <span>
                {title}
            </span>
        )
    }
    static alertPopup(
        title = 'Title',
        type = POPUP_TEXT_TYPE,
        callback = null,
        layer = FIRST_POPUP,
        backdropCallback = null,
    ) {
        const eventName =
            layer === FIRST_POPUP ? EVENT_SHOW_POPUP : EVENT_SHOW_POPUP2;
        let typePopup = POPUP_TEXT_TYPE;
        switch (type) {
            case POPUP_TEXT_TYPE:
                typePopup = POPUP_TEXT_TYPE;
                break;
            case EVENT_SHOW_POPUP_CANCEL_POST:
                typePopup = EVENT_SHOW_POPUP_CANCEL_POST;
                break;
            case EVENT_SHOW_POPUP_DELETE:
                typePopup = EVENT_SHOW_POPUP_DELETE;
                break;
            case EVENT_SHOW_POPUP_ACCEPT:
                typePopup = EVENT_SHOW_POPUP_ACCEPT;
                break;
            case EVENT_SHOW_POPUP_COMMENT:
                typePopup = EVENT_SHOW_POPUP_COMMENT;
                break;
            case EVENT_SHOW_POPUP_HISTORY_REPORT:
                typePopup = EVENT_SHOW_POPUP_HISTORY_REPORT;
                break;
            case EVENT_SHOW_POPUP_IMAGES_POST:
                typePopup = EVENT_SHOW_POPUP_IMAGES_POST;
                break;
            default:
                typePopup = POPUP_TEXT_TYPE;
                break;
        }
        EventRegister.emit(eventName, {
            type: typePopup,
            open: true,
            payload: {
                title,
                callback,
                backdropCallback,
            },
        });
    }
    static asyncEvery = async (arr, predicate) => {
        for (const e of arr) {
            if (!(await predicate(e))) {
                return false;
            }
        }
        return true;
    };
    static triggerSubmit(wrapRef) {
        if (AppConfig.QUICK_SEARCH) {
            try {
                let listBtn = wrapRef.current.closest("form.quick-submit").querySelectorAll("button[type=submit]");
                if (listBtn.length > 0) {
                    listBtn[0].click();
                }
            } catch (error) {
            }
        }
    }
    static alertPopupAsync({
        title = 'Title',
        type = POPUP_TEXT_TYPE,
        callback = null,
        layer = FIRST_POPUP,
        backdropCallback = null,
    }) {
        return new Promise((resolve, reject) => {
            const eventName =
                layer == FIRST_POPUP ? EVENT_SHOW_POPUP : EVENT_SHOW_POPUP2;
            let typePopup = POPUP_TEXT_TYPE;
            switch (type) {
                case POPUP_TEXT_TYPE:
                    typePopup = POPUP_TEXT_TYPE;
                    break;
                case EVENT_SHOW_POPUP_CANCEL_POST:
                    typePopup = EVENT_SHOW_POPUP_CANCEL_POST;
                    break;
                case EVENT_SHOW_POPUP_DELETE:
                    typePopup = EVENT_SHOW_POPUP_DELETE;
                    break;
                case EVENT_SHOW_POPUP_ACCEPT:
                    typePopup = EVENT_SHOW_POPUP_ACCEPT;
                    break;
                case EVENT_SHOW_POPUP_COMMENT:
                    typePopup = EVENT_SHOW_POPUP_COMMENT;
                    break;
                case EVENT_SHOW_POPUP_HISTORY_REPORT:
                    typePopup = EVENT_SHOW_POPUP_HISTORY_REPORT;
                    break;
                case EVENT_SHOW_POPUP_IMAGES_POST:
                    typePopup = EVENT_SHOW_POPUP_IMAGES_POST;
                    break;
                default:
                    typePopup = POPUP_TEXT_TYPE;
                    break;
            }
            EventRegister.emit(eventName, {
                type: typePopup,
                open: true,
                payload: {
                    title,
                    callback: () => {
                        callback && callback();
                        resolve({
                            ok: true,
                        });
                    },
                    backdropCallback: () => {
                        backdropCallback && backdropCallback();
                        resolve({
                            backdrop: true,
                        });
                    },
                },
            });
        });
    }
}
export function unshiftFrom(arr, index) {
    if (index > -1 && index < arr.length) {
        var [itemToMove] = arr.splice(index, 1)
        arr.unshift({
            ...itemToMove,
            active: true
        })
    }
    return arr;
}
export const convertParamsToArray = (obj) => {
    return Object.keys(obj).map(function (key) {
        return obj[key];
    });
}
export const getToast = (message, typeToast, iconMessage, timeClose) => {
    switch (typeToast) {
        case "success":
            return toast.success(message ?? 'Thành công !!!', {
                type: typeToast,
                icon: iconMessage,
                autoClose: timeClose
            });
        case "error":
            return toast.error(message ?? 'Lỗi Hệ thống', {
                type: typeToast,
                icon: iconMessage,
                autoClose: timeClose
            });
        case "warning":
            return toast.error(message ?? 'Lỗi Hệ thống', {
                type: typeToast,
                icon: iconMessage,
                autoClose: timeClose
            });
        case "info":
            return toast.error(message ?? 'Thành công !!!', {
                type: typeToast,
                icon: iconMessage,
                autoClose: timeClose
            });
        default:
            return toast.success(message ?? 'Thành công !!!', {
                type: typeToast,
                icon: iconMessage,
                autoClose: timeClose
            });
    }
}