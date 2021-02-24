import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDuIDmsL0Ud9C-gtVjXhBUi-5yr4d9RjeQ",
    authDomain: "eemil-vaha.firebaseapp.com",
    databaseURL: "https://eemil-vaha-default-rtdb.firebaseio.com",
    projectId: "eemil-vaha",
    storageBucket: "eemil-vaha.appspot.com",
    messagingSenderId: "550165672646",
    appId: "1:550165672646:web:99ffc349af606f8dc31dc7",
    measurementId: "G-NQE3GLRN3H"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }