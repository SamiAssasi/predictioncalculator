import { combineReducers, createStore } from "redux";
import peopleReducer from "./ducks/people";

const reducer = combineReducers({
  people: peopleReducer
});

const store = createStore(
  reducer
);

export default store;
