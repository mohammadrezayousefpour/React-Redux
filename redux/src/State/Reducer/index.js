import { combineReducers } from "redux";
import AccountReducer from "./AccountReducer";

const reducers = combineReducers({
  account: AccountReducer,
});

export default reducers;
