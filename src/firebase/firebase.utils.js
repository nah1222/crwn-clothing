import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/firestore";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyCXwsmATy2ps_SONw5pyw7kDyx19xi5Mrg",
  authDomain: "crwn-db-60e7c.firebaseapp.com",
  projectId: "crwn-db-60e7c",
  storageBucket: "crwn-db-60e7c.appspot.com",
  messagingSenderId: "758332469198",
  appId: "1:758332469198:web:2c6f17e70c13cc1690c59f",
};

// Initialize Firebase
initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
  //triggers google popup whenever use google auth provider for auth and sign in
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => 
signInWithPopup(auth, provider);

export default firebase;
