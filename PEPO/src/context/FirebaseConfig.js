import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyBbV-ylXxyCpiRoqdsQrcGvl_4oXOXgKUM",
  authDomain: "pepo-chatapp.firebaseapp.com",
  projectId: "pepo-chatapp",
  storageBucket: "pepo-chatapp.appspot.com",
  messagingSenderId: "747155268732",
  appId: "1:747155268732:web:8823c94d1e5c0db1f595f9",
  measurementId: "G-FH1NT5L9G9",
  databaseURL: "https://pepo-chatapp-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);

export default firebase;