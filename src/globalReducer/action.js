import { SAGA_LOG_IN,SAGA_LOG_OUT, REMOVE_MESSAGE, UPDATE_CURRENT_USER, IS_AUTHENTICATED, IS_LOADING, LOAD_CURRENT_USER_REQUEST, LOGIN_REQUEST } from "./constants";


export function  sagaUpdateCurrentUser(objUser){
    return{
        type: SAGA_LOG_IN,
        payload: objUser
    }
}
export function  sagaLogout(){
    return{
        type: SAGA_LOG_OUT,
        payload: null
    }
}
export function updateCurrentUser(user){
    return {
        type: UPDATE_CURRENT_USER,
        payload: user,
    }
}

export function updateIsLoading(isLoading){
    return {
        type: IS_LOADING,
        payload: isLoading,
    }
}

