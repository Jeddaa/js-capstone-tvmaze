/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjs_capstone_tvmaze"] = self["webpackChunkjs_capstone_tvmaze"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\n  font-weight: 400;\\n}\\n\\n.container {\\n  padding: 0 75px 185px 75px;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: inherit;\\n}\\n\\nul li {\\n  list-style-type: none;\\n  margin: 0 15px;\\n  cursor: pointer;\\n  letter-spacing: 0.8px;\\n}\\n\\n.api-data > li {\\n  margin: 0;\\n}\\n\\n.api-comments-div > li {\\n  padding: 0;\\n  margin: 0.3em;\\n}\\n\\nul li:active {\\n  font-weight: 600;\\n  text-decoration: underline;\\n}\\n\\n.nav {\\n  display: flex;\\n  margin: 28px 0;\\n}\\n\\n.d-flex {\\n  display: flex;\\n}\\n\\n.align-center {\\n  align-items: center;\\n}\\n\\n.justify-between {\\n  justify-content: space-between;\\n}\\n\\n.row {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\\n  grid-gap: 50px;\\n}\\n\\n.col-sm-4 {\\n  margin: 25px;\\n}\\n\\n.w-65 {\\n  width: 70%;\\n}\\n\\n.w-35 {\\n  width: 30%;\\n}\\n\\n.col-sm-4 img {\\n  width: 100%;\\n}\\n\\n.text-right {\\n  text-align: right;\\n}\\n\\n.text-center {\\n  text-align: center;\\n}\\n\\n.fw-700 {\\n  font-weight: 600;\\n}\\n\\n.fs-6 {\\n  font-size: 10px;\\n}\\n\\n.fs-5 {\\n  font-size: 13px;\\n}\\n\\n.fa-thumbs-up {\\n  cursor: pointer;\\n  font-size: 18px;\\n}\\n\\n.fa-thumbs-up:hover {\\n  color: rgba(32, 32, 250, 0.687);\\n}\\n\\nbutton {\\n  background-color: #fff;\\n  cursor: pointer;\\n  margin: 8px 0;\\n  width: 100%;\\n}\\n\\n.btn {\\n  font-size: 16px;\\n  padding: 4px 15px;\\n}\\n\\nfooter {\\n  position: fixed;\\n  background-color: #fff;\\n  right: 0;\\n  left: 0;\\n  bottom: 0;\\n  letter-spacing: 0.5px;\\n  padding: 0 35px;\\n  border: 2px solid #000;\\n}\\n\\n.test-popup {\\n  background: #c1c7d0;\\n  opacity: 100%;\\n  position: fixed;\\n  top: 0;\\n  bottom: 0;\\n  right: 0;\\n  width: 100%;\\n  height: 100%;\\n  left: 0;\\n  mix-blend-mode: multiply;\\n  pointer-events: none;\\n  backdrop-filter: blur(20px);\\n}\\n\\n.popup-div {\\n  display: none;\\n  flex-direction: column;\\n  align-content: center;\\n  position: fixed;\\n  background-color: #fff;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 60vw;\\n  max-width: 95vw;\\n  height: auto;\\n  max-height: 100vh;\\n  font-family: Poppins, sans-serif;\\n  z-index: 1000;\\n  border: 1px solid #dfe1e6;\\n  border-radius: 10px;\\n  padding: 2em;\\n  overflow: auto;\\n}\\n\\n.api-data-h2 {\\n  text-align: center;\\n}\\n\\n.api-data {\\n  display: grid;\\n  grid-template-columns: auto auto;\\n  list-style: none;\\n  gap: 10px;\\n  padding: 0;\\n}\\n\\n.api-data-summary {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n  text-align: justify;\\n}\\n\\n.api-data-summary > h3 {\\n  margin: 0;\\n  text-align: center;\\n}\\n\\n.api-data-summary > p {\\n  margin: 0;\\n  line-height: 20px;\\n}\\n\\n.comment-header {\\n  text-align: center;\\n  margin: 0.5em 0;\\n}\\n\\n.api-comments-div {\\n  padding: 0;\\n  display: flex;\\n  margin: 0;\\n}\\n\\n.close-popup {\\n  display: block;\\n  cursor: pointer;\\n  font-size: 20px;\\n  padding-top: 1em;\\n}\\n\\n.api-data-img {\\n  display: flex;\\n  justify-content: center;\\n  text-align: center;\\n}\\n\\n.comment-btn {\\n  cursor: pointer;\\n  width: 20%;\\n  font-size: 1em;\\n  text-align: start;\\n  padding: 5px 2px;\\n}\\n\\n.form-header {\\n  text-align: center;\\n}\\n\\n.add-comment-form {\\n  display: flex;\\n  flex-direction: column;\\n  padding-bottom: 1em;\\n}\\n\\n.yourName {\\n  width: 35%;\\n  margin-bottom: 1em;\\n  border: #000 2px solid;\\n  padding: 5px 2px;\\n}\\n\\n.yourName::placeholder {\\n  font-size: 1.2em;\\n}\\n\\n.yourComment {\\n  width: 55%;\\n  border: #000 2px solid;\\n  height: 100px;\\n  vertical-align: top;\\n}\\n\\n.yourComment::placeholder {\\n  transform: translateY(-200%);\\n  font-size: 1.2em;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-capstone-tvmaze/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://js-capstone-tvmaze/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js-capstone-tvmaze/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-capstone-tvmaze/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-capstone-tvmaze/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-capstone-tvmaze/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-capstone-tvmaze/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-capstone-tvmaze/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-capstone-tvmaze/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-capstone-tvmaze/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_showItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showItems.js */ \"./src/modules/showItems.js\");\n\n\n\nconst baseURL = 'https://api.tvmaze.com/shows/';\nconst showAllItem = document.querySelector('.show-all-item');\nconst showCount = document.querySelector('.showCount');\nconst involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WXD5VCEItQhvz4b5mgk3/likes';\n\n(0,_modules_showItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(showAllItem, baseURL, involvementURL, showCount);\n\n\n//# sourceURL=webpack://js-capstone-tvmaze/./src/index.js?");

