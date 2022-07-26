
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



function firebaseApp() {
  if (typeof window !== undefined) {
      initializeApp(firebaseConfig);
      console.log("Firebase has been init successfully");
  }
}

const app = initializeApp(firebaseConfig);




  
 const authh = getAuth(app);
  
  if (app.name && typeof window !== 'undefined') {
   const analytics = getAnalytics(app);
    logEvent(analytics, 'notification_received');
  }
  
  // Access Firebase services using shorthand notation
 const db = getFirestore();
 const googleAuthProvider = new GoogleAuthProvider();
 



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

}; 



