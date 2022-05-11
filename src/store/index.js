import { createStore } from "redux";

//初期値
const iniState = [];

const reducer = (state = iniState, action) => {
  switch (action.type) {
    case "ADD":
      return action.payload;
    case "ALLDELETE":
      return {
        count: state.count - 1
      };
    case "DELETE":
      return {
        count: state.count - 1
      };
    case "EDIT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
