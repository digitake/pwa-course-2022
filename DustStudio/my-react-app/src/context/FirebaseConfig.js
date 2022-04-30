import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCoa4k85o9huOxyJtlaht0qTqcQ7nuC6gw",
  authDomain: "subchatapp2.firebaseapp.com",
  databaseURL: "https://subchatapp2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "subchatapp2",
  storageBucket: "subchatapp2.appspot.com",
  messagingSenderId: "1022955081594",
  appId: "1:1022955081594:web:249adf6af09288e6eed0c3",
  measurementId: "G-6FR6Z909XT"
};


const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default firebase;


