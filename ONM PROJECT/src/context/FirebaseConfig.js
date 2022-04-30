import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyCQQVUxl8XSDUEKBCfnzUrKrfApvu1z8c4",
  authDomain: "onenightmiracle-chat-app.firebaseapp.com",
  projectId: "onenightmiracle-chat-app",
  storageBucket: "onenightmiracle-chat-app.appspot.com",
  messagingSenderId: "855328875311",
  appId: "1:855328875311:web:dd62402009c268b5b8f7da",
  measurementId: "G-NTMY8499V9",
  databaseURL: "https://onenightmiracle-chat-app-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);

export default firebase;