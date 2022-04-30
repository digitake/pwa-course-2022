import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyAj0J_6KwWhBr-3oVYTtiyd7R-m5h83TfE",
  authDomain: "gi472-pwa-2022.firebaseapp.com",
  projectId: "gi472-pwa-2022",
  storageBucket: "gi472-pwa-2022.appspot.com",
  messagingSenderId: "1098348466700",
  appId: "1:1098348466700:web:527db1237411fdcdd19429",
  measurementId: "G-89F3H8NPYL",
  databaseURL: "https://gi472-pwa-2022-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);

export default firebase;