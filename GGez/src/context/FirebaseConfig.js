import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyDwSP3slJXBpFfpUFWuJORhiVpAy0AQ-2k",
  authDomain: "pwa-course-2022-dc369.firebaseapp.com",
  projectId: "pwa-course-2022-dc369",
  storageBucket: "pwa-course-2022-dc369.appspot.com",
  messagingSenderId: "302265842146",
  appId: "1:302265842146:web:b54e27474e822e873761bb",
  measurementId: "G-NZHVLKRM8B",
  databaseURL:"https://pwa-course-2022-dc369-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);

export default firebase;