import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyBE3Covv_AB07IySCgUf-WfURT5ykjpu0Y",
  authDomain: "redtalog.firebaseapp.com",
  databaseURL: "https://redtalog-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "redtalog",
  storageBucket: "redtalog.appspot.com",
  messagingSenderId: "517911671411",
  appId: "1:517911671411:web:1eacc9c7e5acb20309f006",
  measurementId: "G-NJY5XQ22Q8"
};

firebase.initializeApp(firebaseConfig);

export default firebase;