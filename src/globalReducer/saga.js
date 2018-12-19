import { takeLatest,takeEvery, put } from "redux-saga/effects";
import { SAGA_LOG_IN, SAGA_LOG_OUT} from "./constants";
import { updateCurrentUser } from './action'
import { AsyncStorage } from "react-native"
export function* doLogin(action) {
    const maDN = yield  AsyncStorage.getItem("madn")
    if (maDN !== null) {
        yield  AsyncStorage.setItem("madn", action.payload.maDN)
    }
    yield put(updateCurrentUser(maDN));
    yield put(updateIsLoading(false));
   

}

export function* doLogout(action) {
    const maDN = yield AsyncStorage.getItem("madn")
    if (maDN !== null) {
        yield AsyncStorage.setItem("madn", null)
    }
    yield put(updateCurrentUser(null));
    yield put(updateIsLoading(false));
   

}


export default function* watchLogin() {
    yield takeLatest(constants.SAGA_LOG_IN, doLogin);
    yield takeLatest(constants.SAGA_LOG_OUT, doLogin);
}