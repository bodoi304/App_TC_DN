import { takeEvery,takeLatest, call, put } from "redux-saga/effects";
import request from "../../utils/request";
import { getTKNoThue } from "./actions";
import {apiUrl}  from "../../constants/APIUrl";
import { constants} from "./constants";
import {updateIsLoading} from '../../globalReducer/actions'
import {URL_METHOD} from '../../utils/constants'
export function* doFetchGetTKNoThue(action) {
    const tkNopThue = action.payload.tkNopThue;
    try {
        var response = yield call(request, apiUrl.TRA_CUU_NO_THUE, JSON.stringify(tkNopThue),URL_METHOD.post );
        yield put(getTKNoThue(JSON.parse(response)));
        yield put(updateIsLoading(false));
      }
      catch(error) {
        yield put(getTKNoThue({
            ThongBaoLoi: '1'
        }));
        yield put(updateIsLoading(false));
      }
}


export default function* watchTraCuuNothue() {
    yield takeLatest(constants.SAGA_GET_LIST_TK_NO_THUE, doFetchGetTKNoThue);
}