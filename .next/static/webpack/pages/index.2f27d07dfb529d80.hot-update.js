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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        firstName: \"\",\n        username: \"\"\n    });\n    const CheckLogin = ()=>{\n        console.log(formData.firstName);\n        console.log(formData);\n        if (formData.username !== null) {\n            router.push({\n                pathname: \"./counter\",\n                query: {\n                    username: formData.username\n                }\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Welcome to NextJs. Sign in to continue\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"First name:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"first\",\n                        name: \"first\",\n                        pattern: \"[A-Z]{1}[a-z]{2-10}\",\n                        title: \"The first letter should be capital\",\n                        onChange: (e)=>setFormData({\n                                ...formData,\n                                firstName: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Username:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"username\",\n                        name: \"username\",\n                        required: true,\n                        title: \"The first letter should be capital\",\n                        minLength: \"5\",\n                        maxLength: \"10\",\n                        onChange: (e)=>setFormData({\n                                ...formData,\n                                username: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        onClick: ()=>CheckLogin(),\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"NrTMsxb3P6GxPFzXo3zghYiJjgg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBT01BO0FBUHNCO0FBQ0U7QUFFZ0I7QUFDZDtBQUNPO0FBSXhCLFNBQVNNLE9BQU87O0lBRTdCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUV4QixNQUFNLENBQUNHLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUU7UUFDeENNLFdBQVU7UUFDVkMsVUFBUztJQUNYO0lBRUEsTUFBTUMsYUFBYSxJQUFNO1FBQ3ZCQyxRQUFRQyxHQUFHLENBQUNOLFNBQVNFLFNBQVM7UUFDOUJHLFFBQVFDLEdBQUcsQ0FBQ047UUFFWixJQUFJQSxTQUFTRyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzlCSixPQUFPUSxJQUFJLENBQUM7Z0JBQ1ZDLFVBQVU7Z0JBQ1ZDLE9BQU87b0JBQ0xOLFVBQVVILFNBQVNHLFFBQVE7Z0JBQzdCO1lBQ0Y7UUFDRixDQUFDO0lBQ0g7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNWLGtEQUFJQTs7a0NBQ0gsOERBQUNpQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDQztnQkFBS0MsV0FBV3ZCLHFFQUFXOztrQ0FDeEIsOERBQUN3QjtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBT0MsSUFBRzt3QkFBUVgsTUFBSzt3QkFBUVksU0FBUTt3QkFBc0JkLE9BQU07d0JBQXFDZSxVQUFXQyxDQUFBQSxJQUFLekIsWUFBWTtnQ0FBQyxHQUFHRCxRQUFRO2dDQUFFRSxXQUFXd0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzRCQUFBOzs7Ozs7a0NBR3ZMLDhEQUFDUjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBT0MsSUFBRzt3QkFBV1gsTUFBSzt3QkFBV2lCLFFBQVE7d0JBQUNuQixPQUFNO3dCQUFxQ29CLFdBQVU7d0JBQUlDLFdBQVU7d0JBQUlOLFVBQVdDLENBQUFBLElBQUt6QixZQUFZO2dDQUFDLEdBQUdELFFBQVE7Z0NBQUVHLFVBQVV1QixFQUFFQyxNQUFNLENBQUNDLEtBQUs7NEJBQUE7Ozs7OztrQ0FFbk0sOERBQUNJO3dCQUFPVixNQUFLO3dCQUFTVyxTQUFTLElBQU03QjtrQ0FBYzs7Ozs7Ozs7Ozs7Ozs7QUFLN0QsQ0FBQztHQTlDdUJOOztRQUVQRCxrREFBU0E7OztLQUZGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSW50ZXIsIExpZmVfU2F2ZXJzLCBMb3ZlcnNfUXVhcnJlbCB9IGZyb20gJ0BuZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSAoe1xuICAgIGZpcnN0TmFtZTonJyxcbiAgICB1c2VybmFtZTonJ1xuICB9KVxuXG4gIGNvbnN0IENoZWNrTG9naW4gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coZm9ybURhdGEuZmlyc3ROYW1lKVxuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKVxuXG4gICAgaWYgKGZvcm1EYXRhLnVzZXJuYW1lICE9PSBudWxsKSB7XG4gICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiAnLi9jb3VudGVyJyxcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICB1c2VybmFtZTogZm9ybURhdGEudXNlcm5hbWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICA8aDE+V2VsY29tZSB0byBOZXh0SnMuIFNpZ24gaW4gdG8gY29udGludWU8L2gxPlxuICAgICAgICAgIDxsYWJlbD5GaXJzdCBuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaXJzdFwiIG5hbWU9XCJmaXJzdFwiIHBhdHRlcm49XCJbQS1aXXsxfVthLXpdezItMTB9XCIgdGl0bGU9XCJUaGUgZmlyc3QgbGV0dGVyIHNob3VsZCBiZSBjYXBpdGFsXCIgb25DaGFuZ2U9eyhlID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgZmlyc3ROYW1lOiBlLnRhcmdldC52YWx1ZX0pKX0vPlxuICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgPGxhYmVsPlVzZXJuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIHJlcXVpcmVkIHRpdGxlPVwiVGhlIGZpcnN0IGxldHRlciBzaG91bGQgYmUgY2FwaXRhbFwiIG1pbkxlbmd0aD1cIjVcIiBtYXhMZW5ndGg9XCIxMFwib25DaGFuZ2U9eyhlID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlfSkpfS8+XG5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoKSA9PiBDaGVja0xvZ2luKCl9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIFxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkhvbWUiLCJyb3V0ZXIiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZmlyc3ROYW1lIiwidXNlcm5hbWUiLCJDaGVja0xvZ2luIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwYXR0ZXJuIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});