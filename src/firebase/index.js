import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBGyJkQGWvhzUlz-O2uWSzbC1SG2jHyb2k",
    authDomain: "projekt-polanki.firebaseapp.com",
    projectId: "projekt-polanki",
    storageBucket: "projekt-polanki.appspot.com",
    messagingSenderId: "144677360704",
    appId: "1:144677360704:web:ebb6fe7cfc3627518cfba5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
