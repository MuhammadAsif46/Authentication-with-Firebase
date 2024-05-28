import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAg9-hPna4Ps2Pk8_5waAZn9HIWQqzWQ_A",
  authDomain: "crud-0peration.firebaseapp.com",
  projectId: "crud-0peration",
  storageBucket: "crud-0peration.appspot.com",
  messagingSenderId: "1044659935968",
  appId: "1:1044659935968:web:0fa1edab1808de3e72ce85",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
}
