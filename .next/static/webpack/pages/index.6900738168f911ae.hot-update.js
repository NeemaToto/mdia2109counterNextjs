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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        firstName: \"\",\n        username: \"\"\n    });\n    const CheckLogin = ()=>{\n        console.log(formData.firstName);\n        console.log(formData);\n        if (formData.username !== null) {\n            router.push({\n                pathname: \"./counter\",\n                query: {\n                    username: formData.username\n                }\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"First name:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"first\",\n                            name: \"first\",\n                            pattern: \"[A-Z]{1}[a-z]{2-10}\",\n                            title: \"The first letter should be capital\",\n                            onChange: (e)=>setFormData({\n                                    ...formData,\n                                    firstName: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Username:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"username\",\n                            name: \"username\",\n                            required: true,\n                            title: \"The first letter should be capital\",\n                            minLength: \"5\",\n                            maxLength: \"10\",\n                            onChange: (e)=>setFormData({\n                                    ...formData,\n                                    username: e.target.value\n                                })\n                        }, void 0, false, {\n                            fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            onClick: ()=>CheckLogin(),\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ntotonchi1/Desktop/mdia2109counterNextjs/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"NrTMsxb3P6GxPFzXo3zghYiJjgg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBT01BO0FBUHNCO0FBQ0U7QUFFZ0I7QUFDZDtBQUNPO0FBSXhCLFNBQVNNLE9BQU87O0lBRTdCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUV4QixNQUFNLENBQUNHLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUU7UUFDeENNLFdBQVU7UUFDVkMsVUFBUztJQUNYO0lBRUEsTUFBTUMsYUFBYSxJQUFNO1FBQ3ZCQyxRQUFRQyxHQUFHLENBQUNOLFNBQVNFLFNBQVM7UUFDOUJHLFFBQVFDLEdBQUcsQ0FBQ047UUFFWixJQUFJQSxTQUFTRyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzlCSixPQUFPUSxJQUFJLENBQUM7Z0JBQ1ZDLFVBQVU7Z0JBQ1ZDLE9BQU87b0JBQ0xOLFVBQVVILFNBQVNHLFFBQVE7Z0JBQzdCO1lBQ0Y7UUFDRixDQUFDO0lBQ0g7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNWLGtEQUFJQTs7a0NBQ0gsOERBQUNpQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDQztnQkFBS0MsV0FBV3ZCLHFFQUFXOzBCQUMxQiw0RUFBQ3dCO29CQUFJQyxPQUFNOztzQ0FDVCw4REFBQ0M7c0NBQU07Ozs7OztzQ0FDUCw4REFBQ0M7NEJBQU1DLE1BQUs7NEJBQU9DLElBQUc7NEJBQVFaLE1BQUs7NEJBQVFhLFNBQVE7NEJBQXNCZixPQUFNOzRCQUFxQ2dCLFVBQVdDLENBQUFBLElBQUsxQixZQUFZO29DQUFDLEdBQUdELFFBQVE7b0NBQUVFLFdBQVd5QixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0NBQUE7Ozs7OztzQ0FFdkwsOERBQUNSO3NDQUFNOzs7Ozs7c0NBQ1AsOERBQUNDOzRCQUFNQyxNQUFLOzRCQUFPQyxJQUFHOzRCQUFXWixNQUFLOzRCQUFXa0IsUUFBUTs0QkFBQ3BCLE9BQU07NEJBQXFDcUIsV0FBVTs0QkFBSUMsV0FBVTs0QkFBSU4sVUFBV0MsQ0FBQUEsSUFBSzFCLFlBQVk7b0NBQUMsR0FBR0QsUUFBUTtvQ0FBRUcsVUFBVXdCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQ0FBQTs7Ozs7O3NDQUVuTSw4REFBQ0k7NEJBQU9WLE1BQUs7NEJBQVNXLFNBQVMsSUFBTTlCO3NDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdELENBQUM7R0E3Q3VCTjs7UUFFUEQsa0RBQVNBOzs7S0FGRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IEludGVyLCBMaWZlX1NhdmVycywgTG92ZXJzX1F1YXJyZWwgfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUgKHtcbiAgICBmaXJzdE5hbWU6JycsXG4gICAgdXNlcm5hbWU6JydcbiAgfSlcblxuICBjb25zdCBDaGVja0xvZ2luID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhLmZpcnN0TmFtZSlcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSlcblxuICAgIGlmIChmb3JtRGF0YS51c2VybmFtZSAhPT0gbnVsbCkge1xuICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICBwYXRobmFtZTogJy4vY291bnRlcicsXG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgdXNlcm5hbWU6IGZvcm1EYXRhLnVzZXJuYW1lXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8bGFiZWw+Rmlyc3QgbmFtZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZmlyc3RcIiBuYW1lPVwiZmlyc3RcIiBwYXR0ZXJuPVwiW0EtWl17MX1bYS16XXsyLTEwfVwiIHRpdGxlPVwiVGhlIGZpcnN0IGxldHRlciBzaG91bGQgYmUgY2FwaXRhbFwiIG9uQ2hhbmdlPXsoZSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIGZpcnN0TmFtZTogZS50YXJnZXQudmFsdWV9KSl9Lz5cblxuICAgICAgICAgIDxsYWJlbD5Vc2VybmFtZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiByZXF1aXJlZCB0aXRsZT1cIlRoZSBmaXJzdCBsZXR0ZXIgc2hvdWxkIGJlIGNhcGl0YWxcIiBtaW5MZW5ndGg9XCI1XCIgbWF4TGVuZ3RoPVwiMTBcIm9uQ2hhbmdlPXsoZSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZX0pKX0vPlxuXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4gQ2hlY2tMb2dpbigpfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImludGVyIiwiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJIb21lIiwicm91dGVyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImZpcnN0TmFtZSIsInVzZXJuYW1lIiwiQ2hlY2tMb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiY2xhc3MiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImlkIiwicGF0dGVybiIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});