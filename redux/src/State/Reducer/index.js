import { combineReducers } from "redux";
import AccountReducer from "./AccountReducer";
import UserReducer from "./UserReducer";

const reducers = combineReducers({
  account: AccountReducer,
  users: UserReducer,
});

export default reducers;
