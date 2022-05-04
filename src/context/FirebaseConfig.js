import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyBfcGF63KNvF8wPXVV_zxv4NnkLBbscIGU",
  authDomain: "pwa-229k.firebaseapp.com",
  databaseURL: "https://pwa-229k-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pwa-229k",
  storageBucket: "pwa-229k.appspot.com",
  messagingSenderId: "210441919022",
  appId: "1:210441919022:web:34d69fd9aefea52f065dbf",
  measurementId: "G-72VMGLD7EL"
};


firebase.initializeApp(firebaseConfig);

export default firebase;