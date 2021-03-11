import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDY1c-c7yNzCCDFDqyqF4949kDU9itAKk4",
  authDomain: "facebook-clone-f6155.firebaseapp.com",
  projectId: "facebook-clone-f6155",
  storageBucket: "facebook-clone-f6155.appspot.com",
  messagingSenderId: "1072493180118",
  appId: "1:1072493180118:web:179998a54db3de06098577",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
