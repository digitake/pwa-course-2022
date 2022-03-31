import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


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

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default firebase;


