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
const addTask = task => {
  return {
    type: ADD_TASK,
    task
  }
}
const updateTaskStatus = ({id, status})=> {
  return {
    type: UPDATE_TASK_STATUS,
    status,
    id
  }
}
const updateTaskDesc = ({id, description}) => {
  return {
    type: UPDATE_TASK_DESC,
    description,
    id
  }
}
const deleteTask = id => {
  return {
    type: DELETE_TASK,
    id
  }
}


export const handleAddNewTask = task => dispatch => {
  dispatch(addTask(task));
  
  return API.addNewTask(task, error => {
    if (error) {
      dispatch(deleteTask(task.id));
      alert("An error occured. Try again!");
    } else {
      API.getInitialData(tasks => {
        let tasksArray = Object.keys(tasks).map(id => ({ ...tasks[id], id }));
        dispatch(receiveTasks(tasksArray));
      })
    }
  });
}

export const handleUpdateTaskStatus = ({task, status}) => dispatch => {
  dispatch(updateTaskStatus({id: task.id, status}));
  
  return API.updateTaskStatus(({ id: task.id, status }), error => {
    if (error) {
      dispatch(updateTaskStatus({id: task.id, status: task.status}));
      alert("An error occured. Try again!")
    }
  });
}

export const handleUpdateTaskDescription = ({task, description}) => dispatch => {
  dispatch(updateTaskDesc({id: task.id, description}));
  
  return API.updateTaskDesc(({ id: task.id, description }), error => {
    if (error) {
      dispatch(updateTaskDesc({id: task.id, description: task.description}));
      alert("An error occured. Try again!")
    }
  });
}

export const handleDeleteTask = task => dispatch => {
  dispatch(deleteTask(task.id));
  
  return API.deleteTask(task.id, error => {
    if (error) {
      dispatch(addTask(task));
      alert("An error occured. Try again!")
    }
  });
}