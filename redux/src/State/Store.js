// import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducer";

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;
