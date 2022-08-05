/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/firebase/firebase-config.js":
/*!************************************************!*\
  !*** ./components/firebase/firebase-config.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"googleAuthProvider\": () => (/* binding */ googleAuthProvider)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_analytics__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_analytics__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n\n\n// import { initializeAppCheck, ReCaptchaV3Provider } from \"firebase/app-check\";\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBW4BkytN0_cFYzAk9a0ufSFMoAy4QiJpU\",\n    authDomain: \"proyecto2-4854e.firebaseapp.com\",\n    projectId: \"proyecto2-4854e\",\n    storageBucket: \"proyecto2-4854e.appspot.com\",\n    messagingSenderId: \"724845553486\",\n    appId: \"1:724845553486:web:a8518c1626be89fc6d201f\",\n    measurementId: \"G-VYBXPQJ48J\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)();\n// const appCheck = initializeAppCheck(app, {\n//   provider: new ReCaptchaV3Provider(process.env.RECAPTCHA),\n//   isTokenAutoRefreshEnabled: true,\n// });\n// Import the functions you need from the SDKs you need\n// Import the functions you need from the SDKs you need\n// Your web app's Firebase configuration\nif (app.name && \"undefined\" !== \"undefined\") {}\n// Access Firebase services using shorthand notation\nconst googleAuthProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\n // Initialize Firebase\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZpcmViYXNlL2ZpcmViYXNlLWNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXVEO0FBQ1Y7QUFDTDtBQUNVO0FBQ0M7QUFDUztBQUM1RCxnRkFBZ0Y7QUFHaEYsd0NBQXdDO0FBR3hDLE1BQU1NLGNBQWMsR0FBRztJQUNyQkMsTUFBTSxFQUFFLHlDQUF5QztJQUNqREMsVUFBVSxFQUFFLGlDQUFpQztJQUM3Q0MsU0FBUyxFQUFFLGlCQUFpQjtJQUM1QkMsYUFBYSxFQUFFLDZCQUE2QjtJQUM1Q0MsaUJBQWlCLEVBQUUsY0FBYztJQUNqQ0MsS0FBSyxFQUFFLDJDQUEyQztJQUNsREMsYUFBYSxFQUFFLGNBQWM7Q0FDOUI7QUFDRCxzQkFBc0I7QUFDdEIsTUFBTUMsR0FBRyxHQUFHZCwyREFBYSxDQUFDTSxjQUFjLENBQUM7QUFDekMsTUFBTVMsSUFBSSxHQUFHZCxzREFBTyxFQUFFO0FBQ3RCLE1BQU1lLEVBQUUsR0FBR2QsZ0VBQVksRUFBRTtBQUN6Qiw2Q0FBNkM7QUFDN0MsOERBQThEO0FBQzlELHFDQUFxQztBQUNyQyxNQUFNO0FBRU4sdURBQXVEO0FBTXZELHVEQUF1RDtBQUl2RCx3Q0FBd0M7QUFpQnRDLElBQUlZLEdBQUcsQ0FBQ0csSUFBSSxJQUFJLFdBQWEsS0FBSyxXQUFXLEVBQUUsRUFHOUM7QUFFRCxvREFBb0Q7QUFFckQsTUFBTUUsa0JBQWtCLEdBQUcsSUFBSWhCLDZEQUFrQixFQUFFO0FBSVQsQ0FFM0Msc0JBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Ryb25nY29uY3JldGUvLi9jb21wb25lbnRzL2ZpcmViYXNlL2ZpcmViYXNlLWNvbmZpZy5qcz9lZjA1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgR29vZ2xlQXV0aFByb3ZpZGVyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgZ2V0QW5hbHl0aWNzLCBsb2dFdmVudCB9IGZyb20gXCJmaXJlYmFzZS9hbmFseXRpY3NcIjtcclxuLy8gaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcENoZWNrLCBSZUNhcHRjaGFWM1Byb3ZpZGVyIH0gZnJvbSBcImZpcmViYXNlL2FwcC1jaGVja1wiO1xyXG5cclxuXHJcbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cclxuXHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5Qlc0Qmt5dE4wX2NGWXpBazlhMHVmU0ZNb0F5NFFpSnBVXCIsXHJcbiAgYXV0aERvbWFpbjogXCJwcm95ZWN0bzItNDg1NGUuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcInByb3llY3RvMi00ODU0ZVwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwicHJveWVjdG8yLTQ4NTRlLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNzI0ODQ1NTUzNDg2XCIsXHJcbiAgYXBwSWQ6IFwiMTo3MjQ4NDU1NTM0ODY6d2ViOmE4NTE4YzE2MjZiZTg5ZmM2ZDIwMWZcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctVllCWFBRSjQ4SlwiXHJcbn07XHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKCk7XHJcbi8vIGNvbnN0IGFwcENoZWNrID0gaW5pdGlhbGl6ZUFwcENoZWNrKGFwcCwge1xyXG4vLyAgIHByb3ZpZGVyOiBuZXcgUmVDYXB0Y2hhVjNQcm92aWRlcihwcm9jZXNzLmVudi5SRUNBUFRDSEEpLFxyXG4vLyAgIGlzVG9rZW5BdXRvUmVmcmVzaEVuYWJsZWQ6IHRydWUsXHJcbi8vIH0pO1xyXG5cclxuLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcclxuXHJcblxyXG5cclxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBcclxuIFxyXG4gIFxyXG4gIGlmIChhcHAubmFtZSAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICBjb25zdCBhbmFseXRpY3MgPSBnZXRBbmFseXRpY3MoYXBwKTtcclxuICAgIGxvZ0V2ZW50KGFuYWx5dGljcywgJ25vdGlmaWNhdGlvbl9yZWNlaXZlZCcpO1xyXG4gIH1cclxuICBcclxuICAvLyBBY2Nlc3MgRmlyZWJhc2Ugc2VydmljZXMgdXNpbmcgc2hvcnRoYW5kIG5vdGF0aW9uXHJcblxyXG4gY29uc3QgZ29vZ2xlQXV0aFByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gXHJcblxyXG5cclxuIGV4cG9ydCB7IGF1dGgsIGRiLCAgZ29vZ2xlQXV0aFByb3ZpZGVyLCB9O1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiBcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwiZ2V0RmlyZXN0b3JlIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZ2V0QW5hbHl0aWNzIiwibG9nRXZlbnQiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJhdXRoIiwiZGIiLCJuYW1lIiwiYW5hbHl0aWNzIiwiZ29vZ2xlQXV0aFByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/firebase/firebase-config.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/auth.context */ \"./store/auth.context.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_auth_context__WEBPACK_IMPORTED_MODULE_3__]);\n_store_auth_context__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store_auth_context__WEBPACK_IMPORTED_MODULE_3__.AuthContextProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://fonts.googleapis.com/css?family=Roboto|Varela+Round\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kelvi\\\\Desktop\\\\copia para vercel\\\\strongconcrete\\\\pages\\\\_app.js\",\n                            lineNumber: 16,\n                            columnNumber: 5\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://fonts.googleapis.com/icon?family=Material+Icons\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kelvi\\\\Desktop\\\\copia para vercel\\\\strongconcrete\\\\pages\\\\_app.js\",\n                            lineNumber: 18,\n                            columnNumber: 1\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kelvi\\\\Desktop\\\\copia para vercel\\\\strongconcrete\\\\pages\\\\_app.js\",\n                            lineNumber: 19,\n                            columnNumber: 1\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"user-scalable=no, width=device-width, initial-scale=1\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kelvi\\\\Desktop\\\\copia para vercel\\\\strongconcrete\\\\pages\\\\_app.js\",\n                            lineNumber: 20,\n                            columnNumber: 1\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\kelvi\\\\Desktop\\\\copia para vercel\\\\strongconcrete\\\\pages\\\\_app.js\",\n                    lineNumber: 15,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kelvi\\\\Desktop\\\\copia para vercel\\\\strongconcrete\\\\pages\\\\_app.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kelvi\\\\Desktop\\\\copia para vercel\\\\strongconcrete\\\\pages\\\\_app.js\",\n            lineNumber: 14,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFBNEI7QUFFRTtBQUM4QjtBQUc1RCxTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUd2QyxxQkFDRTtrQkFDQSw0RUFBQ0gsb0VBQW1COzs4QkFDcEIsOERBQUNELGtEQUFJOztzQ0FDTCw4REFBQ0ssTUFBSTs0QkFBQ0MsR0FBRyxFQUFDLFlBQVk7NEJBQUNDLElBQUksRUFBQyw2REFBNkQ7Ozs7O2dDQUFFO3NDQUUvRiw4REFBQ0YsTUFBSTs0QkFBQ0MsR0FBRyxFQUFDLFlBQVk7NEJBQUNDLElBQUksRUFBQyx5REFBeUQ7Ozs7O2dDQUFFO3NDQUN2Riw4REFBQ0YsTUFBSTs0QkFBQ0MsR0FBRyxFQUFDLFlBQVk7NEJBQUNDLElBQUksRUFBQyw2RUFBNkU7Ozs7O2dDQUFFO3NDQUMzRyw4REFBQ0MsTUFBSTs0QkFBQ0MsSUFBSSxFQUFDLFVBQVU7NEJBQUNDLE9BQU8sRUFBQyx1REFBdUQ7Ozs7O2dDQUFFOzs7Ozs7d0JBRTFFOzhCQUNQLDhEQUFDUCxTQUFTO29CQUFFLEdBQUdDLFNBQVM7Ozs7O3dCQUFJOzs7Ozs7Z0JBRU47cUJBQ25CLENBQ0w7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJvbmdjb25jcmV0ZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vc3RvcmUvYXV0aC5jb250ZXh0JztcclxuXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPEF1dGhDb250ZXh0UHJvdmlkZXI+XHJcbiAgICA8SGVhZD5cclxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b3xWYXJlbGErUm91bmRcIi8+XHJcblxyXG48bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIi8+XHJcbjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIvPlxyXG48bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwidXNlci1zY2FsYWJsZT1ubywgd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIi8+XHJcblxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICBcclxuICAgICAgPC9BdXRoQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiSGVhZCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxpbmsiLCJyZWwiLCJocmVmIiwibWV0YSIsIm5hbWUiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/auth.context.js":
