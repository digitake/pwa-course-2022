// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1LUaFVO9IYL7ZEjuIS37Gl92YFWHA8Tk",
  authDomain: "chatapp-9a769.firebaseapp.com",
  projectId: "chatapp-9a769",
  storageBucket: "chatapp-9a769.appspot.com",
  messagingSenderId: "231416433394",
  appId: "1:231416433394:web:49300a27e041653697de6b",
  measurementId: "G-CQTTW25ERL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
