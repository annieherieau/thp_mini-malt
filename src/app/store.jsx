import { combineReducers } from "redux";
import { legacy_createStore } from "redux";
import userReducer from "../reducers/userReducer";
import skillsReducer from "../reducers/skillsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  skills: skillsReducer,
});

const store = legacy_createStore(rootReducer, getFromLocalStorage());
export default store;

// LOCALSTORAGE
function saveToLocalStorage(state) {
  localStorage.setItem('miniMalt_userData', JSON.stringify(state))
}

function getFromLocalStorage(){
  const savedSate = localStorage.getItem('miniMalt_userData');
  if (savedSate){
    return JSON.parse(savedSate)
  }
}

store.subscribe(() => saveToLocalStorage(store.getState()));