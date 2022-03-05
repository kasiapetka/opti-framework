import * as actionTypes from "../actions/types";

const initialState = {
  username: "inny",
};

const setUsername = (state, action) => {
  return { ...state, username: "huj" };
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SETUSERNAME:
      return setUsername(state, action);
    default:
      return state;
  }
};

export default gameReducer;
