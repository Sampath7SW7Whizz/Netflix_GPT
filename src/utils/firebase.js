// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvtetYKjZiGLChzWOhl28CxUWTDCmpjWw",
  authDomain: "netflixgpt-ef2b7.firebaseapp.com",
  projectId: "netflixgpt-ef2b7",
  storageBucket: "netflixgpt-ef2b7.appspot.com",
  messagingSenderId: "758859017964",
  appId: "1:758859017964:web:94314683b4e3608828bfc9",
  measurementId: "G-J0SXRP9VE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();