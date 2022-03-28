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
  apiKey: "AIzaSyA1pI8V_9cJA7nzst3-zWMEpTsrKGXtYo4",
  authDomain: "facebook-clone-9da5c.firebaseapp.com",
  projectId: "facebook-clone-9da5c",
  storageBucket: "facebook-clone-9da5c.appspot.com",
  messagingSenderId: "1039081168861",
  appId: "1:1039081168861:web:626d6529c82c3a3852a034",
  measurementId: "G-PEPXQ8601F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
