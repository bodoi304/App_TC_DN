import { takeEvery,takeLatest, call, put } from "redux-saga/effects";
import request from "../../utils/request";
import { getTKNoThue } from "./actions";
import {apiUrl}  from "../../constants/APIUrl";
import { constants} from "./constants";
import ToastEx from "../../components/Common/ToastEx";
import {updateIsLoading} from '../../globalReducer/action'
export function* doFetchGetTKNoThue(action) {
    const tkNopThue = action.payload.tkNopThue;
    try {
        var response = yield call(request, apiUrl.TRA_CUU_NO_THUE, JSON.stringify(tkNopThue));
        console.log( "response messs " + response);
        if (response.ThongBaoLoi !== "") {
            yield put(getTKNoThue(undefined));
        }
        else
       {
             yield put(getTKNoThue(response));
       }
       console.log(response)
        yield put(updateIsLoading(false));
      }
      catch(error) {
        yield put(updateIsLoading(false));
        console.log("error " + JSON.stringify(error));
      }
}


export default function* watchTraCuuNothue() {
    yield takeLatest(constants.SAGA_GET_LIST_TK_NO_THUE, doFetchGetTKNoThue);
}