// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI61BXG1i1vJnzAnI8j1QCaKtkzqGO1Yk",
  authDomain: "todo-react-sammad.firebaseapp.com",
  projectId: "todo-react-sammad",
  storageBucket: "todo-react-sammad.appspot.com",
  messagingSenderId: "747009647338",
  appId: "1:747009647338:web:5e082e224b543ecc9d2d93",
  measurementId: "G-2E4VZH18TL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//auth
const auth = getAuth(app);

export { db, auth };

