import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import request from "../../utils/request";
import { constants } from "./constants";
import { updateIsLoading } from '../../globalReducer/actions'
import {getExtracTextFromImage} from './actions'
import { URL_METHOD } from '../../utils/constants'
export function* doExtracTextFromImage(action) {
    console.log('vaone')
    const extracTextFromCamera = action.payload.extracTextFromCamera
    try {
        let response = yield call(request, 'https://api.havenondemand.com/1/api/sync/ocrdocument/v1', extracTextFromCamera, URL_METHOD.form_data)
        console.log('return data ' + JSON.stringify(response))
        let data= response.text_block
        if (data.length > 0) {
            yield put(getExtracTextFromImage(data[0].text));
        }
        else
        {
            yield put(getExtracTextFromImage('không trích xuất được'));
        }

       
        yield put(updateIsLoading(false));
    }
    catch (error) {
        console.log(error)
        yield put(updateIsLoading(false));
    }
}


export default function* watchExtracTextFromImage() {
    yield takeLatest(constants.SAGA_EXTRAC_TEXT_FROM_IMAGE, doExtracTextFromImage);
}