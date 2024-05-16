import { combineReducers } from "redux";
import userReducer from "../features/user/userReducer";
import skillsReducer from "../features/skills/skillsReducer";
import { legacy_createStore } from "redux";

// LOCALSTORAGE
const key = "miniMalt_userData";
function saveToLocalStorage(state) {
  localStorage.setItem(key, JSON.stringify(state));
}

function getFromLocalStorage() {
  const savedSate = localStorage.getItem(key);
  if (savedSate) {
    return JSON.parse(savedSate);
  }
}

export function clearLocalStorage() {
  localStorage.removeItem(key);
}

// CREATE STORE
const rootReducer = combineReducers({
  user: userReducer,
  skills: skillsReducer,
});

const store = legacy_createStore(rootReducer, getFromLocalStorage());
export default store;

// enregistrement à chaque changement du store
store.subscribe(() => saveToLocalStorage(store.getState()));