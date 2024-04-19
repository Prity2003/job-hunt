// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMV8A-wNSKRMNwp_Wfnel28wXGiSF4gCo",
  authDomain: "jobhunt-d85e5.firebaseapp.com",
  projectId: "jobhunt-d85e5",
  storageBucket: "jobhunt-d85e5.appspot.com",
  messagingSenderId: "300114423037",
  appId: "1:300114423037:web:4c73e52177dfd9592ca294",
  measurementId: "G-6M54Z2CZ97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
export { auth, app, firestore };


