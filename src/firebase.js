// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnDZ3USawcZKY5dONbc-yPPqM4e68yATA",
  authDomain: "clone-715e0.firebaseapp.com",
  projectId: "clone-715e0",
  storageBucket: "clone-715e0.appspot.com",
  messagingSenderId: "1093459992152",
  appId: "1:1093459992152:web:bdb262723faa1a8ac1b42d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { db, auth };
