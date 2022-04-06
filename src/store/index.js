import { createStore } from "redux";

//初期値は空配列
const reducer = (state = []) => {
  return state;
};

export const store = createStore(reducer);
