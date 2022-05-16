import { createStore } from "redux";

//初期値
const iniState = [];

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      //console.log([...state, action.payload]);
      return [...state, action.payload];
    case "ALLDELETE":
      return [];
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

export const store = createStore(reducer);
