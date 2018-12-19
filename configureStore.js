/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware,compose } from 'redux';

import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import saga from './src/globalReducer/saga'
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [
    sagaMiddleware
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];



  const store = createStore(
    createReducer(),
    compose(...enhancers)
  );
  sagaMiddleware.run(saga)
  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
