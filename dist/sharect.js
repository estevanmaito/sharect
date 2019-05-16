(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Sharect"] = factory();
	else
		root["Sharect"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Button/Button.js":
/*!******************************!*\
  !*** ./src/Button/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createButton; });\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ \"./src/Button/style.js\");\n\n\nfunction handleMouseOver() {\n  this.style.transform = \"scale(1.2)\";\n}\n\nfunction handleMouseOut() {\n  this.style.transform = \"scale(1)\";\n}\n\nfunction createButton(icon, handleMouseDown) {\n  const btn = document.createElement(\"div\");\n  btn.style.cssText = _style__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  btn.innerHTML = icon;\n  btn.onmousedown = handleMouseDown;\n  btn.onmouseover = handleMouseOver;\n  btn.onmouseout = handleMouseOut;\n\n  return btn;\n}\n\n\n//# sourceURL=webpack://Sharect/./src/Button/Button.js?");

/***/ }),

/***/ "./src/Button/ShareButton/ShareButton.js":
/*!***********************************************!*\
  !*** ./src/Button/ShareButton/ShareButton.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createShareButton; });\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Button */ \"./src/Button/Button.js\");\n\n\nfunction createShareButton(icon, url, username) {\n  const btn = Object(_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(icon, function() {\n    const parsedURL = url\n      .replace(/PAGE_URL/, window.location.href)\n      .replace(/TEXT_SELECTION/, window.getSelection().toString())\n      .replace(/USERNAME/, username)\n    window.open(parsedURL, 'Share', 'width=550, height=280')\n  })\n  return btn\n}\n\n//# sourceURL=webpack://Sharect/./src/Button/ShareButton/ShareButton.js?");

/***/ }),

/***/ "./src/Button/style.js":
/*!*****************************!*\
  !*** ./src/Button/style.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ('display:inline-block;'\n             + 'margin:7px;'\n             + 'cursor:pointer;'\n             + 'transition:all .2s ease-in-out;');\n\n//# sourceURL=webpack://Sharect/./src/Button/style.js?");

/***/ }),

/***/ "./src/Tooltip/Arrow/Arrow.js":
/*!************************************!*\
  !*** ./src/Tooltip/Arrow/Arrow.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Arrow; });\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ \"./src/Tooltip/Arrow/style.js\");\n\n\nfunction Arrow(props) {\n  const arrow = document.createElement(\"div\");\n  arrow.style.cssText = Object(_style__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props);\n\n  return arrow;\n}\n\n\n//# sourceURL=webpack://Sharect/./src/Tooltip/Arrow/Arrow.js?");

/***/ }),

/***/ "./src/Tooltip/Arrow/style.js":
/*!************************************!*\
  !*** ./src/Tooltip/Arrow/style.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst style = ({ arrowSize, backgroundColor, buttonSize, icons }) =>\n  \"position:absolute;\" +\n  \"border-left:\" + arrowSize + \"px solid transparent;\" +\n  \"border-right:\" + arrowSize + \"px solid transparent;\" +\n  \"border-top:\" + arrowSize + \"px solid \" + backgroundColor + \";\" +\n  \"bottom:-\" + (arrowSize - 1) + \"px;\" +\n  \"left:\" + ((buttonSize * icons.length) / 2 - arrowSize) + \"px;\" +\n  \"width:0;\" +\n  \"height:0;\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (style);\n\n\n//# sourceURL=webpack://Sharect/./src/Tooltip/Arrow/style.js?");

/***/ }),

