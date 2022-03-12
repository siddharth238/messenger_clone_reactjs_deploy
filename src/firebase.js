 
  import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDeuX6GAl4ymRMmzZgiyUnTHYrA6yc9IcA",
  authDomain: "messenger-clone-43df1.firebaseapp.com",
  projectId: "messenger-clone-43df1",
  storageBucket: "messenger-clone-43df1.appspot.com",
  messagingSenderId: "783087090751",
  appId: "1:783087090751:web:d9ce5a3185469ff0884c8a",
  measurementId: "G-HQGDPTE93Y"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };