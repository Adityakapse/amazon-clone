import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4wmYIKmHNPtfkJuzmP8vSjDz6Q6SD1Q0",
  authDomain: "clone-7e1c7.firebaseapp.com",
  projectId: "clone-7e1c7",
  storageBucket: "clone-7e1c7.appspot.com",
  messagingSenderId: "570444648300",
  appId: "1:570444648300:web:c1dd181ae290814e13ed49",
  measurementId: "G-VHMY00PETL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