/***/ "./src/Tooltip/Tooltip.js":
/*!********************************!*\
  !*** ./src/Tooltip/Tooltip.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tooltip; });\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ \"./src/Tooltip/style.js\");\n/* harmony import */ var _Arrow_Arrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Arrow/Arrow */ \"./src/Tooltip/Arrow/Arrow.js\");\n\n\n\nfunction Tooltip(props) {\n  const {\n    top,\n    left,\n    iconSize,\n    mobileIconSize,\n    buttonMargin,\n    backgroundColor,\n    icons,\n    arrowSize,\n    isMobile\n  } = props;\n\n  const tooltip = document.createElement(\"div\");\n  let buttonSize = iconSize + buttonMargin;\n  tooltip.className = \"sharect\";\n\n  tooltip.style.cssText = Object(_style__WEBPACK_IMPORTED_MODULE_0__[\"defaultStyle\"])(backgroundColor);\n  if (isMobile) {\n    buttonSize = mobileIconSize + buttonMargin;\n    tooltip.style.cssText += Object(_style__WEBPACK_IMPORTED_MODULE_0__[\"mobileStyle\"])(buttonSize);\n  } else {\n    tooltip.style.cssText += Object(_style__WEBPACK_IMPORTED_MODULE_0__[\"desktopStyle\"])(top, left);\n  }\n\n  tooltip.appendChild(icons.icons);\n\n  if (!isMobile) {\n    const arrow = Object(_Arrow_Arrow__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      arrowSize,\n      backgroundColor,\n      buttonSize,\n      icons\n    });\n\n    tooltip.appendChild(arrow);\n  }\n\n  return tooltip;\n}\n\n\n//# sourceURL=webpack://Sharect/./src/Tooltip/Tooltip.js?");

/***/ }),

/***/ "./src/Tooltip/style.js":
/*!******************************!*\
  !*** ./src/Tooltip/style.js ***!
  \******************************/
/*! exports provided: defaultStyle, mobileStyle, desktopStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultStyle\", function() { return defaultStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mobileStyle\", function() { return mobileStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"desktopStyle\", function() { return desktopStyle; });\nconst defaultStyle = backgroundColor =>\n  \"line-height:0;\" +\n  \"transition:all .2s ease-in-out;\" +\n  \"background:\" + backgroundColor + \";\"\n\nconst mobileStyle = buttonSize =>\n  \"position:fixed;\" +\n  \"bottom:calc(50% - 64px);\" +\n  \"left:0;\" +\n  \"width:\" + buttonSize + \"px;\" +\n  \"border-top-right-radius:5px;\" +\n  \"border-bottom-right-radius:5px;\"\n\nconst desktopStyle = (top, left) =>\n  \"position:absolute;\" +\n  \"border-radius:3px;\" +\n  \"top:\" + top + \"px;\" +\n  \"left:\" + left + \"px;\"\n\n\n//# sourceURL=webpack://Sharect/./src/Tooltip/style.js?");

/***/ }),

/***/ "./src/helpers/appendIconStyles.js":
/*!*****************************************!*\
  !*** ./src/helpers/appendIconStyles.js ***!
  \*****************************************/
/*! exports provided: appendIconStyle, appendMobileIconStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendIconStyle\", function() { return appendIconStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendMobileIconStyle\", function() { return appendMobileIconStyle; });\nfunction appendIconStyle({iconColor}) {\n  const style = document.createElement(\"style\");\n  style.id = \"sharect-style\";\n  style.innerHTML = `.sharect svg{fill:${iconColor};}`;\n  document.body.appendChild(style);\n}\n\nfunction appendMobileIconStyle(iconColor, mobileIconSize) {\n  const style = document.getElementById(\"sharect-style\");\n  style.innerHTML = `.sharect svg{fill:${iconColor};width:${mobileIconSize}px;height:${mobileIconSize}px;}`;\n}\n\n\n//# sourceURL=webpack://Sharect/./src/helpers/appendIconStyles.js?");

/***/ }),

