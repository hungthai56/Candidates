const Empty = () => <div></div>;
export default class ShareService {
    static MODULE = {
        // MODULE_PRODUCT: "MODULE_PRODUCT"
    }
    static COMPONENT = {
        // LIST_PRODUCT_SHARED: 'LIST_PRODUCT_SHARED'
    }
    static SHARE_EVENT = {}
    static SHARE_ROUTER = {}
    static SHARE_ELEMENT = {}
    static SHARE_PERMISSION = {}
    static init = (val) => {
        this.SHARE_ELEMENT = val.ShareElement;
        this.SHARE_PERMISSION = val.SharePermission;
        this.SHARE_EVENT = val.SharedEvent;
        this.SHARE_ROUTER = val.ShareRouter;
    }
    static EventEmit = (name, data) => {
        if (this.SHARE_EVENT?.emit) {
            this.SHARE_EVENT.emit(name, data)
        }
    }
    static RouterPush = (val) => {
        if (this.SHARE_ROUTER?.push) {
            this.SHARE_ROUTER?.push(val)
        }
    }
    static EventOn = (val) => {
        if (this.SHARE_EVENT?.on) {
            this.SHARE_EVENT.on(val)
        }
    }
    static EventOff = (val) => {
        if (this.SHARE_EVENT?.off) {
            this.SHARE_EVENT.off(val)
        }
    }
    static CommonHeader = () => {
        return this.SHARE_ELEMENT?.Header ?? Empty
    }
    static PermissionInfo = () => {
        return this.SHARE_PERMISSION
    }
    static CommonLogo = () => {
        return this.SHARE_ELEMENT?.Logo ?? Empty
    }
}