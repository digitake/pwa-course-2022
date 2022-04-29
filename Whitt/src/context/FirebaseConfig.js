import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyBiRRiGM5iJQrojoOBheOMzuU_O0HG1y8s",
  authDomain: "pwa-course-2022-7e363.firebaseapp.com",
  projectId: "pwa-course-2022-7e363",
  storageBucket: "pwa-course-2022-7e363.appspot.com",
  messagingSenderId: "1059156620326",
  appId: "1:1059156620326:web:f94dc505f36976a23962e7",
  measurementId: "G-WGS9ZJ67L2"
};

firebase.initializeApp(firebaseConfig);

export default firebase;