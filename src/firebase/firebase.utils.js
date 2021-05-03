import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCuiLbdd74FglypWkkZk2rVjIzopartzIA",
    authDomain: "crown-db-30f04.firebaseapp.com",
    projectId: "crown-db-30f04",
    storageBucket: "crown-db-30f04.appspot.com",
    messagingSenderId: "287068415391",
    appId: "1:287068415391:web:95c9bedaf9bc76d010c9aa",
    measurementId: "G-1MTEQEGJGX"
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //setting up google authentication

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({propt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;