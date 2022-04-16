import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUCwV7tye5NypDVDo4vqrS2pndjL_TedI",
  authDomain: "donnieslists.firebaseapp.com",
  projectId: "donnieslists",
  storageBucket: "donnieslists.appspot.com",
  messagingSenderId: "408026499629",
  appId: "1:408026499629:web:87ffb7cd2dff18a89c86a4",
  measurementId: "G-YB32EQM08Y",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
