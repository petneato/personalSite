// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUR1WvAVAnXHDDNc6wIfTXLButso4Ftos",
  authDomain: "personal-site-c4cfa.firebaseapp.com",
  projectId: "personal-site-c4cfa",
  storageBucket: "personal-site-c4cfa.appspot.com",
  messagingSenderId: "1035588778866",
  appId: "1:1035588778866:web:d05a15c88a239705b87beb",
  measurementId: "G-Q73PLXNZM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);