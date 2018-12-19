import { takeLatest, takeEvery, put } from "redux-saga/effects";
import { SAGA_LOG_IN, SAGA_LOG_OUT } from "./constants";
import { updateCurrentUser } from './actions'
import { AsyncStorage } from "react-native"
export function* doLogin(action) {
    try {        
        console.log('saga ' + action.payload.maDN)
        yield put(updateCurrentUser(action.payload));
        yield put(updateIsLoading(false));
    } catch (error) {

    }

}

export function* doLogout(action) {
    const maDN = yield AsyncStorage.clear()
    yield put(updateCurrentUser(null));
    yield put(updateIsLoading(false));


}


export default function* watchLogin() {
    yield takeLatest(SAGA_LOG_IN, doLogin);
    yield takeLatest(SAGA_LOG_OUT, doLogout);
}