import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import likedSongsReducer from "../reducers/likedSongsReducer";
import searchReducer from "../reducers/searchReducer";

const bigReducer = combineReducers({
  likedSongs: likedSongsReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
