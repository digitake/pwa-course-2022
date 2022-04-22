import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyDq-DWuipU39S7rRarmqHwgxik2sKUBF50",
  authDomain: "t-textapp-pwa-coures-2022.firebaseapp.com",
  databaseURL: "https://t-textapp-pwa-coures-2022-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "t-textapp-pwa-coures-2022",
  storageBucket: "t-textapp-pwa-coures-2022.appspot.com",
  messagingSenderId: "1091787927953",
  appId: "1:1091787927953:web:60d434cdb7b616fc22aa30",
  measurementId: "G-56T6M8L6FQ"
};

firebase.initializeApp(firebaseConfig);

export { firebase };