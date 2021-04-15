import { combineReducers } from "redux";
import usersDataReducer from "./user-data/reducers/usersDataReducer";
import selectedUserReducer from "./user-data/reducers/selectedUserReducer";
const allReducers = combineReducers({
  usersDataReducer,
  selectedUserReducer,
});

export default allReducers;
