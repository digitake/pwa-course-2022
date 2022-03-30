import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyDOPJ9_X7MbrMXHkai922aLK2NVa7xbGjo",
  authDomain: "gi472-pwa-course-2022.firebaseapp.com",
  projectId: "gi472-pwa-course-2022",
  storageBucket: "gi472-pwa-course-2022.appspot.com",
  messagingSenderId: "967644458652",
  appId: "1:967644458652:web:6f71ad83773786006b8759",
  measurementId: "G-Z7Z74R200B",
  databaseURL: "https://gi472-pwa-course-2022-default-rtdb.asia-southeast1.firebasedatabase.app"
};

firebase.initializeApp(firebaseConfig);

export { firebase };