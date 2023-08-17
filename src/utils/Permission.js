import _ from "lodash";
import RouterPath from "router/RouterPath";
import Routes from 'router/Routes';
import { unshiftFrom } from './Utils';
import IcHome from 'assets/images/icons/ic-overview';
import IcAbout from 'assets/images/icons/sidebar/ic-about';
import IcLinking from 'assets/images/icons/sidebar/ic-linking';
import IcShoppingGuide from 'assets/images/icons/sidebar/ic-shopping-guide';
import IcSecretQuestion from 'assets/images/icons/sidebar/ic-secret-question';
import IcMail from 'assets/images/icons/sidebar/ic-mail';
import IcOverview from 'assets/images/icons/sidebar/ic-overview';
import IcSetting from 'assets/images/icons/ic-general-setting';
import IcContract from 'assets/images/icons/ic-contract';
import IcSocial from 'assets/images/icons/sidebar/ic-social';
import EventRegister, { EVENT_SHOW_POPUP } from './EventRegister';
import PopupName from 'shared/components/common/popup/PopupName';
import useTrans from "hooks/use-trans";

export default class Permission {
    static MODULE_ID = 'MDL29';
    static FUNCTIONS = {
        SEARCH_BANNER:'FNC09009',
        ADD_BANNER:'FNC09010',
        UPDATE_BANNER:'FNC09011',
        DELETE_BANNER:'FNC09012',
        SEARCH_UI:'FNC09013',
        ADD_UI:'FNC09014',
        UPDATE_UI:'FNC09015',
        DELETE_UI:'FNC09016',
        VIEW_TREND:'FNC09017',
        SAVE_TREND:'FNC09018',
        VIEW_TOP:'FNC09019',
        SAVE_TOP:'FNC09020',
        VIEW_NEW:'FNC09021',
        SAVE_NEW:'FNC09022',
        VIEW_CATEGORY:'FNC09023',
        SAVE_CATEGORY:'FNC09024',
        VIEW_SERVICE:'FNC09025',
        SAVE_SERVICE:'FNC09026',
        VIEW_DELIVERY:'FNC09029',
        SAVE_DELIVERY:'FNC090230',
        VIEW_warranty_RETURN:'FNC09031',
        SAVE_warranty_RETURN:'FNC09032',
        VIEW_SECURITY_SHARE:'FNC09033',
        SAVE_SECURITY_SHARE:'FNC09034',
        VIEW_GUIDES:'FNC09037',
        SAVE_GUIDES:'FNC09038',
        VIEW_NUMBER_SETTING:'FNC09039',
        SAVE_NUMBER_SETTING:'FNC09040',
        VIEW_OTHER_LINK:'FNC09041',
        SAVE_OTHER_LINK:'FNC09042',
        VIEW_SECURITY_QUESTIONS:'FNC09043',
        ADD_SECURITY_QUESTIONS:'FNC09044',
        UPDATE_SECURITY_QUESTIONS:'FNC09045',
        DELETE_SECURITY_QUESTIONS:'FNC09046',
        VIEW_EMAIL:'FNC09047',
        SAVE_EMAIL:'FNC09048',
        VIEW_HOMEPAGE_NEWS:'FNC09050',
        SEARCH_SOCIAL:'FNC09001',
        POST_APPROVAL_SOCIAL:'FNC09002',
        NO_POST_APPROVAL_SOCIAL:'FNC09003',
        DETAIL_SOCIAL:'FNC09004',
        SEARCH_COMMENT:'FNC09006',
        HIDDEN_COMMENT_SOCIAL:'FNC09007',
        SHOW_COMMENT_SOCIAL:'FNC09008',
        VIEW_ADS:'FNC09051',
        VIEW_REPORT_SOCIAL:'FNC09005',
        VIEW_HOMEPAGE_MENU:'FNC09052',
        VIEW_ABOUT_US:'FNC09035',
        SAVE_ABOUT_US:'FNC09035',
        VIEW_TERMS_USE:"FNC09027",
        SAVE_TERMS_USE:"FNC09028",
        SEARCH_CATEGORY: 'FNC09051',
        DELETE_CATEGORY: 'FNC09052',
        ADD_CATEGORY: 'FNC09053',
        VIEW_DETAIL_CATEGORY: 'FNC09054',
        EDIT_CATEGORY: 'FNC09055',
        SEARCH_SEO_INFO: 'FNC09056',
        DELETE_SEO_INFO: 'FNC09057',
        ADD_SEO_INFO: 'FNC09058',
        VIEW_DETAIL_SEO_INFO: 'FNC09059',
        EDIT_SEO_INFO: 'FNC09060',
        SEARCH_RECRUITMENT: 'FNC09061',
        DELETE_RECRUITMENT: 'FNC09062',
        ADD_RECRUITMENT: 'FNC09063',
        VIEW_DETAIL_RECRUITMENT: 'FNC09064',
        EDIT_RECRUITMENT: 'FNC09065',
        VIEW_PAGE_STRUCTURE: 'FNC09065',
        EDIT_PAGE_STRUCTURE: 'FNC09066',
    }

