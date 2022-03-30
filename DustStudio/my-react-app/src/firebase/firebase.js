// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoa4k85o9huOxyJtlaht0qTqcQ7nuC6gw",
  authDomain: "subchatapp2.firebaseapp.com",
  projectId: "subchatapp2",
  storageBucket: "subchatapp2.appspot.com",
  messagingSenderId: "1022955081594",
  appId: "1:1022955081594:web:249adf6af09288e6eed0c3",
  measurementId: "G-6FR6Z909XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export { firebase };


