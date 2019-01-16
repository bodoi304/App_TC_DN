import { takeEvery,takeLatest, call, put } from "redux-saga/effects";
import request from "../../utils/request";
import { getTKNoThue } from "./actions";
import {apiUrl}  from "../../constants/APIUrl";
import { constants} from "./constants";
import {updateIsLoading} from '../../globalReducer/actions'
export function* doExtracTextFromImage(action) {
    console.log('vaone')
    const extracTextFromCamera = action.payload.extracTextFromCamera
    try {
        console.log('1111' + extracTextFromCamera)
        // var response = yield call(request, apiUrl.TRA_CUU_NO_THUE, JSON.stringify(tkNopThue));
        // yield put(getExtracTextFromImage(JSON.parse(response)));
        // yield put(updateIsLoading(false));
      }
      catch(error) {
        yield put(updateIsLoading(false));
      }
}


export default function* watchExtracTextFromImage() {
    yield takeEvery(constants.SAGA_EXTRAC_TEXT_FROM_IMAGE, doExtracTextFromImage);
}