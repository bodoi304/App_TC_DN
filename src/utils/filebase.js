import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBqPquHEY7Vts3jula6anfC5vGrFLvi5hY",
    authDomain: "appttdn.firebaseapp.com",
    databaseURL: "https://appttdn.firebaseio.com",
    projectId: "appttdn",
    storageBucket: "appttdn.appspot.com",
    messagingSenderId: "465898639300"
  };
 export default firebaseApp = firebase.initializeApp(config);