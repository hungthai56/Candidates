import React from 'react';
import { Provider } from 'react-redux';
import MainRouter from 'router/MainRouter';
import AppConfig from 'utils/AppConfig';
import initStore from './redux/store';
import ShareService from 'utils/ShareService';
import classes from './Common.module.scss'

const store = initStore();
function App(props) {
    AppConfig.SHARE_ELEMENT = props.ShareElement;
    AppConfig.SHARE_ROUTER = props.ShareRouter;
    AppConfig.SHARE_PERMISSION = props.SharePermission;
    AppConfig.SHARE_EVENT = props.SharedEvent;
    ShareService.init(props)

    return (
        <Provider store={store}>
            <div className={`${classes['MDL29']}`}>
                <MainRouter />
            </div>
        </Provider>
    );
}

export default App;
