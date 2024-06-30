// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFNa0dl6yJD6zyvd-RiSYWNi9FKaL2_G8",
  authDomain: "game4youwebsite.firebaseapp.com",
  projectId: "game4youwebsite",
  storageBucket: "game4youwebsite.appspot.com",
  messagingSenderId: "777190935459",
  appId: "1:777190935459:web:7ba4459227e37d2c6d6816",
  measurementId: "G-T74E5FFE5N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