/***/ }),

/***/ "./src/modules/addPopUp.js":
/*!*********************************!*\
  !*** ./src/modules/addPopUp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentCount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCount.js */ \"./src/modules/commentCount.js\");\n/* harmony import */ var _commentCount_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_commentCount_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request.js */ \"./src/modules/request.js\");\n/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_request_js__WEBPACK_IMPORTED_MODULE_1__);\n/* eslint-disable no-unused-vars */\n\n\n\nconst content = document.querySelector('.popup-content');\nconst showComments = document.querySelector('.popup-comments');\nconst form = document.querySelector('.add-comment-form');\nconst popup = document.querySelector('.popup-div');\nconst close = document.querySelector('.close-popup');\nconst commentHeader = document.querySelector('.comment-header');\nconst cmtURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\nconst appId = 'UCdL9KYsi0SBeKyTsp1q';\n\nconst refreshComments = async (appId, resId, cmtURL) => {\n  showComments.innerHTML = '';\n  // eslint-disable-next-line consistent-return\n  await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.requestItems)(`${cmtURL}apps/${appId}/comments?item_id=${resId}`).then((response) => {\n    commentHeader.innerHTML = '';\n    _commentCount_js__WEBPACK_IMPORTED_MODULE_0___default()(response, commentHeader);\n    try {\n      response.forEach((res) => {\n        showComments.innerHTML += `\n    <ul class=\"api-comments-div\">\n        <li>${res.creation_date}</li>\n        <li>${res.username}:</li>\n        <li>${res.comment}</li>\n      </ul>\n    `;\n      });\n    } catch (err) {\n      return null;\n    }\n  });\n};\n\nconst fetchComments = async (appId, resId, cmtURL) => {\n  showComments.innerHTML = '';\n  // eslint-disable-next-line consistent-return\n  await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.requestItems)(`${cmtURL}apps/${appId}/comments?item_id=${resId}`).then((response) => {\n    commentHeader.innerHTML = '';\n    _commentCount_js__WEBPACK_IMPORTED_MODULE_0___default()(response, commentHeader);\n    try {\n      response.forEach((res) => {\n        showComments.innerHTML += `\n    <ul class=\"api-comments-div\">\n        <li>${res.creation_date}</li>\n        <li>${res.username}:</li>\n        <li>${res.comment}</li>\n      </ul>\n    `;\n      });\n    } catch (err) {\n      return null;\n    }\n  });\n};\n\nconst addComments = async (cmtURL, appId, resId) => {\n  const name = document.querySelector('.yourName');\n  const comt = document.querySelector('.yourComment');\n  if (name.value !== '' && comt.value !== '') {\n    await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.involvementApi)(`${cmtURL}apps/${appId}/comments`, {\n      item_id: resId,\n      username: name.value,\n      comment: comt.value,\n    });\n    await fetchComments(appId, resId, cmtURL);\n  }\n};\n\nconst fetchAPIData = async (resId, baseURL) => {\n  await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.requestItems)(`${baseURL}${resId}`).then((res) => {\n    content.innerHTML = `\n    <div class=\"api-data-img\">\n      <img\n      src=\"${res.image.medium}\"\n      alt=\"list of movies image\">\n      </div>\n      <h2 class=\"api-data-h2\">${res.name}</h2>\n       <ul class =\"api-data\">\n        <li>Language: ${res.language}</li>\n        <li>Rating Average: ${res.rating.average}</li>\n        <li>Runtime: ${res.runtime}</li>\n        <li>Premiered: ${res.premiered}</li>\n        <li>Ended: ${res.ended}</li>\n        <li>Status: ${res.status}</li>\n      </ul>\n      <div class=\"api-data-summary\">\n      <h3> Summary </h3>\n      ${res.summary}\n      </div>\n      `;\n  });\n};\n\nconst addPopUp = (btn, baseURL) => {\n  btn.forEach((testbtn) => {\n    testbtn.addEventListener('click', async () => {\n      document.body.style.overflow = 'hidden';\n      const resId = testbtn.getAttribute('data-set');\n      popup.style.display = 'block';\n      await fetchAPIData(resId, baseURL);\n      await fetchComments(appId, resId, cmtURL);\n      form.addEventListener('submit', async (e) => {\n        e.preventDefault();\n        await addComments(cmtURL, appId, resId);\n        form.reset();\n      });\n      close.addEventListener('click', () => {\n        popup.style.display = 'none';\n        showComments.innerHTML = '';\n        document.body.style.overflow = '';\n        commentHeader.innerHTML = '';\n        setTimeout(() => {\n          document.location.reload();\n        }, 10);\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addPopUp);\n\n\n//# sourceURL=webpack://js-capstone-tvmaze/./src/modules/addPopUp.js?");

