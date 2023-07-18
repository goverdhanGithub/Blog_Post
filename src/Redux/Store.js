import { createStore } from "redux";
import rootReducer from "./Reducer";

const store = createStore(
  //reducer
  rootReducer
);

export default store;
