"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/firebase/firebase-config.js":
/*!************************************************!*\
  !*** ./components/firebase/firebase-config.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDoc\": function() { return /* reexport safe */ firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.addDoc; },\n/* harmony export */   \"authh\": function() { return /* binding */ authh; },\n/* harmony export */   \"collection\": function() { return /* reexport safe */ firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection; },\n/* harmony export */   \"db\": function() { return /* binding */ db; },\n/* harmony export */   \"doc\": function() { return /* reexport safe */ firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc; },\n/* harmony export */   \"firebaseApp\": function() { return /* binding */ firebaseApp; },\n/* harmony export */   \"getDocs\": function() { return /* reexport safe */ firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDocs; },\n/* harmony export */   \"googleAuthProvider\": function() { return /* binding */ googleAuthProvider; },\n/* harmony export */   \"setDoc\": function() { return /* reexport safe */ firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.setDoc; }\n/* harmony export */ });\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/firestore */ \"./node_modules/firebase/compat/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ \"./node_modules/firebase/compat/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/app */ \"./node_modules/firebase/compat/app/dist/index.esm.js\");\n/* harmony import */ var firebase_compat_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/analytics */ \"./node_modules/firebase/compat/analytics/dist/index.esm.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/analytics */ \"./node_modules/firebase/analytics/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\n\n\n// Import the functions you need from the SDKs you need\n\n\n\n// Import the functions you need from the SDKs you need\n\n\n// Your web app's Firebase configuration\nvar firebaseConfig = {\n    apiKey: \"AIzaSyBW4BkytN0_cFYzAk9a0ufSFMoAy4QiJpU\",\n    authDomain: \"proyecto2-4854e.firebaseapp.com\",\n    projectId: \"proyecto2-4854e\",\n    storageBucket: \"proyecto2-4854e.appspot.com\",\n    messagingSenderId: \"724845553486\",\n    appId: \"1:724845553486:web:a8518c1626be89fc6d201f\",\n    measurementId: \"G-VYBXPQJ48J\"\n};\n// Initialize Firebase\nvar app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_4__.initializeApp)(firebaseConfig);\nvar authh = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)(app);\nif (app.name && \"object\" !== \"undefined\") {\n    var analytics = (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_6__.getAnalytics)(app);\n    (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_6__.logEvent)(analytics, \"notification_received\");\n}\n// Access Firebase services using shorthand notation\nvar db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getFirestore)();\nvar googleAuthProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_5__.GoogleAuthProvider();\n// Initialize Firebase\nfunction firebaseApp() {\n    if (true) {\n        (0,firebase_app__WEBPACK_IMPORTED_MODULE_4__.initializeApp)(firebaseConfig);\n        console.log(\"Firebase has been init successfully\");\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZpcmViYXNlL2ZpcmViYXNlLWNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNMO0FBQ0Q7QUFDTTtBQUNuQyx1REFBdUQ7QUFDVjtBQUVNO0FBSVg7QUFFeEMsdURBQXVEO0FBRUs7QUFTaEM7QUFFNUIsd0NBQXdDO0FBR3hDLElBQU1XLGNBQWMsR0FBRztJQUNyQkMsTUFBTSxFQUFFLHlDQUF5QztJQUNqREMsVUFBVSxFQUFFLGlDQUFpQztJQUM3Q0MsU0FBUyxFQUFFLGlCQUFpQjtJQUM1QkMsYUFBYSxFQUFFLDZCQUE2QjtJQUM1Q0MsaUJBQWlCLEVBQUUsY0FBYztJQUNqQ0MsS0FBSyxFQUFFLDJDQUEyQztJQUNsREMsYUFBYSxFQUFFLGNBQWM7Q0FDOUI7QUFRQyxzQkFBc0I7QUFDdkIsSUFBTUMsR0FBRyxHQUFHbkIsMkRBQWEsQ0FBQ1csY0FBYyxDQUFDO0FBRXpDLElBQU1TLEtBQUssR0FBR2xCLHNEQUFPLENBQUNpQixHQUFHLENBQUM7QUFFekIsSUFBSUEsR0FBRyxDQUFDRSxJQUFJLElBQUksUUFBYSxLQUFLLFdBQVcsRUFBRTtJQUM5QyxJQUFNQyxTQUFTLEdBQUduQixnRUFBWSxDQUFDZ0IsR0FBRyxDQUFDO0lBQ2xDZiw0REFBUSxDQUFDa0IsU0FBUyxFQUFFLHVCQUF1QixDQUFDLENBQUM7Q0FDOUM7QUFFRCxvREFBb0Q7QUFDckQsSUFBTUMsRUFBRSxHQUFHbEIsZ0VBQVksRUFBRTtBQUN6QixJQUFNbUIsa0JBQWtCLEdBQUcsSUFBSXZCLDZEQUFrQixFQUFFO0FBS3BELHNCQUFzQjtBQUV0QixTQUFVd0IsV0FBVyxHQUFHO0lBQ3RCLElBQUksSUFBMkIsRUFBRTtRQUM3QnpCLDJEQUFhLENBQUNXLGNBQWMsQ0FBQyxDQUFDO1FBQzlCZ0IsT0FBTyxDQUFDQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztLQUN0RDtDQUNGO0FBb0JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZmlyZWJhc2UvZmlyZWJhc2UtY29uZmlnLmpzP2VmMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9jb21wYXQvYXV0aFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9jb21wYXQvYXBwXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2NvbXBhdC9hbmFseXRpY3NcIjtcclxuLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5cclxuaW1wb3J0IHsgR29vZ2xlQXV0aFByb3ZpZGVyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuXHJcblxyXG5cclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG4vLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcblxyXG5pbXBvcnQgeyBnZXRBbmFseXRpY3MsIGxvZ0V2ZW50IH0gZnJvbSBcImZpcmViYXNlL2FuYWx5dGljc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldEZpcmVzdG9yZSxcclxuICBkb2MsXHJcbiAgc2V0RG9jLFxyXG4gIFxyXG4gIGNvbGxlY3Rpb24sXHJcbiAgYWRkRG9jLFxyXG4gIGdldERvY3MsXHJcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxyXG5cclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lCVzRCa3l0TjBfY0ZZekFrOWEwdWZTRk1vQXk0UWlKcFVcIixcclxuICBhdXRoRG9tYWluOiBcInByb3llY3RvMi00ODU0ZS5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwicHJveWVjdG8yLTQ4NTRlXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJwcm95ZWN0bzItNDg1NGUuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI3MjQ4NDU1NTM0ODZcIixcclxuICBhcHBJZDogXCIxOjcyNDg0NTU1MzQ4Njp3ZWI6YTg1MThjMTYyNmJlODlmYzZkMjAxZlwiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1WWUJYUFFKNDhKXCJcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG4gY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbiAgXHJcbiBjb25zdCBhdXRoaCA9IGdldEF1dGgoYXBwKTtcclxuICBcclxuICBpZiAoYXBwLm5hbWUgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgY29uc3QgYW5hbHl0aWNzID0gZ2V0QW5hbHl0aWNzKGFwcCk7XHJcbiAgICBsb2dFdmVudChhbmFseXRpY3MsICdub3RpZmljYXRpb25fcmVjZWl2ZWQnKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gQWNjZXNzIEZpcmViYXNlIHNlcnZpY2VzIHVzaW5nIHNob3J0aGFuZCBub3RhdGlvblxyXG4gY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoKTtcclxuIGNvbnN0IGdvb2dsZUF1dGhQcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuIFxyXG5cclxuXHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcblxyXG5mdW5jdGlvbiAgZmlyZWJhc2VBcHAoKSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuICAgICAgY29uc29sZS5sb2coXCJGaXJlYmFzZSBoYXMgYmVlbiBpbml0IHN1Y2Nlc3NmdWxseVwiKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7XHJcbiAgXHJcbiAgYXV0aGgsXHJcbiAgZGIsXHJcbiAgZmlyZWJhc2VBcHAsXHJcbiAgZG9jLCAvL1JlZmVyZW5jaWEgYSBkb2N1bWVudG8gZW4gRmlyZXN0b3JlXHJcbiAgc2V0RG9jLCAvLyBTZXRlYSBEYXRvcyBlbiBsYSBiYXNlIGRlIEZpcmVzdG9yZSxcclxuICBjb2xsZWN0aW9uLFxyXG4gIGdldERvY3MsXHJcbiAgYWRkRG9jLFxyXG4gIGdvb2dsZUF1dGhQcm92aWRlcixcclxuXHJcbn07IFxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsIkdvb2dsZUF1dGhQcm92aWRlciIsImdldEF1dGgiLCJnZXRBbmFseXRpY3MiLCJsb2dFdmVudCIsImdldEZpcmVzdG9yZSIsImRvYyIsInNldERvYyIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJnZXREb2NzIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiYXV0aGgiLCJuYW1lIiwiYW5hbHl0aWNzIiwiZGIiLCJnb29nbGVBdXRoUHJvdmlkZXIiLCJmaXJlYmFzZUFwcCIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/firebase/firebase-config.js\n");

/***/ })

});