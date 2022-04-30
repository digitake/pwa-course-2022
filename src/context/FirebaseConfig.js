import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyC3v8XpqrkVbwYfOzOWXrNEHd-FnXpFV-4",
  authDomain: "headachsat.firebaseapp.com",
  projectId: "headachsat",
  storageBucket: "headachsat.appspot.com",
  messagingSenderId: "628143028098",
  appId: "1:628143028098:web:d93338d821254def5a419b",
  databaseURL:"https://headachsat-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);

export default firebase;