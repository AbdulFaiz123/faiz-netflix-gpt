// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYLbj-fW6F3EcG_aSeSnkg4ELHkGyxie4",
  authDomain: "faiznetflixgpt.firebaseapp.com",
  projectId: "faiznetflixgpt",
  storageBucket: "faiznetflixgpt.appspot.com",
  messagingSenderId: "1081876489182",
  appId: "1:1081876489182:web:a167cee38a988b66a3f34f",
  measurementId: "G-72WJ81PX61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
