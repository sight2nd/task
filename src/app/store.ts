import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { createHashHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
// import counterReducer from "../features/counter/counterSlice";
import { userReduser } from "../reducers/userReducer";
import { loginUser } from "../reducers/loginUserReducer";

export const history = createHashHistory();

const reducer = combineReducers({
  router: connectRouter(history),
  user: userReduser,
  loginUser: loginUser,
});

export const store = configureStore({
  reducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ serializableCheck: false }).concat(routerMiddleware(history));
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
