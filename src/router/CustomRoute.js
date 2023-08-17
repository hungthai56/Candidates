import useRouterV2 from 'hooks/use-router-v2';
import { Route, useLocation } from 'react-router-dom';
import RouterPath from './RouterPath';

function CustomRoute (props) {
    const router = useRouterV2();
    const location = useLocation();
    RouterPath.ROUTER = router;
    RouterPath.LOCATION = location;
    return (
        <Route path={props.route.path} exact {...props.rest}>
            {props.children}
        </Route>
    )
}
export default CustomRoute;