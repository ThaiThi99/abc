// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6jrfajGLlrI6IO_9TPsO2KEbpJNGXmv0",
  authDomain: "thaidoanthi-99.firebaseapp.com",
  projectId: "thaidoanthi-99",
  storageBucket: "thaidoanthi-99.appspot.com",
  messagingSenderId: "877857301653",
  appId: "1:877857301653:web:ecbcde04672c8d45dc279c",
  measurementId: "G-NWG359N8SQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
