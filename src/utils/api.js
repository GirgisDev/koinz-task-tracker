import firebase from './../firebase';

let API = {};

API.getInitialData = (cb) => {
  const tasksRef = firebase.database().ref('tasks');
  return tasksRef.once('value', snapshot => {
    cb(snapshot.val())
  });
}
API.updateTaskStatus = ({ id, status }, cb) => {
  firebase.database().ref(`tasks/${id}`).update({
    status
  }, error => {
    if (cb) cb(error);
  });
}
API.updateTaskDesc = ({ id, description }, cb) => {
  firebase.database().ref(`tasks/${id}`).update({
    description
  }, error => {
    if (cb) cb(error);
  });
}
API.addNewTask = (task, cb) => {
  let newTask = {...task};
  delete newTask.id;
  firebase.database().ref("tasks").push(newTask, error => {
    if (cb) cb(error);
  });
}
API.deleteTask = (id, cb) => {
  firebase.database().ref(`tasks/${id}`).remove(error => {
    if (cb) cb(error);
  });
}

export default API;