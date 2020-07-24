import API from "../utils/api";

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK_STATUS = "UPDATE_TASK_STATUS";
export const UPDATE_TASK_DESC = "UPDATE_TASK_DESC";
export const RECEIVE_TASKS = "RECEIVE_TASKS";


export function receiveTasks(tasks) {
  return {
    type: RECEIVE_TASKS,
    tasks
  }
}
export const addTask = (task) => {
  return {
    type: ADD_TASK,
    task
  }
}
const updateTaskStatus = (task) => {
  return {
    type: UPDATE_TASK_STATUS,
    id: task.id,
    status: task.status
  }
}
export const updateTaskDesc = (task) => {
  return {
    type: UPDATE_TASK_STATUS,
    id: task.id,
    desc: task.desc
  }
}
export const deleteTask = (id) => {
  return {
    type: UPDATE_TASK_STATUS,
    id
  }
}

export const handleupdateTaskStatus = task => dispatch => {
  dispatch(updateTaskStatus(task));

  return API.updateTaskStatus(task, error => {
    if (error) alert("An error occured. Try again!")
  });
}