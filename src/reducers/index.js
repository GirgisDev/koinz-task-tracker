import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading"

import tasks from "./tasks.reducer";

export default combineReducers({
  tasks,
  loadingBar: loadingBarReducer
})