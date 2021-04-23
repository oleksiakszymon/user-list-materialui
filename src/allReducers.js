import { combineReducers } from "redux";
import usersListReducer from "./user-data/reducers/usersListReducer";
import selectedUserReducer from "./user-data/reducers/selectedUserReducer";
import commentsReducer from "./user-data/reducers/commentsReducer";
import postsReducer from "./user-data/reducers/postsReducer";
const allReducers = combineReducers({
  usersListReducer,
  selectedUserReducer,
  commentsReducer,
  postsReducer,
});

export default allReducers;
