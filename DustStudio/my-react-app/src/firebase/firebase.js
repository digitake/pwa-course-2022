// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5pE-undz7JJtAb98MlJ1TvcR48kVxPMU",
  authDomain: "subchatapp.firebaseapp.com",
  projectId: "subchatapp",
  storageBucket: "subchatapp.appspot.com",
  messagingSenderId: "452856763161",
  appId: "1:452856763161:web:1c1b45dca468ca5339eb88",
  measurementId: "G-4BKQF68SP3",
  databaseURL: "https://subchatapp-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default firebase ;


