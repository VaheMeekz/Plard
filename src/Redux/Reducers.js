import { productReducer } from "./productReducer";
import { combineReducers, createStore } from "redux";

let reducers = combineReducers({
  productR: productReducer,
});

let store = createStore(reducers);

export default store;
