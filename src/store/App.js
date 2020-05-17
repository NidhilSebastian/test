import { AppInitialState } from "./initialState";

export const actionCreators = {
  loginUser: (username, password) => async (dispatch, getState) => {
    console.log(username, password);
    if(username === "username" && password === "password"){
      dispatch({type: "LOGIN", data: username});
      return true;
    }
    return false;
  },
  logoutUser: () => async (dispatch, getState) => {
    dispatch({type: "LOGOUT", data: null});
  }
};

export const AppReducer = (state = AppInitialState, action) => {
  switch (action.type) {
    case "LOGIN":
        sessionStorage.setItem("user", action.data);
        return { ...state, user: action.data };
    case "LOGOUT":
      sessionStorage.removeItem("user");
      return { ...state, user: null };
    default:
      return { ...state, errorMessage: null };
  }
};
