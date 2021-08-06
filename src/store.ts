/** @format */

import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { Group } from "./models/Group";
import { User } from "./models/User";

const ME_FETCH = "me/fetch";
export const UI_SIDEBAR_TOGGLE = "ui/sidebar_toggle";

export interface AppState {
     me?: User;
     isSidebarOpen: boolean;

     groupQuery: string;
     groupQueryMap: { [keyword: string]: number[] };
     groups: { [id: number]: Group };
}

const initialState: AppState = {
     me: undefined, 
     isSidebarOpen: true,

     groupQuery: "",
     groupQueryMap: {},
     groups: {},
};

const reducer: Reducer<AppState> = (
     currentState = initialState,
     dispatchedAction: AnyAction
) => {
     switch (dispatchedAction.type) {
          case ME_FETCH:
          case "me/login":
               return { ...currentState, me: dispatchedAction.payload };
          case UI_SIDEBAR_TOGGLE:
               return {
                    ...currentState,
                    isSidebarOpen: dispatchedAction.payload,
               };
          case "groups/query":
               return { ...currentState, groupQuery: dispatchedAction.payload };
          case "groups/query_completed":
               const groups = dispatchedAction.payload.groups as Group[];
               const groupIds = groups.map((g) => g.id);

               const groupMap = groups.reduce((prev, group) => {
                    return { ...prev, [group.id]: group };
               }, {});

               return {
                    ...currentState,
                    groupQueryMap: {
                         ...currentState.groupQueryMap,
                         [dispatchedAction.payload.query]: groupIds,
                    },
                    groups: { ...currentState.groups, ...groupMap },
               };
          default:
               return currentState;
     }
};

export const store = createStore(
     reducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const meFetchAction = (u: User) => ({ type: ME_FETCH, payload: u });

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const uiSideBarToggle = (open: boolean) => ({
     type: UI_SIDEBAR_TOGGLE,
     payload: open,
});
