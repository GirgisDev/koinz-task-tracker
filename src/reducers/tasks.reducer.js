import { 
  ADD_TASK, UPDATE_TASK_DESC, 
  UPDATE_TASK_STATUS, DELETE_TASK, 
  RECEIVE_TASKS 
} from "../actions/tasks.action";

export default function tasks(state = [], action) {
  switch (action.type) {
    case RECEIVE_TASKS:
      return [...action.tasks];
    case ADD_TASK:
      return state.concat([action.task]);
    case UPDATE_TASK_STATUS:
      return state.map(task => task.id !== action.id ? task :
        Object.assign({}, task, { status: action.status }));
    case UPDATE_TASK_DESC:
      return state.map(task => task.id !== action.id ? task :
        Object.assign({}, task, { description: action.description }));
    case DELETE_TASK:
      return state.filter(task => task.id !== action.id);
    default:
      return state;
  }
}