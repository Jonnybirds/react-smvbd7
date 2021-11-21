import firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyA18Wq0RZjGr1YmgGGQxSHI4P3DOkYrW8A",
  authDomain: "tinder-clone-6ebde.firebaseapp.com",
  projectId: "tinder-clone-6ebde",
  storageBucket: "tinder-clone-6ebde.appspot.com",
  messagingSenderId: "656215649128",
  appId: "1:656215649128:web:40c57c6d2a82f78158c4dd",
  measurementId: "G-HN9ER9KNGZ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default database;