import { createStore } from "redux";

//初期値
const iniState = {};

const reducer = (state = iniState) => {
  return state;
};

export const store = createStore(reducer);
