import { takeLatest, takeEvery, put } from "redux-saga/effects";
import { SAGA_LOG_IN, SAGA_LOG_OUT } from "./constants";
import { updateCurrentUser } from './actions'
import {  updateIsLoading } from '../../globalReducer/actions'
import { AsyncStorage } from "react-native"
export function* doLogin(action) {
    try {
        yield put(updateCurrentUser(action.payload));
        yield put(updateIsLoading(false));
    } catch (error) {
        console.log(error)
    }

}

export function* doLogout(action) {
    try {
        const maDN = yield AsyncStorage.clear()
        yield put(updateCurrentUser(null));
        yield put(updateIsLoading(false));
    } catch (error) {
        console.log(error)
    }

}


export default function* watchLogin() {
    yield takeLatest(SAGA_LOG_IN, doLogin);
    yield takeLatest(SAGA_LOG_OUT, doLogout);
}