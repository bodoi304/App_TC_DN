import { fromJS } from "immutable";
import { constants} from "./constants";
  
const initialState = fromJS({
    extracTextFromCamera: [],
})
export default (state = initialState, action) => {
    switch (action.type) {
        case constants.EXTRAC_TEXT_FROM_IMAGE:
            return state.set('extracTextFromCamera', action.payload.extracTextFromCamera);
    }
    return state;
}