import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/app";
import "firebase/compat/analytics";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { GoogleAuthProvider } from "firebase/auth";



import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need

import { getAnalytics, logEvent } from "firebase/analytics";
import {
  getFirestore,
  doc,
  setDoc,
  
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyBW4BkytN0_cFYzAk9a0ufSFMoAy4QiJpU",
  authDomain: "proyecto2-4854e.firebaseapp.com",
  projectId: "proyecto2-4854e",
  storageBucket: "proyecto2-4854e.appspot.com",
  messagingSenderId: "724845553486",
  appId: "1:724845553486:web:a8518c1626be89fc6d201f",
  measurementId: "G-VYBXPQJ48J"
};





let analytics; let db; let googleAuthProvider;let authh;let firebaseApp;
if (firebaseConfig?.projectId) {
  // Initialize Firebase
  firebaseApp = initializeApp(firebaseConfig);
  
  authh = getAuth(firebaseApp);
  
  if (firebaseApp.name && typeof window !== 'undefined') {
    analytics = getAnalytics(firebaseApp);
    logEvent(analytics, 'notification_received');
  }
  
  // Access Firebase services using shorthand notation
  db = getFirestore();
  googleAuthProvider = new GoogleAuthProvider();
  }



// Initialize Firebase









export {
  
  authh,
  db,
  firebaseApp,
  doc, //Referencia a documento en Firestore
  setDoc, // Setea Datos en la base de Firestore,
  collection,
  getDocs,
  addDoc,
  googleAuthProvider,
  analytics
}; 



