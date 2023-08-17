import React, { useState } from 'react';
import AppConfig from 'utils/AppConfig';
import Permission from 'utils/Permission';
import { RELOAD_PERMISSION } from 'utils/EventRegister';
import ShareService from 'utils/ShareService';
import RouterPath from 'router/RouterPath';
import Constants from 'utils/Constants';

function Sidebar(props) {
    const handleOnToggleSidebar = (val) => {
    }
    const [sidebarData, setSidebarData] = useState(Permission.getSidebarData(AppConfig.SHARE_PERMISSION));
    React.useEffect(() => {
        setSidebarData(Permission.getSidebarData(AppConfig.SHARE_PERMISSION));
    }, [AppConfig.SHARE_PERMISSION])
    React.useEffect(() => {
        const reloadEvent = AppConfig.SHARE_EVENT.on(RELOAD_PERMISSION, () => {
            console.log("RELOAD_PERMISSION")
            setSidebarData(Permission.getSidebarData(AppConfig.SHARE_PERMISSION));
        })
        return () => {
            AppConfig.SHARE_EVENT.off(reloadEvent)
        }
    }, [])
    const MiniDrawer = ShareService.SHARE_ELEMENT.MiniDrawer;
    const onChangeRoute = (path) => {
        RouterPath.push(path);
    }

    return (
        <MiniDrawer
            // Menu={sidebarData}
            onToggle={handleOnToggleSidebar}
            Location={RouterPath.LOCATION}
            RouterPath={RouterPath}
            SidebarMapping={Constants.SIDEBAR_MENU}
            onChangeRoute={onChangeRoute}
            ModuleId={Permission.MODULE_ID}
            Icons={Permission.icons}
            RouteConfig={[]}
        />
    );
}
export default Sidebar;
