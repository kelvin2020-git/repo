"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./components/scr/useRol.js":
/*!**********************************!*\
  !*** ./components/scr/useRol.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useRol; }\n/* harmony export */ });\n/* harmony import */ var C_Users_kelvi_Desktop_copia_para_vercel_strongconcrete_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_kelvi_Desktop_copia_para_vercel_strongconcrete_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_kelvi_Desktop_copia_para_vercel_strongconcrete_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _components_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/firebase/firebase-config */ \"./components/firebase/firebase-config.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction useRol() {\n    var setUserWithFirebaseAndRol = function setUserWithFirebaseAndRol(usuarioFirebase) {\n        getRol(usuarioFirebase.uid).then(function(rol) {\n            var userData = {\n                rol: rol\n            };\n            setUser(userData.rol);\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), usere = ref[0], setUser = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    function getRol(uid) {\n        return _getRol.apply(this, arguments);\n    }\n    function _getRol() {\n        _getRol = _asyncToGenerator(C_Users_kelvi_Desktop_copia_para_vercel_strongconcrete_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(uid) {\n            var docuRef, docuCifrada, infoFinal;\n            return C_Users_kelvi_Desktop_copia_para_vercel_strongconcrete_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        docuRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_components_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_5__.db, \"usuarios/\".concat(uid));\n                        _ctx.next = 3;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docuRef);\n                    case 3:\n                        docuCifrada = _ctx.sent;\n                        infoFinal = docuCifrada.data().rol;\n                        return _ctx.abrupt(\"return\", infoFinal);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _getRol.apply(this, arguments);\n    }\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_components_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_5__.auth, function(usuarioFirebase) {\n        if (usuarioFirebase) {\n            if (!user) {\n                setUserWithFirebaseAndRol(usuarioFirebase);\n            }\n        }\n    });\n    return usere;\n};\n_s(useRol, \"vvmsN4weXJ6Pi3sxmZU7MRF2n2U=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Njci91c2VSb2wuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDTztBQUNYO0FBQ1c7QUFDZ0I7O0FBR25ELFNBQVNRLE1BQU0sR0FBRztRQVVwQkMseUJBQXlCLEdBQWxDLFNBQVNBLHlCQUF5QixDQUFDQyxlQUFlLEVBQUU7UUFDbERDLE1BQU0sQ0FBQ0QsZUFBZSxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFNBQUNDLEdBQUcsRUFBSztZQUN4QyxJQUFNQyxRQUFRLEdBQUc7Z0JBRWZELEdBQUcsRUFBRUEsR0FBRzthQUVUO1lBQ0RFLE9BQU8sQ0FBQ0QsUUFBUSxDQUFDRCxHQUFHLENBQUMsQ0FBQztTQUV2QixDQUFDLENBQUM7S0FDSjs7SUFsQkQsSUFBeUJiLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFUM0MsS0FTZ0IsR0FBYUEsR0FBYyxHQUEzQixFQVRoQixPQVN5QixHQUFJQSxHQUFjLEdBQWxCO0lBQ3JCLElBQU1pQixNQUFNLEdBQUdmLHNEQUFTLEVBQUU7YUFDWFEsTUFBTSxDQUFDQyxHQUFHO2VBQVZELE9BQU07O2FBQU5BLE9BQU07UUFBTkEsT0FBTSxHQUFyQixxTUFBc0JDLEdBQUcsRUFBRTtnQkFDbkJPLE9BQU8sRUFDUEMsV0FBVyxFQUNYQyxTQUFTOzs7O3dCQUZURixPQUFPLEdBQUdmLHVEQUFHLENBQUNHLG9FQUFFLEVBQUUsV0FBVSxDQUFNLE9BQUpLLEdBQUcsQ0FBRSxDQUFDLENBQUM7OytCQUNqQlAsMERBQU0sQ0FBQ2MsT0FBTyxDQUFDOzt3QkFBbkNDLFdBQVcsWUFBd0I7d0JBQ25DQyxTQUFTLEdBQUdELFdBQVcsQ0FBQ0UsSUFBSSxFQUFFLENBQUNSLEdBQUcsQ0FBQztxREFDbENPLFNBQVM7Ozs7OztTQUNqQjtlQUxjVixPQUFNOztJQWlCckJULGlFQUFrQixDQUFDSSxzRUFBSSxFQUFFLFNBQUNJLGVBQWUsRUFBSztRQUM1QyxJQUFJQSxlQUFlLEVBQUU7WUFDbkIsSUFBSSxDQUFDYSxJQUFJLEVBQUU7Z0JBQ1RkLHlCQUF5QixDQUFDQyxlQUFlLENBQUMsQ0FBQzthQUM1QztTQUNGO0tBQ0YsQ0FBQztJQUNOLE9BQU9PLEtBQUs7Q0FFWDtHQTlCdUJULE1BQU07O1FBR1hMLGtEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2NyL3VzZVJvbC5qcz9jMWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7ICBkb2MsIGdldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHthdXRoLGRifSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9maXJlYmFzZS9maXJlYmFzZS1jb25maWdcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VSb2woKSB7XHJcblxyXG4gICAgY29uc3QgW3VzZXJlLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRSb2wodWlkKSB7XHJcbiAgICAgIGNvbnN0IGRvY3VSZWYgPSBkb2MoZGIsIGB1c3Vhcmlvcy8ke3VpZH1gKTtcclxuICAgICAgY29uc3QgZG9jdUNpZnJhZGEgPSBhd2FpdCBnZXREb2MoZG9jdVJlZik7XHJcbiAgICAgIGNvbnN0IGluZm9GaW5hbCA9IGRvY3VDaWZyYWRhLmRhdGEoKS5yb2w7XHJcbiAgICAgIHJldHVybiBpbmZvRmluYWw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRVc2VyV2l0aEZpcmViYXNlQW5kUm9sKHVzdWFyaW9GaXJlYmFzZSkge1xyXG4gICAgICBnZXRSb2wodXN1YXJpb0ZpcmViYXNlLnVpZCkudGhlbigocm9sKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSB7XHJcbiAgICBcclxuICAgICAgICAgIHJvbDogcm9sLFxyXG4gICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFVzZXIodXNlckRhdGEucm9sKTtcclxuICBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzdWFyaW9GaXJlYmFzZSkgPT4ge1xyXG4gICAgICBpZiAodXN1YXJpb0ZpcmViYXNlKSB7XHJcbiAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICBzZXRVc2VyV2l0aEZpcmViYXNlQW5kUm9sKHVzdWFyaW9GaXJlYmFzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG4gICAgfSlcclxucmV0dXJuIHVzZXJlXHJcblxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlUm91dGVyIiwiZG9jIiwiZ2V0RG9jIiwiYXV0aCIsImRiIiwidXNlUm9sIiwic2V0VXNlcldpdGhGaXJlYmFzZUFuZFJvbCIsInVzdWFyaW9GaXJlYmFzZSIsImdldFJvbCIsInVpZCIsInRoZW4iLCJyb2wiLCJ1c2VyRGF0YSIsInNldFVzZXIiLCJ1c2VyZSIsInJvdXRlciIsImRvY3VSZWYiLCJkb2N1Q2lmcmFkYSIsImluZm9GaW5hbCIsImRhdGEiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/scr/useRol.js\n");

/***/ })

});