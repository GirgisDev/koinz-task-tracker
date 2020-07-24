import firebase from './../firebase';

let API = {};

API.getInitialData = (cb) => {
  const tasksRef = firebase.database().ref('tasks');
  return tasksRef.on('value', snapshot => {
    cb(snapshot.val())
  });
}
API.updateTaskStatus = ({id, status}, cb) => {
  firebase.database().ref(`tasks/${id}`).update({
    status
  }, error => {
    if (cb) cb(error);
  });
}

export default API;