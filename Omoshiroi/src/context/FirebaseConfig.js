import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAIQuzEOHI_KbewWnxSp8OpqtOikUi9VMU",
  authDomain: "omoshiroi-chat-app.firebaseapp.com",
  projectId: "omoshiroi-chat-app",
  storageBucket: "omoshiroi-chat-app.appspot.com",
  messagingSenderId: "484948044989",
  appId: "1:484948044989:web:bc8643f367a2fb50349bd4",
  measurementId: "G-N6MXPPLRW6",
  databaseURL: "https://omoshiroi-chat-app-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);

export default firebase;