/*!*******************************!*\
  !*** ./store/auth.context.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": () => (/* binding */ AuthContextProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/firebase/firebase-config */ \"./components/firebase/firebase-config.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);\n([_components_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst initialUser = null;\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    user: initialUser,\n    loading: true\n});\nfunction AuthContextProvider({ children  }) {\n    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let unsubscribe;\n        unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(_components_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_2__.auth, (user)=>{\n            setUser(user);\n            setLoading(false);\n        });\n        return unsubscribe;\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user: user1,\n            loading\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kelvi\\\\Desktop\\\\copia para vercel\\\\strongconcrete\\\\store\\\\auth.context.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9hdXRoLmNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFpRTtBQUNIO0FBQ0w7QUFFekQsTUFBTU8sV0FBVyxHQUFJLElBQUk7QUFFekIsTUFBTUMsV0FBVyxpQkFBR1Asb0RBQWEsQ0FBQztJQUNoQ1EsSUFBSSxFQUFFRixXQUFXO0lBQ2pCRyxPQUFPLEVBQUUsSUFBSTtDQUNkLENBQUM7QUFFSyxTQUFTQyxtQkFBbUIsQ0FBQyxFQUFDQyxRQUFRLEdBQUMsRUFBRTtJQUU5QyxNQUFNLEVBYlIsR0FhU0gsS0FBSSxHQWJiLEdBYWVJLE9BQU8sTUFBSVYsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEMsTUFBTSxFQWRSLEdBY1NPLE9BQU8sR0FkaEIsR0Fja0JJLFVBQVUsTUFBSVgsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFFNUNELGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUlhLFdBQVc7UUFFZkEsV0FBVyxHQUFHVixpRUFBa0IsQ0FBQ0Qsc0VBQUksRUFBRSxDQUFDSyxJQUFJLEdBQUs7WUFDL0NJLE9BQU8sQ0FBQ0osSUFBSSxDQUFDLENBQUM7WUFDZEssVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25CLENBQUMsQ0FBQztRQUVILE9BQU9DLFdBQVcsQ0FBQztLQUNwQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNQLFdBQVcsQ0FBQ1EsUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBQ1IsSUFBSSxFQUFKQSxLQUFJO1lBQUVDLE9BQU87U0FBQztrQkFDekNFLFFBQVE7Ozs7O1lBQ1ksQ0FDeEI7Q0FDRjtBQUVELGlFQUFlSixXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJvbmdjb25jcmV0ZS8uL3N0b3JlL2F1dGguY29udGV4dC5qcz8yMjZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9jb21wb25lbnRzL2ZpcmViYXNlL2ZpcmViYXNlLWNvbmZpZyc7XHJcbmltcG9ydCB7IG9uQXV0aFN0YXRlQ2hhbmdlZCwgVXNlciB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xyXG5cclxuY29uc3QgaW5pdGlhbFVzZXIgID0gbnVsbDtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgdXNlcjogaW5pdGlhbFVzZXIsXHJcbiAgbG9hZGluZzogdHJ1ZVxyXG59KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhDb250ZXh0UHJvdmlkZXIoe2NoaWxkcmVufSkge1xyXG5cclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB1bnN1YnNjcmliZTtcclxuXHJcbiAgICB1bnN1YnNjcmliZSA9IG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xyXG4gICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB1bnN1YnNjcmliZTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3t1c2VyLCBsb2FkaW5nfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiVXNlciIsImluaXRpYWxVc2VyIiwiQXV0aENvbnRleHQiLCJ1c2VyIiwibG9hZGluZyIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldFVzZXIiLCJzZXRMb2FkaW5nIiwidW5zdWJzY3JpYmUiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/auth.context.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/analytics":
/*!*************************************!*\
  !*** external "firebase/analytics" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/analytics");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();