/***/ }),

/***/ "./src/modules/commentCount.js":
/*!*************************************!*\
  !*** ./src/modules/commentCount.js ***!
  \*************************************/
/***/ ((module) => {

eval("const commentCount = (response, renderHtml) => {\n  const counta = response.length;\n  if (typeof counta === 'undefined') {\n    renderHtml.innerHTML = 'Comments (0)';\n  } else if (typeof counta === 'number' && Number.isInteger(counta)) {\n    renderHtml.innerHTML = `Comments (${counta})`;\n  }\n};\n\nmodule.exports = commentCount;\n\n\n//# sourceURL=webpack://js-capstone-tvmaze/./src/modules/commentCount.js?");

/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((module) => {

eval("const countArr = (getArr, showCount) => {\n  showCount.innerHTML = getArr.length;\n};\n\nmodule.exports = countArr;\n\n//# sourceURL=webpack://js-capstone-tvmaze/./src/modules/counter.js?");

/***/ }),

/***/ "./src/modules/postLike.js":
/*!*********************************!*\
  !*** ./src/modules/postLike.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike),\n/* harmony export */   \"showLike\": () => (/* binding */ showLike)\n/* harmony export */ });\n/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request.js */ \"./src/modules/request.js\");\n/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_request_js__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable import/named */\n\n\nconst showLike = async (showLikes, involvementURL) => {\n  const like = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.requestItems)(involvementURL);\n  showLikes.forEach((showlike) => {\n    const index = showlike.getAttribute('data-set');\n    showlike.innerHTML = `${like[index - 1].likes}`;\n  });\n};\n\nconst postLike = (thumbsUp, involvementURL, showLikes) => {\n  thumbsUp.forEach((clickLike) => {\n    clickLike.addEventListener('click', async () => {\n      const getId = clickLike.getAttribute('data-set');\n      await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.involvementApi)(involvementURL, { item_id: getId.toString() });\n      showLike(showLikes, involvementURL);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLike);\n\n\n//# sourceURL=webpack://js-capstone-tvmaze/./src/modules/postLike.js?");

/***/ }),

