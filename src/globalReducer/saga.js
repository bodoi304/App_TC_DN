import { takeLatest,takeEvery, put } from "redux-saga/effects";
import { SAGA_LOG_IN, SAGA_LOG_OUT} from "./constants";
import { updateCurrentUser } from './globalReducer/actions'
import { AsyncStorage } from "react-native"
export function* doLogin(action) {
    const maDN = await AsyncStorage.getItem("madn")
    if (maDN !== null) {
        await AsyncStorage.setItem("madn", action.payload.maDN)
    }
    yield put(updateCurrentUser(maDN));
    yield put(updateIsLoading(false));
   

}

export function* doLogout(action) {
    const maDN = await AsyncStorage.getItem("madn")
    if (maDN !== null) {
        await AsyncStorage.setItem("madn", null)
    }
    yield put(updateCurrentUser(null));
    yield put(updateIsLoading(false));
   

}


export default function* watchLogin() {
    yield takeLatest(constants.SAGA_LOG_IN, doLogin);
    yield takeLatest(constants.SAGA_LOG_OUT, doLogin);
}