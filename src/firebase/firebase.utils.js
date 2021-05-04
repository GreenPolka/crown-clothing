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

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData


        })
      }catch(error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //setting up google authentication

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({propt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;