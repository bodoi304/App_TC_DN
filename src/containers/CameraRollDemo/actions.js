import {constants} from "./constants";

export function  sagaExtracTextFromImage(byteImage){
    return{
        type: constants.SAGA_EXTRAC_TEXT_FROM_IMAGE,
        payload: {extracTextFromCamera: byteImage}
    }
}

export function  getExtracTextFromImage(byteImage){
    return{
        type: constants.EXTRAC_TEXT_FROM_IMAGE,
        payload: {extracTextFromCamera: byteImage}
    }
}

