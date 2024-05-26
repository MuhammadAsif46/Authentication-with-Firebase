import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAg9-hPna4Ps2Pk8_5waAZn9HIWQqzWQ_A",
  authDomain: "crud-0peration.firebaseapp.com",
  projectId: "crud-0peration",
  storageBucket: "crud-0peration.appspot.com",
  messagingSenderId: "1044659935968",
  appId: "1:1044659935968:web:0fa1edab1808de3e72ce85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);