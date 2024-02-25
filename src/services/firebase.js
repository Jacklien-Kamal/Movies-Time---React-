// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBeDuhEEOxnD-qW7yYSpgCYxgeBTv_UpJM",
  authDomain: "front-end-8c902.firebaseapp.com",
  projectId: "front-end-8c902",
  storageBucket: "front-end-8c902.appspot.com",
  messagingSenderId: "1078762487481",
  appId: "1:1078762487481:web:322774b26d7bab32eba568",
  measurementId: "G-QC96QZK2GC"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db= getFirestore(app)
export const auth=getAuth(app)
