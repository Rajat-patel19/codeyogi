/** @format */

import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import { groupReducer } from "./reducers/groups.reducers";
import { userReducer } from "./reducers/users.reducer";
import { authReducer } from "./reducers/auth.reducer";

export const UI_SIDEBAR_TOGGLE = "ui/sidebar_toggle";

const reducer = combineReducers({
     auth: authReducer,
     users: userReducer,
     groups: groupReducer,
});

export const store = createStore(
     reducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
);

type AppState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
