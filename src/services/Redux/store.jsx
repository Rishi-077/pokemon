import { combineReducers } from "redux";
import LabelSlice from "./LabelSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  sidebar: LabelSlice
});

export const store =  configureStore({
  reducer: rootReducer
})