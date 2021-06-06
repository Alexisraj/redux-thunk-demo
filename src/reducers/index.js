import { combineReducers } from "redux";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  userStore: userReducer,
});

export default rootReducer;