/***/ "./src/helpers/attachEvents.js":
/*!*************************************!*\
  !*** ./src/helpers/attachEvents.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return attachEvents; });\n/* harmony import */ var _hasTooltipDrawn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasTooltipDrawn */ \"./src/helpers/hasTooltipDrawn.js\");\n/* harmony import */ var _hasSelection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hasSelection */ \"./src/helpers/hasSelection.js\");\n/* harmony import */ var _isSelectableElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isSelectableElement */ \"./src/helpers/isSelectableElement.js\");\n/* harmony import */ var _moveTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moveTooltip */ \"./src/helpers/moveTooltip.js\");\n/* harmony import */ var _renderTooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderTooltip */ \"./src/helpers/renderTooltip.js\");\n/* harmony import */ var _appendIconStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appendIconStyles */ \"./src/helpers/appendIconStyles.js\");\n\n\n\n\n\n\n\nlet isMobile = false;\n\nfunction handleMouseUp(props) {\n  setTimeout(function mouseTimeout() {\n    if (Object(_hasTooltipDrawn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) {\n      if (Object(_hasSelection__WEBPACK_IMPORTED_MODULE_1__[\"default\"])() && Object(_isSelectableElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(props.selectableElements)) {\n        Object(_moveTooltip__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ ...props, isMobile });\n        return;\n      } else {\n        document.querySelector(\".sharect\").remove();\n      }\n    }\n    if (Object(_hasSelection__WEBPACK_IMPORTED_MODULE_1__[\"default\"])() && Object(_isSelectableElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(props.selectableElements)) {\n      Object(_renderTooltip__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({ ...props, isMobile });\n    }\n  }, 10);\n}\n\nfunction handlePointerUp(e, { iconColor, mobileIconSize }) {\n  if (e.pointerType !== \"mouse\" && e.isPrimary) {\n    isMobile = true;\n    Object(_appendIconStyles__WEBPACK_IMPORTED_MODULE_5__[\"appendMobileIconStyle\"])(iconColor, mobileIconSize);\n    window.removeEventListener(\"pointerup\", handlePointerUp);\n  }\n}\n\nfunction attachEvents(props) {\n  window.addEventListener(\"mouseup\", () => handleMouseUp(props), false);\n\n  if (window.onpointerup !== undefined) {\n    window.addEventListener(\"pointerup\", (e) => handlePointerUp(e, props), false);\n  } else if (window.orientation !== undefined) {\n    isMobile = true;\n    Object(_appendIconStyles__WEBPACK_IMPORTED_MODULE_5__[\"appendMobileIconStyle\"])(props);\n  }\n}\n\n\n//# sourceURL=webpack://Sharect/./src/helpers/attachEvents.js?");

/***/ }),

/***/ "./src/helpers/getClosestElement.js":
/*!******************************************!*\
  !*** ./src/helpers/getClosestElement.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getClosestElement; });\nfunction getClosestElement(element, ancestor) {\n  if (Element.prototype.closest) {\n    return element.closest(ancestor);\n  } else {\n    // IE 9+ polyfill\n    let el = element;\n    do {\n      if (el.matches(ancestor)) return el;\n      el = el.parentNode;\n    } while (el !== null && el.nodeType === Node.ELEMENT_NODE);\n    return null;\n  }\n}\n\n\n//# sourceURL=webpack://Sharect/./src/helpers/getClosestElement.js?");

/***/ }),

/***/ "./src/helpers/getIcons.js":
/*!*********************************!*\
  !*** ./src/helpers/getIcons.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getIcons; });\n/* harmony import */ var _Button_ShareButton_ShareButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Button/ShareButton/ShareButton */ \"./src/Button/ShareButton/ShareButton.js\");\n\n\nfunction getIcons({networks, customShareButtons}) {\n  const icons = document.createElement('div')\n  let length = 0\n  for (let n in networks) {\n    if (networks[n] && networks[n].isActive) {\n      let { icon, url, username } = networks[n]\n      icons.appendChild(Object(_Button_ShareButton_ShareButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(icon, url, username))\n      length++\n    }\n  }\n  if (customShareButtons.length > 0) {\n    customShareButtons.forEach(btn => {\n      icons.appendChild(Object(_Button_ShareButton_ShareButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(btn.icon, btn.url))\n      length++\n    })\n  }\n  return { icons, length }\n}\n\n//# sourceURL=webpack://Sharect/./src/helpers/getIcons.js?");

/***/ }),

