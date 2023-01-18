// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOOq4CyEWyRcFQsJDjEML2P61idLbYw-8",
  authDomain: "portfolio-8bd7a.firebaseapp.com",
  projectId: "portfolio-8bd7a",
  storageBucket: "portfolio-8bd7a.appspot.com",
  messagingSenderId: "1012575523627",
  appId: "1:1012575523627:web:5d93a97a7ae1875cdd2b6e",
  measurementId: "G-TYQK1F0X91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);