import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyAkvrvcbs1R9266hl2v7el5D6Jx5Synqz4",
  authDomain: "pwa-course-2022-e41d1.firebaseapp.com",
  projectId: "pwa-course-2022-e41d1",
  storageBucket: "pwa-course-2022-e41d1.appspot.com",
  messagingSenderId: "777472523857",
  appId: "1:777472523857:web:a19fe293c841782e2fc270",
  measurementId: "G-SLMYKDCL08",
  databaseURL: "https://pwa-course-2022-e41d1-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);

export default firebase;