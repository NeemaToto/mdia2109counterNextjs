"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[2]!./styles/globals.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[2]!./styles/globals.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --max-width: 1100px;\\n  --border-radius: 12px;\\n  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\\n    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\\n    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;\\n\\n  --foreground-rgb: 0, 0, 0;\\n  --background-start-rgb: 214, 219, 220;\\n  --background-end-rgb: 255, 255, 255;\\n\\n  --primary-glow: conic-gradient(\\n    from 180deg at 50% 50%,\\n    #16abff33 0deg,\\n    #0885ff33 55deg,\\n    #54d6ff33 120deg,\\n    #0071ff33 160deg,\\n    transparent 360deg\\n  );\\n  --secondary-glow: radial-gradient(\\n    rgba(255, 255, 255, 1),\\n    rgba(255, 255, 255, 0)\\n  );\\n\\n  --tile-start-rgb: 239, 245, 249;\\n  --tile-end-rgb: 228, 232, 233;\\n  --tile-border: conic-gradient(\\n    #00000080,\\n    #00000040,\\n    #00000030,\\n    #00000020,\\n    #00000010,\\n    #00000010,\\n    #00000080\\n  );\\n\\n  --callout-rgb: 238, 240, 241;\\n  --callout-border-rgb: 172, 175, 176;\\n  --card-rgb: 180, 185, 188;\\n  --card-border-rgb: 131, 134, 135;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  :root {\\n    --foreground-rgb: 255, 255, 255;\\n    --background-start-rgb: 0, 0, 0;\\n    --background-end-rgb: 0, 0, 0;\\n\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\\n    --secondary-glow: linear-gradient(\\n      to bottom right,\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0.3)\\n    );\\n\\n    --tile-start-rgb: 2, 13, 46;\\n    --tile-end-rgb: 2, 5, 19;\\n    --tile-border: conic-gradient(\\n      #ffffff80,\\n      #ffffff40,\\n      #ffffff30,\\n      #ffffff20,\\n      #ffffff10,\\n      #ffffff10,\\n      #ffffff80\\n    );\\n\\n    --callout-rgb: 20, 20, 20;\\n    --callout-border-rgb: 108, 108, 108;\\n    --card-rgb: 100, 100, 100;\\n    --card-border-rgb: 200, 200, 200;\\n  }\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nhtml,\\nbody {\\n  max-width: 100vw;\\n  overflow-x: hidden;\\n}\\n\\nbody {\\n  color: rgb(var(--foreground-rgb));\\n  background: linear-gradient(\\n      to bottom,\\n      transparent,\\n      rgb(var(--background-end-rgb))\\n    )\\n    rgb(var(--background-start-rgb));\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n}\\n\\n.index-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 10px;\\n  align-items: center;\\n  padding: 6rem;\\n  color: #333333;\\n\\n}\\n\\n.index-container  > label{\\n  font-size: 25px;\\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n  \\n}\\n\\n.index-container  > input{\\n  width: 18rem;\\n  height: 2rem;\\n  border: none;\\n  border-radius: 15px;\\n}\\n\\n.index-container  > h1{\\n  font-size: xx-large;\\n  margin-bottom: 3.0rem;\\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n}\\n\\n.index-container > h1 > span{\\n  color:rgb(21, 150, 255)\\n}\\n\\n.submit-button{ \\n  border: none;\\n  background-color: rgb(21, 150, 255);\\n  height: 2rem;\\n  width: 15rem;\\n  border-radius: 15px;\\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n  font-size: 15px;\\n  color: white;\\n}\\n\\n.submit-button:active{\\n  transform: translateY(4px);\\n  background-color: rgb(18, 109, 183);\\n}\\n\\n.counter-container{\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 20px;\\n\\n}\\n\\n.counter-header{\\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n}\\n\\n.counter-p{\\n  \\n}\\n\\n.counter-button{\\n  border: none;\\n  background-color: rgb(21, 150, 255);\\n  height: 2rem;\\n  width: 15rem;\\n  border-radius: 15px;\\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n  font-size: 15px;\\n  color: white;\\n}\\n\\n.counter-button:active{\\n  transform: translateY(4px);\\n  background-color: rgb(18, 109, 183);\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,mBAAmB;EACnB,qBAAqB;EACrB;;4DAE0D;;EAE1D,yBAAyB;EACzB,qCAAqC;EACrC,mCAAmC;;EAEnC;;;;;;;GAOC;EACD;;;GAGC;;EAED,+BAA+B;EAC/B,6BAA6B;EAC7B;;;;;;;;GAQC;;EAED,4BAA4B;EAC5B,mCAAmC;EACnC,yBAAyB;EACzB,gCAAgC;AAClC;;AAEA;EACE;IACE,+BAA+B;IAC/B,+BAA+B;IAC/B,6BAA6B;;IAE7B,2EAA2E;IAC3E;;;;;KAKC;;IAED,2BAA2B;IAC3B,wBAAwB;IACxB;;;;;;;;KAQC;;IAED,yBAAyB;IACzB,mCAAmC;IACnC,yBAAyB;IACzB,gCAAgC;EAClC;AACF;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;;EAEE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;EACjC;;;;;oCAKkC;AACpC;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,mBAAmB;EACnB,aAAa;EACb,cAAc;;AAEhB;;AAEA;EACE,eAAe;EACf,4DAA4D;;AAE9D;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,4DAA4D;AAC9D;;AAEA;EACE;AACF;;AAEA;EACE,YAAY;EACZ,mCAAmC;EACnC,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,4DAA4D;EAC5D,eAAe;EACf,YAAY;AACd;;AAEA;EACE,0BAA0B;EAC1B,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;;AAEX;;AAEA;EACE,4DAA4D;AAC9D;;AAEA;;AAEA;;AAEA;EACE,YAAY;EACZ,mCAAmC;EACnC,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,4DAA4D;EAC5D,eAAe;EACf,YAAY;AACd;;AAEA;EACE,0BAA0B;EAC1B,mCAAmC;AACrC\",\"sourcesContent\":[\":root {\\n  --max-width: 1100px;\\n  --border-radius: 12px;\\n  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\\n    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\\n    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;\\n\\n  --foreground-rgb: 0, 0, 0;\\n  --background-start-rgb: 214, 219, 220;\\n  --background-end-rgb: 255, 255, 255;\\n\\n  --primary-glow: conic-gradient(\\n    from 180deg at 50% 50%,\\n    #16abff33 0deg,\\n    #0885ff33 55deg,\\n    #54d6ff33 120deg,\\n    #0071ff33 160deg,\\n    transparent 360deg\\n  );\\n  --secondary-glow: radial-gradient(\\n    rgba(255, 255, 255, 1),\\n    rgba(255, 255, 255, 0)\\n  );\\n\\n  --tile-start-rgb: 239, 245, 249;\\n  --tile-end-rgb: 228, 232, 233;\\n  --tile-border: conic-gradient(\\n    #00000080,\\n    #00000040,\\n    #00000030,\\n    #00000020,\\n    #00000010,\\n    #00000010,\\n    #00000080\\n  );\\n\\n  --callout-rgb: 238, 240, 241;\\n  --callout-border-rgb: 172, 175, 176;\\n  --card-rgb: 180, 185, 188;\\n  --card-border-rgb: 131, 134, 135;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  :root {\\n    --foreground-rgb: 255, 255, 255;\\n    --background-start-rgb: 0, 0, 0;\\n    --background-end-rgb: 0, 0, 0;\\n\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\\n    --secondary-glow: linear-gradient(\\n      to bottom right,\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0.3)\\n    );\\n\\n    --tile-start-rgb: 2, 13, 46;\\n    --tile-end-rgb: 2, 5, 19;\\n    --tile-border: conic-gradient(\\n      #ffffff80,\\n      #ffffff40,\\n      #ffffff30,\\n      #ffffff20,\\n      #ffffff10,\\n      #ffffff10,\\n      #ffffff80\\n    );\\n\\n    --callout-rgb: 20, 20, 20;\\n    --callout-border-rgb: 108, 108, 108;\\n    --card-rgb: 100, 100, 100;\\n    --card-border-rgb: 200, 200, 200;\\n  }\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nhtml,\\nbody {\\n  max-width: 100vw;\\n  overflow-x: hidden;\\n}\\n\\nbody {\\n  color: rgb(var(--foreground-rgb));\\n  background: linear-gradient(\\n      to bottom,\\n      transparent,\\n      rgb(var(--background-end-rgb))\\n    )\\n    rgb(var(--background-start-rgb));\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n}\\n\\n.index-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 10px;\\n  align-items: center;\\n  padding: 6rem;\\n  color: #333333;\\n\\n}\\n\\n.index-container  > label{\\n  font-size: 25px;\\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n  \\n}\\n\\n.index-container  > input{\\n  width: 18rem;\\n  height: 2rem;\\n  border: none;\\n  border-radius: 15px;\\n}\\n\\n.index-container  > h1{\\n  font-size: xx-large;\\n  margin-bottom: 3.0rem;\\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n}\\n\\n.index-container > h1 > span{\\n  color:rgb(21, 150, 255)\\n}\\n\\n.submit-button{ \\n  border: none;\\n  background-color: rgb(21, 150, 255);\\n  height: 2rem;\\n  width: 15rem;\\n  border-radius: 15px;\\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n  font-size: 15px;\\n  color: white;\\n}\\n\\n.submit-button:active{\\n  transform: translateY(4px);\\n  background-color: rgb(18, 109, 183);\\n}\\n\\n.counter-container{\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 20px;\\n\\n}\\n\\n.counter-header{\\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n}\\n\\n.counter-p{\\n  \\n}\\n\\n.counter-button{\\n  border: none;\\n  background-color: rgb(21, 150, 255);\\n  height: 2rem;\\n  width: 15rem;\\n  border-radius: 15px;\\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n  font-size: 15px;\\n  color: white;\\n}\\n\\n.counter-button:active{\\n  transform: translateY(4px);\\n  background-color: rgb(18, 109, 183);\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsxMV0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzExXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLGlEQUFpRCx3QkFBd0IsMEJBQTBCLHdOQUF3TixnQ0FBZ0MsMENBQTBDLHdDQUF3Qyx5TEFBeUwscUdBQXFHLHNDQUFzQyxrQ0FBa0MsdUpBQXVKLG1DQUFtQyx3Q0FBd0MsOEJBQThCLHFDQUFxQyxHQUFHLHlDQUF5QyxXQUFXLHNDQUFzQyxzQ0FBc0Msb0NBQW9DLG9GQUFvRiw2SkFBNkosb0NBQW9DLCtCQUErQix5S0FBeUssa0NBQWtDLDBDQUEwQyxnQ0FBZ0MsdUNBQXVDLEtBQUssR0FBRyxPQUFPLDJCQUEyQixlQUFlLGNBQWMsR0FBRyxpQkFBaUIscUJBQXFCLHVCQUF1QixHQUFHLFVBQVUsc0NBQXNDLDBKQUEwSixHQUFHLE9BQU8sbUJBQW1CLDBCQUEwQixHQUFHLHlDQUF5QyxVQUFVLHlCQUF5QixLQUFLLEdBQUcsc0JBQXNCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixjQUFjLHdCQUF3QixrQkFBa0IsbUJBQW1CLEtBQUssOEJBQThCLG9CQUFvQixpRUFBaUUsT0FBTyw4QkFBOEIsaUJBQWlCLGlCQUFpQixpQkFBaUIsd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QiwwQkFBMEIsaUVBQWlFLEdBQUcsaUNBQWlDLDhCQUE4QixvQkFBb0IsaUJBQWlCLHdDQUF3QyxpQkFBaUIsaUJBQWlCLHdCQUF3QixpRUFBaUUsb0JBQW9CLGlCQUFpQixHQUFHLDBCQUEwQiwrQkFBK0Isd0NBQXdDLEdBQUcsdUJBQXVCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGNBQWMsS0FBSyxvQkFBb0IsaUVBQWlFLEdBQUcsZUFBZSxPQUFPLG9CQUFvQixpQkFBaUIsd0NBQXdDLGlCQUFpQixpQkFBaUIsd0JBQXdCLGlFQUFpRSxvQkFBb0IsaUJBQWlCLEdBQUcsMkJBQTJCLCtCQUErQix3Q0FBd0MsR0FBRyxTQUFTLG1GQUFtRixZQUFZLGFBQWEsT0FBTyxRQUFRLGFBQWEsYUFBYSxjQUFjLFlBQVksS0FBSyxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxjQUFjLGFBQWEsVUFBVSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGlDQUFpQyx3QkFBd0IsMEJBQTBCLHdOQUF3TixnQ0FBZ0MsMENBQTBDLHdDQUF3Qyx5TEFBeUwscUdBQXFHLHNDQUFzQyxrQ0FBa0MsdUpBQXVKLG1DQUFtQyx3Q0FBd0MsOEJBQThCLHFDQUFxQyxHQUFHLHlDQUF5QyxXQUFXLHNDQUFzQyxzQ0FBc0Msb0NBQW9DLG9GQUFvRiw2SkFBNkosb0NBQW9DLCtCQUErQix5S0FBeUssa0NBQWtDLDBDQUEwQyxnQ0FBZ0MsdUNBQXVDLEtBQUssR0FBRyxPQUFPLDJCQUEyQixlQUFlLGNBQWMsR0FBRyxpQkFBaUIscUJBQXFCLHVCQUF1QixHQUFHLFVBQVUsc0NBQXNDLDBKQUEwSixHQUFHLE9BQU8sbUJBQW1CLDBCQUEwQixHQUFHLHlDQUF5QyxVQUFVLHlCQUF5QixLQUFLLEdBQUcsc0JBQXNCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixjQUFjLHdCQUF3QixrQkFBa0IsbUJBQW1CLEtBQUssOEJBQThCLG9CQUFvQixpRUFBaUUsT0FBTyw4QkFBOEIsaUJBQWlCLGlCQUFpQixpQkFBaUIsd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QiwwQkFBMEIsaUVBQWlFLEdBQUcsaUNBQWlDLDhCQUE4QixvQkFBb0IsaUJBQWlCLHdDQUF3QyxpQkFBaUIsaUJBQWlCLHdCQUF3QixpRUFBaUUsb0JBQW9CLGlCQUFpQixHQUFHLDBCQUEwQiwrQkFBK0Isd0NBQXdDLEdBQUcsdUJBQXVCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGNBQWMsS0FBSyxvQkFBb0IsaUVBQWlFLEdBQUcsZUFBZSxPQUFPLG9CQUFvQixpQkFBaUIsd0NBQXdDLGlCQUFpQixpQkFBaUIsd0JBQXdCLGlFQUFpRSxvQkFBb0IsaUJBQWlCLEdBQUcsMkJBQTJCLCtCQUErQix3Q0FBd0MsR0FBRyxxQkFBcUI7QUFDcDRSO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzg1ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tbWF4LXdpZHRoOiAxMTAwcHg7XFxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAtLWZvbnQtbW9ubzogdWktbW9ub3NwYWNlLCBNZW5sbywgTW9uYWNvLCAnQ2FzY2FkaWEgTW9ubycsICdTZWdvZSBVSSBNb25vJyxcXG4gICAgJ1JvYm90byBNb25vJywgJ094eWdlbiBNb25vJywgJ1VidW50dSBNb25vc3BhY2UnLCAnU291cmNlIENvZGUgUHJvJyxcXG4gICAgJ0ZpcmEgTW9ubycsICdEcm9pZCBTYW5zIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XFxuXFxuICAtLWZvcmVncm91bmQtcmdiOiAwLCAwLCAwO1xcbiAgLS1iYWNrZ3JvdW5kLXN0YXJ0LXJnYjogMjE0LCAyMTksIDIyMDtcXG4gIC0tYmFja2dyb3VuZC1lbmQtcmdiOiAyNTUsIDI1NSwgMjU1O1xcblxcbiAgLS1wcmltYXJ5LWdsb3c6IGNvbmljLWdyYWRpZW50KFxcbiAgICBmcm9tIDE4MGRlZyBhdCA1MCUgNTAlLFxcbiAgICAjMTZhYmZmMzMgMGRlZyxcXG4gICAgIzA4ODVmZjMzIDU1ZGVnLFxcbiAgICAjNTRkNmZmMzMgMTIwZGVnLFxcbiAgICAjMDA3MWZmMzMgMTYwZGVnLFxcbiAgICB0cmFuc3BhcmVudCAzNjBkZWdcXG4gICk7XFxuICAtLXNlY29uZGFyeS1nbG93OiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSksXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcXG4gICk7XFxuXFxuICAtLXRpbGUtc3RhcnQtcmdiOiAyMzksIDI0NSwgMjQ5O1xcbiAgLS10aWxlLWVuZC1yZ2I6IDIyOCwgMjMyLCAyMzM7XFxuICAtLXRpbGUtYm9yZGVyOiBjb25pYy1ncmFkaWVudChcXG4gICAgIzAwMDAwMDgwLFxcbiAgICAjMDAwMDAwNDAsXFxuICAgICMwMDAwMDAzMCxcXG4gICAgIzAwMDAwMDIwLFxcbiAgICAjMDAwMDAwMTAsXFxuICAgICMwMDAwMDAxMCxcXG4gICAgIzAwMDAwMDgwXFxuICApO1xcblxcbiAgLS1jYWxsb3V0LXJnYjogMjM4LCAyNDAsIDI0MTtcXG4gIC0tY2FsbG91dC1ib3JkZXItcmdiOiAxNzIsIDE3NSwgMTc2O1xcbiAgLS1jYXJkLXJnYjogMTgwLCAxODUsIDE4ODtcXG4gIC0tY2FyZC1ib3JkZXItcmdiOiAxMzEsIDEzNCwgMTM1O1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICA6cm9vdCB7XFxuICAgIC0tZm9yZWdyb3VuZC1yZ2I6IDI1NSwgMjU1LCAyNTU7XFxuICAgIC0tYmFja2dyb3VuZC1zdGFydC1yZ2I6IDAsIDAsIDA7XFxuICAgIC0tYmFja2dyb3VuZC1lbmQtcmdiOiAwLCAwLCAwO1xcblxcbiAgICAtLXByaW1hcnktZ2xvdzogcmFkaWFsLWdyYWRpZW50KHJnYmEoMSwgNjUsIDI1NSwgMC40KSwgcmdiYSgxLCA2NSwgMjU1LCAwKSk7XFxuICAgIC0tc2Vjb25kYXJ5LWdsb3c6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byBib3R0b20gcmlnaHQsXFxuICAgICAgcmdiYSgxLCA2NSwgMjU1LCAwKSxcXG4gICAgICByZ2JhKDEsIDY1LCAyNTUsIDApLFxcbiAgICAgIHJnYmEoMSwgNjUsIDI1NSwgMC4zKVxcbiAgICApO1xcblxcbiAgICAtLXRpbGUtc3RhcnQtcmdiOiAyLCAxMywgNDY7XFxuICAgIC0tdGlsZS1lbmQtcmdiOiAyLCA1LCAxOTtcXG4gICAgLS10aWxlLWJvcmRlcjogY29uaWMtZ3JhZGllbnQoXFxuICAgICAgI2ZmZmZmZjgwLFxcbiAgICAgICNmZmZmZmY0MCxcXG4gICAgICAjZmZmZmZmMzAsXFxuICAgICAgI2ZmZmZmZjIwLFxcbiAgICAgICNmZmZmZmYxMCxcXG4gICAgICAjZmZmZmZmMTAsXFxuICAgICAgI2ZmZmZmZjgwXFxuICAgICk7XFxuXFxuICAgIC0tY2FsbG91dC1yZ2I6IDIwLCAyMCwgMjA7XFxuICAgIC0tY2FsbG91dC1ib3JkZXItcmdiOiAxMDgsIDEwOCwgMTA4O1xcbiAgICAtLWNhcmQtcmdiOiAxMDAsIDEwMCwgMTAwO1xcbiAgICAtLWNhcmQtYm9yZGVyLXJnYjogMjAwLCAyMDAsIDIwMDtcXG4gIH1cXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgY29sb3I6IHJnYih2YXIoLS1mb3JlZ3JvdW5kLXJnYikpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHRvIGJvdHRvbSxcXG4gICAgICB0cmFuc3BhcmVudCxcXG4gICAgICByZ2IodmFyKC0tYmFja2dyb3VuZC1lbmQtcmdiKSlcXG4gICAgKVxcbiAgICByZ2IodmFyKC0tYmFja2dyb3VuZC1zdGFydC1yZ2IpKTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgaHRtbCB7XFxuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcXG4gIH1cXG59XFxuXFxuLmluZGV4LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA2cmVtO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuXFxufVxcblxcbi5pbmRleC1jb250YWluZXIgID4gbGFiZWx7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBcXG59XFxuXFxuLmluZGV4LWNvbnRhaW5lciAgPiBpbnB1dHtcXG4gIHdpZHRoOiAxOHJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5pbmRleC1jb250YWluZXIgID4gaDF7XFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgbWFyZ2luLWJvdHRvbTogMy4wcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaW5kZXgtY29udGFpbmVyID4gaDEgPiBzcGFue1xcbiAgY29sb3I6cmdiKDIxLCAxNTAsIDI1NSlcXG59XFxuXFxuLnN1Ym1pdC1idXR0b257IFxcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxLCAxNTAsIDI1NSk7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMTVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbjphY3RpdmV7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTA5LCAxODMpO1xcbn1cXG5cXG4uY291bnRlci1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcblxcbn1cXG5cXG4uY291bnRlci1oZWFkZXJ7XFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb3VudGVyLXB7XFxuICBcXG59XFxuXFxuLmNvdW50ZXItYnV0dG9ue1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxLCAxNTAsIDI1NSk7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMTVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY291bnRlci1idXR0b246YWN0aXZle1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDEwOSwgMTgzKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckI7OzREQUUwRDs7RUFFMUQseUJBQXlCO0VBQ3pCLHFDQUFxQztFQUNyQyxtQ0FBbUM7O0VBRW5DOzs7Ozs7O0dBT0M7RUFDRDs7O0dBR0M7O0VBRUQsK0JBQStCO0VBQy9CLDZCQUE2QjtFQUM3Qjs7Ozs7Ozs7R0FRQzs7RUFFRCw0QkFBNEI7RUFDNUIsbUNBQW1DO0VBQ25DLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTtJQUNFLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsNkJBQTZCOztJQUU3QiwyRUFBMkU7SUFDM0U7Ozs7O0tBS0M7O0lBRUQsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs7S0FRQzs7SUFFRCx5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixnQ0FBZ0M7RUFDbEM7QUFDRjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakM7Ozs7O29DQUtrQztBQUNwQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7O0FBRWhCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDREQUE0RDs7QUFFOUQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDREQUE0RDtFQUM1RCxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7O0FBRVg7O0FBRUE7RUFDRSw0REFBNEQ7QUFDOUQ7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDREQUE0RDtFQUM1RCxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLG1DQUFtQztBQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLW1heC13aWR0aDogMTEwMHB4O1xcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgLS1mb250LW1vbm86IHVpLW1vbm9zcGFjZSwgTWVubG8sIE1vbmFjbywgJ0Nhc2NhZGlhIE1vbm8nLCAnU2Vnb2UgVUkgTW9ubycsXFxuICAgICdSb2JvdG8gTW9ubycsICdPeHlnZW4gTW9ubycsICdVYnVudHUgTW9ub3NwYWNlJywgJ1NvdXJjZSBDb2RlIFBybycsXFxuICAgICdGaXJhIE1vbm8nLCAnRHJvaWQgU2FucyBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xcblxcbiAgLS1mb3JlZ3JvdW5kLXJnYjogMCwgMCwgMDtcXG4gIC0tYmFja2dyb3VuZC1zdGFydC1yZ2I6IDIxNCwgMjE5LCAyMjA7XFxuICAtLWJhY2tncm91bmQtZW5kLXJnYjogMjU1LCAyNTUsIDI1NTtcXG5cXG4gIC0tcHJpbWFyeS1nbG93OiBjb25pYy1ncmFkaWVudChcXG4gICAgZnJvbSAxODBkZWcgYXQgNTAlIDUwJSxcXG4gICAgIzE2YWJmZjMzIDBkZWcsXFxuICAgICMwODg1ZmYzMyA1NWRlZyxcXG4gICAgIzU0ZDZmZjMzIDEyMGRlZyxcXG4gICAgIzAwNzFmZjMzIDE2MGRlZyxcXG4gICAgdHJhbnNwYXJlbnQgMzYwZGVnXFxuICApO1xcbiAgLS1zZWNvbmRhcnktZ2xvdzogcmFkaWFsLWdyYWRpZW50KFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXFxuICApO1xcblxcbiAgLS10aWxlLXN0YXJ0LXJnYjogMjM5LCAyNDUsIDI0OTtcXG4gIC0tdGlsZS1lbmQtcmdiOiAyMjgsIDIzMiwgMjMzO1xcbiAgLS10aWxlLWJvcmRlcjogY29uaWMtZ3JhZGllbnQoXFxuICAgICMwMDAwMDA4MCxcXG4gICAgIzAwMDAwMDQwLFxcbiAgICAjMDAwMDAwMzAsXFxuICAgICMwMDAwMDAyMCxcXG4gICAgIzAwMDAwMDEwLFxcbiAgICAjMDAwMDAwMTAsXFxuICAgICMwMDAwMDA4MFxcbiAgKTtcXG5cXG4gIC0tY2FsbG91dC1yZ2I6IDIzOCwgMjQwLCAyNDE7XFxuICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTcyLCAxNzUsIDE3NjtcXG4gIC0tY2FyZC1yZ2I6IDE4MCwgMTg1LCAxODg7XFxuICAtLWNhcmQtYm9yZGVyLXJnYjogMTMxLCAxMzQsIDEzNTtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgOnJvb3Qge1xcbiAgICAtLWZvcmVncm91bmQtcmdiOiAyNTUsIDI1NSwgMjU1O1xcbiAgICAtLWJhY2tncm91bmQtc3RhcnQtcmdiOiAwLCAwLCAwO1xcbiAgICAtLWJhY2tncm91bmQtZW5kLXJnYjogMCwgMCwgMDtcXG5cXG4gICAgLS1wcmltYXJ5LWdsb3c6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDEsIDY1LCAyNTUsIDAuNCksIHJnYmEoMSwgNjUsIDI1NSwgMCkpO1xcbiAgICAtLXNlY29uZGFyeS1nbG93OiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gYm90dG9tIHJpZ2h0LFxcbiAgICAgIHJnYmEoMSwgNjUsIDI1NSwgMCksXFxuICAgICAgcmdiYSgxLCA2NSwgMjU1LCAwKSxcXG4gICAgICByZ2JhKDEsIDY1LCAyNTUsIDAuMylcXG4gICAgKTtcXG5cXG4gICAgLS10aWxlLXN0YXJ0LXJnYjogMiwgMTMsIDQ2O1xcbiAgICAtLXRpbGUtZW5kLXJnYjogMiwgNSwgMTk7XFxuICAgIC0tdGlsZS1ib3JkZXI6IGNvbmljLWdyYWRpZW50KFxcbiAgICAgICNmZmZmZmY4MCxcXG4gICAgICAjZmZmZmZmNDAsXFxuICAgICAgI2ZmZmZmZjMwLFxcbiAgICAgICNmZmZmZmYyMCxcXG4gICAgICAjZmZmZmZmMTAsXFxuICAgICAgI2ZmZmZmZjEwLFxcbiAgICAgICNmZmZmZmY4MFxcbiAgICApO1xcblxcbiAgICAtLWNhbGxvdXQtcmdiOiAyMCwgMjAsIDIwO1xcbiAgICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTA4LCAxMDgsIDEwODtcXG4gICAgLS1jYXJkLXJnYjogMTAwLCAxMDAsIDEwMDtcXG4gICAgLS1jYXJkLWJvcmRlci1yZ2I6IDIwMCwgMjAwLCAyMDA7XFxuICB9XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiByZ2IodmFyKC0tZm9yZWdyb3VuZC1yZ2IpKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byBib3R0b20sXFxuICAgICAgdHJhbnNwYXJlbnQsXFxuICAgICAgcmdiKHZhcigtLWJhY2tncm91bmQtZW5kLXJnYikpXFxuICAgIClcXG4gICAgcmdiKHZhcigtLWJhY2tncm91bmQtc3RhcnQtcmdiKSk7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gIGh0bWwge1xcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XFxuICB9XFxufVxcblxcbi5pbmRleC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNnJlbTtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcblxcbn1cXG5cXG4uaW5kZXgtY29udGFpbmVyICA+IGxhYmVse1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgXFxufVxcblxcbi5pbmRleC1jb250YWluZXIgID4gaW5wdXR7XFxuICB3aWR0aDogMThyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4uaW5kZXgtY29udGFpbmVyICA+IGgxe1xcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gIG1hcmdpbi1ib3R0b206IDMuMHJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmluZGV4LWNvbnRhaW5lciA+IGgxID4gc3BhbntcXG4gIGNvbG9yOnJnYigyMSwgMTUwLCAyNTUpXFxufVxcblxcbi5zdWJtaXQtYnV0dG9ueyBcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgMTUwLCAyNTUpO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b246YWN0aXZle1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDEwOSwgMTgzKTtcXG59XFxuXFxuLmNvdW50ZXItY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG5cXG59XFxuXFxuLmNvdW50ZXItaGVhZGVye1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY291bnRlci1we1xcbiAgXFxufVxcblxcbi5jb3VudGVyLWJ1dHRvbntcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgMTUwLCAyNTUpO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvdW50ZXItYnV0dG9uOmFjdGl2ZXtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxMDksIDE4Myk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[2]!./styles/globals.css\n"));

/***/ })

});