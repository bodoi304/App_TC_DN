import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import request from "../../utils/request";
import { getTKNoThue } from "./actions";
import { apiUrl } from "../../constants/APIUrl";
import { constants } from "./constants";
import { updateIsLoading } from '../../globalReducer/actions'
import { URL_METHOD } from '../../utils/constants'
export function* doExtracTextFromImage(action) {
    console.log('vaone')
    const extracTextFromCamera = action.payload.extracTextFromCamera
    try {
      
        let data =yield Expo.FileSystem.readDirectoryAsync(Expo.FileSystem.documentDirectory)
        yield Expo.FileSystem.moveAsync({
            from: extracTextFromCamera,
            to: `${Expo.FileSystem.documentDirectory}photos/${Date.now()}.jpg`,
          });
        console.log('daf' + JSON.stringify(data))
        // let data =yield Expo.FileSystem.readAsStringAsync(extracTextFromCamera.replace('file://',''))
        console.log('data' + data)
        let response = yield call(request, 'https://api.havenondemand.com/1/api/sync/ocrdocument/v1', extracTextFromCamera, URL_METHOD.form_data)
        console.log('response ne' + response)
        // yield put(getExtracTextFromImage(JSON.parse(response)));
        // yield put(updateIsLoading(false));
    }
    catch (error) {
        console.log(error)
        yield put(updateIsLoading(false));
    }
}


export default function* watchExtracTextFromImage() {
    yield takeEvery(constants.SAGA_EXTRAC_TEXT_FROM_IMAGE, doExtracTextFromImage);
}