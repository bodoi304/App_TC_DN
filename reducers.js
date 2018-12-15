/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import globalReducer from './src/globalReducer/appReducer'
import traCuuNopThue from './src/containers/TraCuuNopThue/reducer'
/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    globalReducer: globalReducer,
    TraCuuNopThue: traCuuNopThue,
    ...injectedReducers
  });
}
