import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyCeAydaQ1-Si1nzjumN-tGs-ou6A1v-ktQ",
  authDomain: "universeapp-85fa5.firebaseapp.com",
  projectId: "universeapp-85fa5",
  storageBucket: "universeapp-85fa5.appspot.com",
  messagingSenderId: "922332840842",
  appId: "1:922332840842:web:28bf15036825e55af77e73",
  measurementId: "G-BBZ2FD4YMR",
  databaseURL:"https://universeapp-85fa5-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

