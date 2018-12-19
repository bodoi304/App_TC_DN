import { IS_LOADING } from "./constants";
import { UPDATE_CURRENT_USER  } from "../containers/Login/constants";
import { fromJS } from 'immutable';

const globalInitialState = fromJS({
    currentUser: {},
    isAuthenticated: false,
    isLoading: false,
    message: ''
})


export default function globalReducer(state = globalInitialState, action) {
    switch (action.type) {
        case UPDATE_CURRENT_USER:
            return state.set('currentUser', action.payload);
        case IS_LOADING:
            return state.set('isLoading', action.payload);
        default:
            return state;
    }
}
