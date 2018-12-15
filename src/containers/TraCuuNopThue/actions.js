import {constants} from "./constants";

export function  sagaGetTKNoThue(objTimKiem){
    return{
        type: constants.SAGA_GET_LIST_TK_NO_THUE,
        payload: {tkNopThue: objTimKiem}
    }
}

export function  getTKNoThue(objTK){
    return{
        type: constants.GET_LIST_TK_NO_THUE,
        payload: {tkNopThue: objTK}
    }
}

