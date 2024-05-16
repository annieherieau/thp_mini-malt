import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { legacy_createStore } from "redux";
import userReducer from "../reducers/userReducer";
import skillsReducer from "../reducers/skillsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  skills: skillsReducer,
});

const store = legacy_createStore(rootReducer);
export default store;
