import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB5iv_-f3RayKrkJxqzmAOsTtVxBYPJZ1M",
    authDomain: "ataverna-2f924.firebaseapp.com",
    databaseURL: "https://ataverna-2f924-default-rtdb.firebaseio.com",
    projectId: "ataverna-2f924",
    storageBucket: "ataverna-2f924.appspot.com",
    messagingSenderId: "245044737010",
    appId: "1:245044737010:web:aa6a24c5570d5c4bf6f16b",
    measurementId: "G-KDM3SGV0S9"
  };

  firebase.initializeApp(firebaseConfig);

//   var database = firebase.database();
  export default firebase;