/***/ "./src/modules/request.js":
/*!********************************!*\
  !*** ./src/modules/request.js ***!
  \********************************/
/***/ ((module) => {

eval("const requestItems = async (baseURL) => {\n  const response = await fetch(baseURL);\n  const tvData = await response.json();\n  return tvData;\n};\n\nconst involvementApi = async (baseURL, data) => {\n  await fetch(baseURL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });\n};\n\nmodule.exports = { requestItems, involvementApi };\n\n\n//# sourceURL=webpack://js-capstone-tvmaze/./src/modules/request.js?");

/***/ }),

/***/ "./src/modules/showItems.js":
/*!**********************************!*\
  !*** ./src/modules/showItems.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request.js */ \"./src/modules/request.js\");\n/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_request_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _addPopUp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addPopUp.js */ \"./src/modules/addPopUp.js\");\n/* harmony import */ var _postLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postLike.js */ \"./src/modules/postLike.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter.js */ \"./src/modules/counter.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_counter_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst showItems = async (showAllItem, baseURL, involvementURL, showCount) => {\n  showAllItem.innerHTML = '';\n\n  try {\n    const storeObj = [];\n    for (let index = 1; index < 13; index += 1) {\n      /* eslint-disable no-await-in-loop */\n      const res = await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.requestItems)(`${baseURL}${index}`);\n\n      storeObj.push(res);\n      _counter_js__WEBPACK_IMPORTED_MODULE_3___default()(storeObj, showCount);\n      showAllItem.innerHTML += `\n        <section class=\"col-sm-4\">\n          <aside>\n            <img\n              src=\"${res.image.medium}\"\n              alt=\"list of movies image\">\n            <div class=\"d-flex justify-between\">\n              <div class=\"fw-700 w-65\">${res.name}</div>\n              <div class=\"text-right w-35\">\n                <i class=\"fa-solid fa-thumbs-up like\" data-set=${res.id}></i>\n                <div class=\"fs-5 fw-700 showLike\" data-set=${index}></div>\n              </div>\n            </div>\n          </aside>\n          <aside class=\"text-center\">\n            <button class=\"btn comment\" data-set=${res.id} >Comments</button>\n            <button class=\"btn2\">Reservations</button>\n          </aside>\n        </section>\n    `;\n    }\n  } catch (error) {\n    showAllItem.innerHTML += error;\n  }\n  const thumbsUp = document.querySelectorAll('.like');\n  const showLikes = document.querySelectorAll('.showLike');\n  (0,_postLike_js__WEBPACK_IMPORTED_MODULE_2__.postLike)(thumbsUp, involvementURL, showLikes);\n  (0,_postLike_js__WEBPACK_IMPORTED_MODULE_2__.showLike)(showLikes, involvementURL);\n  const btn = document.querySelectorAll('.btn');\n  await (0,_addPopUp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(btn, baseURL);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showItems);\n\n\n//# sourceURL=webpack://js-capstone-tvmaze/./src/modules/showItems.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);