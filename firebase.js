// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqlZ7pKywawVHL-osPpPki2XQ0XRIdDeE",
  authDomain: "undoc-98f38.firebaseapp.com",
  projectId: "undoc-98f38",
  storageBucket: "undoc-98f38.appspot.com",
  messagingSenderId: "1010424287140",
  appId: "1:1010424287140:web:e2446639e2ca9cadc1fb31",
  measurementId: "G-WXPVB7SMKD",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
var storage = firebase.storage();

export { auth, provider, firebase, storage };
export default db;