/***/ "./src/helpers/getTooltipPosition.js":
/*!*******************************************!*\
  !*** ./src/helpers/getTooltipPosition.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getTooltipPosition; });\nfunction getDistanceFromTop() {\n  return (\n    window.pageXOffset ||\n    document.documentElement.scrollTop ||\n    document.body.scrollTop\n  );\n}\n\nfunction getTooltipPosition(props) {\n  const { iconSize, buttonMargin, arrowSize, icons } = props;\n\n  const sel = window\n    .getSelection()\n    .getRangeAt(0)\n    .getBoundingClientRect();\n\n  const buttonSize = iconSize + buttonMargin;\n\n  const distanceFromTop = getDistanceFromTop();\n\n  const top = sel.top + distanceFromTop - buttonSize - arrowSize;\n  const left = sel.left + (sel.width - buttonSize * icons.length) / 2;\n\n  return { top, left };\n}\n\n\n//# sourceURL=webpack://Sharect/./src/helpers/getTooltipPosition.js?");

/***/ }),

/***/ "./src/helpers/hasSelection.js":
/*!*************************************!*\
  !*** ./src/helpers/hasSelection.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return hasSelection; });\nfunction hasSelection() {\n  return !!window.getSelection().toString();\n}\n\n\n//# sourceURL=webpack://Sharect/./src/helpers/hasSelection.js?");

/***/ }),

/***/ "./src/helpers/hasTooltipDrawn.js":
/*!****************************************!*\
  !*** ./src/helpers/hasTooltipDrawn.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return hasTooltipDrawn; });\nfunction hasTooltipDrawn() {\n  return !!document.querySelector(\".sharect\");\n}\n\n\n//# sourceURL=webpack://Sharect/./src/helpers/hasTooltipDrawn.js?");

/***/ }),

/***/ "./src/helpers/isSelectableElement.js":
/*!********************************************!*\
  !*** ./src/helpers/isSelectableElement.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isSelectableElement; });\n/* harmony import */ var _getClosestElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getClosestElement */ \"./src/helpers/getClosestElement.js\");\n\n\nfunction isSelectableElement(selectableElements) {\n  let currentSelectedElement = window.getSelection().baseNode.parentNode\n  return selectableElements.some(ancestor =>\n    Object(_getClosestElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentSelectedElement, ancestor)\n  )\n}\n\n\n//# sourceURL=webpack://Sharect/./src/helpers/isSelectableElement.js?");

/***/ }),

/***/ "./src/helpers/moveTooltip.js":
/*!************************************!*\
  !*** ./src/helpers/moveTooltip.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return moveTooltip; });\n/* harmony import */ var _getTooltipPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTooltipPosition */ \"./src/helpers/getTooltipPosition.js\");\n\n\nfunction moveTooltip(props) {\n  if (props.isMobile) return;\n\n  const { top, left } = Object(_getTooltipPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props);\n  let tooltip = document.querySelector(\".sharect\");\n  tooltip.style.top = `${top}px`;\n  tooltip.style.left = `${left}px`;\n}\n\n\n//# sourceURL=webpack://Sharect/./src/helpers/moveTooltip.js?");

/***/ }),

