import { combineReducers } from "redux";

const name = (state = "", action) => {
  return state;
};

const number = (state = "", action) => {
  return state;
};

export default combineReducers({
  name,
  number,
});
