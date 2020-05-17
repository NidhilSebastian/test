import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import * as Home from "./Home";
import * as App from "./App";
export default function configureStore(history, initialState) {
  const reducers = {
    home: Home.HomeReducer,
    app: App.AppReducer
  };

  const middleware = [thunk];

  const rootReducer = combineReducers({
    ...reducers
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}
