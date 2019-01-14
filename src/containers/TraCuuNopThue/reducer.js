import { fromJS } from "immutable";
import { constants} from "./constants";
  
const initialState = fromJS({
    tkNopThue: {},
})
export default (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_LIST_TK_NO_THUE:
            return state.set('tkNopThue', action.payload.tkNopThue);
    }
    return state;
}