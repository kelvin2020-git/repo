// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAnalytics, logEvent } from "firebase/analytics";
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";


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


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider(process.env.RECAPTCHA),
//   isTokenAutoRefreshEnabled: true,
// });

// Import the functions you need from the SDKs you need





// Import the functions you need from the SDKs you need



// Your web app's Firebase configuration













  
 
  
  if (app.name && typeof window !== 'undefined') {
   const analytics = getAnalytics(app);
    logEvent(analytics, 'notification_received');
  }
  
  // Access Firebase services using shorthand notation

 const googleAuthProvider = new GoogleAuthProvider();
 


 export { auth, db,  googleAuthProvider, };

// Initialize Firebase








 



