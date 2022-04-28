import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyCU2cMaqeOv6LgPldnSZ5dLmmmZpq1lWxg",
  authDomain: "groupworkgi472lmp.firebaseapp.com",
  projectId: "groupworkgi472lmp",
  storageBucket: "groupworkgi472lmp.appspot.com",
  messagingSenderId: "248943627682",
  appId: "1:248943627682:web:53e0ae0208475591ce36fb",
  databaseURL: "https://groupworkgi472lmp-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);

export default firebase;