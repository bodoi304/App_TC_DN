import { SHOW_MESSAGE, REMOVE_MESSAGE, UPDATE_CURRENT_USER, IS_AUTHENTICATED, IS_LOADING } from "./constants";
import { fromJS } from 'immutable';

const globalInitialState = fromJS({
    currentUser: null,
    isAuthenticated: false,
    isLoading: false,
    message: ''
})


export default function globalReducer(state = globalInitialState, action) {
    switch (action.type) {
        case UPDATE_CURRENT_USER:
            return state.set('currentUser', action.payload);
        case IS_AUTHENTICATED:
            return state.set('isAuthenticated', action.payload);
        case IS_LOADING:
            return state.set('isLoading', action.payload);
        case SHOW_MESSAGE:
            return state.set('message', action.payload)
        case REMOVE_MESSAGE:
            return state.set('message', '')
        default:
            return state;
    }
}
