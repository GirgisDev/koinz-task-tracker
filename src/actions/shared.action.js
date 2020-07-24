import API from "../utils/api";
import { receiveTasks } from "./tasks.action";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return API.getInitialData(tasks => {
      let tasksArray = Object.keys(tasks).map(id => ({ ...tasks[id], id }));
      dispatch(receiveTasks(tasksArray));
      dispatch(hideLoading())
    })
  }
}