import Cookies from 'js-cookie';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import actionBanner from 'redux/banner/action';
import Loader from 'shared/components/common/loader/Loader';
import CommonPopup from 'shared/components/common/popup/CommonPopup';
import ToastifyCommon from 'shared/components/toastify/ToastifyCommon';
import AppConfig from 'utils/AppConfig';
import { FIRST_POPUP, SECOND_POPUP } from 'utils/EventRegister';
import CustomRoute from './CustomRoute';
import { ProtectedRoute } from './ProtectedRoute';
import RouterPath from "./RouterPath";
import Routes from './Routes';
import { divide } from 'lodash';

const Layout = ({ layout: LayoutComponent, routes }) => {
    const paths = routes.map(x => RouterPath[x.id]);
    const layout = <LayoutComponent children={<Switch>
        {
            routes.map((route, index) => {
                route.path = RouterPath[route.id] ?? '';
                return route?.guards?.length > 0 ? <ProtectedRoute
                    key={index}
                    path={route.path}
                    route={route}
                >
                    {route.component}
                </ProtectedRoute > : <CustomRoute key={index} path={route.path} route={route}>
                    {route.component}
                </CustomRoute>
            })
        }
    </Switch>} />;
    return <Route path={paths} children={layout} exact />
}

function MainRouter () {
    const dispatch = useDispatch();
    useEffect(() => {
        AppConfig.ACCESS_TOKEN = Cookies.get('user') && JSON.parse(Cookies.get('user'))?.Token || '';

    }, [])

    useEffect(() => {
        dispatch({
            type: actionBanner.FETCH_BANNER_MASTER,
        });
    }, []);

    const loadingApp = useSelector(state => state.App?.loadingApp)
    
    return (
        <div>
            <ToastifyCommon />
            <Suspense fallback={<Loader />}>
                <Route path={[...Routes].reduce((total, value) => {
                    return total.concat(value.routes);
                }, []).map(x => RouterPath[x.id])} >
                    {Routes.map((x, i) => <Layout key={i} {...x} />)}
                    <CommonPopup _key={SECOND_POPUP} />
                    <CommonPopup _key={FIRST_POPUP} />
                </Route>
                {loadingApp && <Loader loading={<Loader />} />}
            </Suspense>
        </div>
    )
}
export default MainRouter;