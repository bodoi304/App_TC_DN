import { fromJS } from 'immutable';
import configureStore from './configureStore';
const initialState = fromJS({});
let store = configureStore(initialState);
export {store};