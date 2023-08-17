
import Cookies from 'js-cookie';
import _ from 'lodash';
import factories from 'redux/app/factory';
import AppConfig from 'utils/AppConfig';
import Permission from 'utils/Permission';

export const AdminGuard = async (guardArgs, route) => {
    AppConfig.ACCESS_TOKEN =  Cookies.get('user') && JSON.parse(Cookies.get('user'))?.Token || '';
    const token_header =  Cookies.get('user') && JSON.parse(Cookies.get('user'))?.Token || '';
    const have_token = !!token_header;
    if (!have_token) {
        return false;
    }
    let decentralization = localStorage.getItem('decentralization') ? JSON.parse(localStorage.getItem('decentralization')) : {};
    if (!decentralization || !decentralization.Module) {
        const response = await factories.getDecentralization();
        decentralization = response ?? {};
        localStorage.setItem('decentralization', JSON.stringify(decentralization))
    }
    const module = _.find(decentralization.Module, (item) => (item.Id == Permission.MODULE_ID));
    if (!module || !module.Screens) {
        return true;
    }
    const screen = _.find(module.Screens, (item) => ((item.RouterName ?? item.Id) == route.id));

    return screen ? screen.IsEnabled : true;
};