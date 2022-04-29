import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyD2_17pS7vQGnRmlbhxr7AkJ9Or3q4Y1mw",
  authDomain: "pwa-chat-app-2414c.firebaseapp.com",
  projectId: "pwa-chat-app-2414c",
  storageBucket: "pwa-chat-app-2414c.appspot.com",
  messagingSenderId: "925836885998",
  appId: "1:925836885998:web:28fc64e9280e6cc732d8ff",
  measurementId: "G-4WWJEHYT66",
  databaseURL: "https://pwa-chat-app-2414c-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);

export { firebase };

