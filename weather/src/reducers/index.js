import counterReducer from "./counter.js";
import { combineReducers } from "redux";
// This file is made to maitain all of the combineReducers

// alt definition just putting "counterReducer" if counterReducer: counterReducer
const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
