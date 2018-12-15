import { createSelector } from "reselect";

const selectApplications = (state) => state.get('ApplicationPage');

export const makeSelectApplications = createSelector(
    selectApplications,
    (selectApplications) => {
        if (typeof selectApplications == "undefined") {
            return [];
        }
        return selectApplications.get('applications');
    }
)

export const makeSelectListInfo = createSelector(
    selectApplications,
    (selectApplications) => {
        if (typeof selectApplications == "undefined") {
            return {};
        }
        return selectApplications.get('listInfo');
    }
)
