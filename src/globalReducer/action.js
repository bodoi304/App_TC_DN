import { SHOW_MESSAGE, REMOVE_MESSAGE, UPDATE_CURRENT_USER, IS_AUTHENTICATED, IS_LOADING, LOAD_CURRENT_USER_REQUEST, LOGIN_REQUEST } from "./constants";


export function routePage(page){
    return {
        type: 'ROUTE_PAGE',
        page
    }
}

export function loginRequest(username, password){
    return {
        type: LOGIN_REQUEST,
        payload: {username, password}
    }
}
export function loadCurrentUserRequest(){
    return {
        type: LOAD_CURRENT_USER_REQUEST,
    }
}

export function updateCurrentUser(user){
    return {
        type: UPDATE_CURRENT_USER,
        payload: user,
    }
}
export function updateIsAuthenticated(isAuthenticated){
    return {
        type: IS_AUTHENTICATED,
        payload: isAuthenticated,
    }
}
export function updateIsLoading(isLoading){
    return {
        type: IS_LOADING,
        payload: isLoading,
    }
}

export function showMessage(message){
    return {
        type: SHOW_MESSAGE,
        payload: message,
    }
}

export function removeMessage(){
    return {
        type: REMOVE_MESSAGE,
    }
}
