import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./Reducer";

const store = configureStore({
  reducer: reducers,
  middleware: applyMiddleware(thunk),
});

export default store;
