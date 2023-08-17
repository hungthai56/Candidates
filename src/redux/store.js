/**
 * ****************************************************************************
 * @description     :   Create store will use by redux
 * @created at      :   2020/12/03
 * @created by      :   QuyPN - quy.pham@toploop.co
 * @package         :   dashlite-admin-react
 * @copyright       :   Copyright (c) TOPLOOP
 * @version         :   1.0.0
 * ****************************************************************************
 */

/**
 * import libraries
 */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

/**
 * import reducer and middleware for store
 */
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

/**
 * Creates a Redux middleware and connects the Sagas to the Redux Store
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * Apply middleware to store
 * -----------------------------------------
 * @author : QuyPN - 2020/12/03 - create
 * @param  : {Object} middleware - Functions to create redux middleware
 * @returns: {function} - Function to apply middleware to store
 * @access : public
 */
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

/**
 * Ceeate store with reducer and middleware
 * -----------------------------------------
 * @author : QuyPN - 2020/12/03 - create
 * @param  : {Object} - Current state of system
 * @returns: {Object} - store of system
 * @access : public
 */
function initStore(initialState = {}) {
  /**
   * store of system
   */
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware]),
  );

  /**
   * If saga not running then run saga
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @access : public
   */
  store.runSaga = () => {
    // Avoid running twice
    if (store.saga) {
      return;
    }
    store.saga = sagaMiddleware.run(rootSaga);
  };

  /**
   * If saga not running then stop saga
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @access : public
   */
  store.stopSaga = async () => {
    // Avoid running twice
    if (!store.saga) {
      return;
    }
    store.dispatch(END);
    await store.saga.done;
    store.saga = null;
  };

  /**
   * Exec a saga process on a thread
   * -----------------------------------------
   * @author : QuyPN - 2020/12/03 - create
   * @param  : {bool} isServer - saga is running on server or on client
   * @param  : {function} tasks - thread to run saga
   * @access : public
   */
  store.execSagaTasks = async (isServer, tasks) => {
    // run saga
    store.runSaga();
    // dispatch saga tasks
    tasks(store.dispatch);
    // Stop running and wait for the tasks to be done
    await store.stopSaga();
    // Re-run on client side
    if (!isServer) {
      store.runSaga();
    }
  };

  // Initial run
  store.runSaga();

  return store;
}

export default initStore;
