import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "./user";

const reducer = combineReducers({
  user: user,
});

const store = configureStore({ reducer });

export default store;
