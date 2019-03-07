import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyC5iRhdi8gosvGIfjTcdoVlN27Yw7e3yxw",
  authDomain: "react-redx-project-planner-app.firebaseapp.com",
  databaseURL: "https://react-redx-project-planner-app.firebaseio.com",
  projectId: "react-redx-project-planner-app",
  storageBucket: "react-redx-project-planner-app.appspot.com",
  messagingSenderId: "440992077274"
};
firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
