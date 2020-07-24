import firebase from 'firebase'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCj1NSgoxQSsXen0BhmVMz0zhY4omzSIdQ",
  authDomain: "koinz-tasks-tracker.firebaseapp.com",
  databaseURL: "https://koinz-tasks-tracker.firebaseio.com",
  projectId: "koinz-tasks-tracker",
  storageBucket: "koinz-tasks-tracker.appspot.com",
  messagingSenderId: "206119381242",
  appId: "1:206119381242:web:e1313e8a677598c8dec143",
  measurementId: "G-CVWFB0QZWW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;