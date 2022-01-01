import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "todoapp-b01c8.firebaseapp.com",
  projectId: "todoapp-b01c8",
  storageBucket: "todoapp-b01c8.appspot.com",
  messagingSenderId: "64202861546",
  appId: "1:64202861546:web:bbc213bd556769c86ce093",
  measurementId: "G-RM7340P2M3",
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
