/** @format */

import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selectors";

// export const groupQuerySelector = (state: AppState) => {
//      const groupState = groupStateSelector(state);
//      return groupState.query;
// };

export const groupQuerySelector = createSelector(
     [groupStateSelector],
     (groupState) => groupState.query
);

export const groupQueryMapSelector = createSelector(
     [groupStateSelector],
     (groupState) => groupState.queryMap
);

const groupByIdSelector = createSelector(
     [groupStateSelector],
     (groupState) => groupState.byId
);

export const groupQueryLoadingSelector = createSelector(
     [groupStateSelector],
     (groupState) => groupState.loadingQuery
);

export const groupLoadingSelector = createSelector(
     [groupQuerySelector, groupQueryLoadingSelector],
     (query, loadingMap) => loadingMap[query]
);

export const groupsSelector = createSelector(
     [groupQuerySelector, groupByIdSelector, groupQueryMapSelector],
     (query, byId, queryMap) => {
          const groupsIds = queryMap[query] || [];
          const groups = groupsIds.map((id) => byId[id]);
          return groups;
     }
);

// export const groupsSelector = (state: AppState) => {
//      const query = groupQuerySelector(state);

//      const queryMap = groupQueryMapSelector(state);
//      const groupsIds = queryMap[query] || [];

//      const byId = groupByIdSelector(state);
//      const groups = groupsIds.map((id) => byId[id]);
//      return groups;
// };
