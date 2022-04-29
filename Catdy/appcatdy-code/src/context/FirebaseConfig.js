import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyBcneg16uoSljaeeH7I6JMlaHX4MKhCVO0",
  authDomain: "catdy-f8461.firebaseapp.com",
  projectId: "catdy-f8461",
  storageBucket: "catdy-f8461.appspot.com",
  messagingSenderId: "1012936595776",
  appId: "1:1012936595776:web:31f21884d7420a2d7602a5",
  measurementId: "G-EFFE09SC71",
  databaseURL:"https://catdy-f8461-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);

export default firebase;