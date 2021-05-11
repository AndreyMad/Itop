import { createStore } from "redux";
import reducer from "./Phonebook/reducer";
/* eslint-disable no-underscore-dangle */

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
