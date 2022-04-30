import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyBTqVSZ7AOcVM5TG8lTYhp5FzGlray7iG4",
  authDomain: "nobrain-ead6f.firebaseapp.com",
  databaseURL: "https://nobrain-ead6f-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "nobrain-ead6f",
  storageBucket: "nobrain-ead6f.appspot.com",
  messagingSenderId: "622184282270",
  appId: "1:622184282270:web:aff8fb8ebc9c5f82d3e38f",
  measurementId: "G-8FX32GR6EH"
};

firebase.initializeApp(firebaseConfig);

export default firebase;