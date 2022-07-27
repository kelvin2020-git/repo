"use strict";
exports.id = 166;
exports.ids = [166];
exports.modules = {

/***/ 5166:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ auth),
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* unused harmony export googleAuthProvider */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9500);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_analytics__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_analytics__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need





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
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)();
// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider(process.env.RECAPTCHA),
//   isTokenAutoRefreshEnabled: true,
// });
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
// Your web app's Firebase configuration
if (app.name && "undefined" !== "undefined") {}
// Access Firebase services using shorthand notation
const googleAuthProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();
 // Initialize Firebase

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;