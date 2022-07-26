import { initializeApp,getApps, } from "firebase/app";


import {
  getAuth,
 
  GoogleAuthProvider
} from "firebase/auth";




// Import the functions you need from the SDKs you need

import { getAnalytics, logEvent } from "firebase/analytics";
import {
  getFirestore,
  doc,
  setDoc,
  Firestore,
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





let analytics; let googleAuthProvider; let authh; let firebaseApp;let db;let firestore
if (typeof window !== "undefined" && !getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
  authh = getAuth(firebaseApp);
firestore = getFirestore( firebaseApp);

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
   firebaseApp,
   firestore,
 db,
  doc, //Referencia a documento en Firestore
  setDoc, // Setea Datos en la base de Firestore,
  collection,
  getDocs,
  addDoc,
  googleAuthProvider,
  analytics
}; 