    static IsEnabledFunction = (Id) => {
        const decentralization = localStorage.getItem('decentralization') ? JSON.parse(localStorage.getItem('decentralization')) : {};

        if (!decentralization || !decentralization.Module) {
            return true;
        }
        const module = _.find(decentralization.Module, (item) => (item.Id == this.MODULE_ID));
        if (!module || !module.Screens) {
            return true;
        }
        const length = module.Screens.length;
        let fnc = null;
        for (let i = 0; i < length; i++) {
            if (module.Screens[i].Functions) {
                fnc = _.find(module.Screens[i].Functions, (item) => (item.Id == Id));
                if (fnc) {
                    break;
                }
            }
        }
        return fnc ? fnc.IsEnabled : true;
    }
    static icons = {
        IcOverview: <IcOverview />,
        IcHome: <IcHome />,
        IcAbout: <IcAbout />,
        IconContract: <IcContract />,
        IcShoppingGuide: <IcShoppingGuide />,
        IcSetting: <IcSetting />,
        IcLinking: <IcLinking />,
        IcSecretQuestion: <IcSecretQuestion />,
        IcMail: <IcMail />,
        IcSocial: <IcSocial />,
    };
    static getSidebarData = (decentralization) => {
        const result = [];
        const module = _.find(decentralization.Module, (item) => (item.Id == Permission.MODULE_ID));
        if (module && module.Menus) {
            const length = module.Menus.length;
            for (let i = 0; i < length; i++) {
                const menu = module.Menus[i];
                const m = {};
                m.id = menu.Id;
                m.title = menu.Name;
                m.disabled = menu.IsDisabled;
                m.info = menu;
                m.icon = this.icons[menu.Icon] ?? this.icons['IcOverview'];
                // Check exist route [START]
                let checkRoute = Routes[0].routes.find(x => x.id == menu.RouterName);
                if (checkRoute == null) {
                    m.disabled = true
                }
                // Check exist route [END]
                if (menu.Menus && menu.Menus.length > 0) {
                    const length2 = menu.Menus.length;
                    m.subNav = [];
                    for (let j = 0; j < length2; j++) {
                        const childMmenu = menu.Menus[j];
                        const cm = {};
                        cm.id = childMmenu.Id;
                        cm.title = childMmenu.Name;
                        cm.path = childMmenu.RouterName ? RouterPath[childMmenu.RouterName] ?? '' : childMmenu.ScreenUrl;
                        cm.parentId = m.id
                        m.subNav.push(cm);
                    }
                }
                else {
                    m.path = menu.RouterName ? RouterPath[menu.RouterName] ?? '' : menu.ScreenUrl;
                }
                result.push(m);
            }
        }
        return result;
        //return SidebarData;
    }
}
// Demo
// const handleCreateAds = () => {
//     EventRegister.emit(EVENT_SHOW_POPUP, {
//         type: PopupName.CREATE_ADS,
//         open: true,
//     });
// };

export const menuPermission = (menu, router) => {
    const { trans } = useTrans();
    
    let data = [];
    
    data.push({
        title: 'Tạo mới đề xuất tuyển dụng',
        onClick: () => {
            router.push({
                pathname: RouterPath.ADD_NEW_PROPOSAL
            })
        },
        isDisabled: !Permission.IsEnabledFunction(Permission.FUNCTIONS.ADD_UI),
    });
    data.push({
        title: 'Thêm mới ứng viên',
        onClick: () => {
            router.push({
                pathname: RouterPath.ADD_NEW_CANDIDATES
            })
        },
        isDisabled: !Permission.IsEnabledFunction(Permission.FUNCTIONS.ADD_UI),
    });
    let index = data?.findIndex(x=> x?.value == menu);
    data=unshiftFrom(data,index);
    return data;
}