/***/ "./src/helpers/renderTooltip.js":
/*!**************************************!*\
  !*** ./src/helpers/renderTooltip.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderTooltip; });\n/* harmony import */ var _Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Tooltip/Tooltip */ \"./src/Tooltip/Tooltip.js\");\n/* harmony import */ var _getTooltipPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getTooltipPosition */ \"./src/helpers/getTooltipPosition.js\");\n\n\n\nfunction renderTooltip(props) {\n  const { top, left } = Object(_getTooltipPosition__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(props);\n\n  const tooltipSettings = {\n    ...props,\n    top,\n    left\n  };\n\n  document.body.appendChild(Object(_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tooltipSettings));\n}\n\n\n//# sourceURL=webpack://Sharect/./src/helpers/renderTooltip.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_appendIconStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/appendIconStyles */ \"./src/helpers/appendIconStyles.js\");\n/* harmony import */ var _helpers_attachEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/attachEvents */ \"./src/helpers/attachEvents.js\");\n/* harmony import */ var _helpers_getIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/getIcons */ \"./src/helpers/getIcons.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function() {\n  let _networks = {\n    twitter: {\n      isActive: true,\n      username: '',\n      url:\n        'https://twitter.com/intent/tweet?text=TEXT_SELECTION&via=USERNAME&url=PAGE_URL',\n      icon:\n        '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M8.2,20.2c6.5,0,11.7-5.2,11.8-11.6c0-0.1,0-0.1,0-0.2c0-0.2,0-0.4,0-0.5c0.8-0.6,1.5-1.3,2.1-2.2c-0.8,0.3-1.6,0.6-2.4,0.7c0.9-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-1.6-1.7-4.2-1.7-5.9-0.1c-1.1,1-1.5,2.5-1.2,3.9C8.5,8.7,5.4,7.1,3.3,4.6c-1.1,1.9-0.6,4.3,1.3,5.5c-0.7,0-1.3-0.2-1.9-0.5l0,0c0,2,1.4,3.7,3.3,4.1c-0.6,0.2-1.2,0.2-1.9,0.1c0.5,1.7,2.1,2.8,3.9,2.9c-1.7,1.4-3.9,2-6.1,1.7C3.8,19.5,6,20.2,8.2,20.2\"/></svg>'\n    },\n    facebook: {\n      isActive: true,\n      url:\n        'https://www.facebook.com/sharer/sharer.php?u=PAGE_URL&quote=TEXT_SELECTION',\n      icon:\n        '<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" width=\"24\" height=\"24\" class=\"sharect__icon\"><path d=\"M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M18.4,7.4H17c-0.9,0-1,0.3-1,1l0,1.3 h2.1L18,12h-1.9v7h-3.2v-7h-1.2V9.6h1.2V8.1c0-2,0.8-3.1,3.1-3.1h2.4V7.4z\"/></svg>'\n    }\n  }\n  let _icons = {}\n  let _selectableElements = ['body']\n  let _customShareButtons = []\n  let _backgroundColor = '#333'\n  let _iconColor = '#fff'\n  \n  let _arrowSize = 5\n  let _buttonMargin = 7 * 2\n  let _iconSize = 24\n  let _mobileIconSize = 50\n\n  function config(o) {\n    if (o.twitter !== undefined) _networks.twitter.isActive = o.twitter\n    if (o.facebook !== undefined) _networks.facebook.isActive = o.facebook\n    if (o.twitterUsername) _networks.twitter.username = o.twitterUsername\n    if (o.backgroundColor) _backgroundColor = o.backgroundColor\n    if (o.iconColor) _iconColor = o.iconColor\n    if (o.selectableElements) _selectableElements = o.selectableElements\n\n    return this\n  }\n\n  function appendCustomShareButtons(arrayOfButtonObjects) {\n    _customShareButtons = arrayOfButtonObjects\n    return this\n  }\n\n  function init() {\n    const props = {\n      backgroundColor: _backgroundColor,\n      iconColor: _iconColor,\n      arrowSize: _arrowSize,\n      buttonMargin: _buttonMargin,\n      iconSize: _iconSize,\n      mobileIconSize: _mobileIconSize,\n      selectableElements: _selectableElements,\n      networks: _networks,\n      customShareButtons: _customShareButtons\n    }\n    \n    Object(_helpers_appendIconStyles__WEBPACK_IMPORTED_MODULE_0__[\"appendIconStyle\"])({ ...props })\n    _icons = Object(_helpers_getIcons__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({ ...props })\n    Object(_helpers_attachEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ ...props, icons: _icons })\n    return this\n  }\n\n  return {\n    config,\n    appendCustomShareButtons,\n    init\n  }\n})());\n\n\n//# sourceURL=webpack://Sharect/./src/index.js?");

/***/ })

/******/ });
});