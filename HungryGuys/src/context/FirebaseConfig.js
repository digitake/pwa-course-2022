import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAbGUUN1EIzmUjZib7CP94YEpdRofrU-tY",
  authDomain: "pwa-course-2022-b587d.firebaseapp.com",
  projectId: "pwa-course-2022-b587d",
  storageBucket: "pwa-course-2022-b587d.appspot.com",
  messagingSenderId: "570911055165",
  appId: "1:570911055165:web:fe9905ca223acbbb8cf954",
  measurementId: "G-84V9YCY74M",
  databaseURL: "https://pwa-course-2022-b587d-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);

export default firebase;