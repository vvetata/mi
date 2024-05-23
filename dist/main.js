/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"css/main.min.css\");\n\n//# sourceURL=webpack://mi/./src/sass/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _js_brand_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/brand.js */ \"./src/js/brand.js\");\n/* harmony import */ var _js_brand_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_brand_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_rewievs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/rewievs.js */ \"./src/js/rewievs.js\");\n/* harmony import */ var _js_rewievs_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_rewievs_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_buy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/buy.js */ \"./src/js/buy.js\");\n/* harmony import */ var _js_buy_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_buy_js__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\nlet btnBlack = document.querySelector('.btn__black');\r\nlet btnWhite = document.querySelector('.btn__white');\r\nlet bg = document.querySelector('.wrapper');\r\n\r\n\r\nlet header = document.querySelector('.header');\r\nlet headerTop = document.querySelector('.header__top');\r\nlet headerLogo = document.querySelector('.header__logo');\r\nlet headerMain = document.querySelector('.header__main');\r\nlet btnStyle = document.querySelector('.button__style');\r\nlet headerImage =document.querySelector('.header__img');\r\nlet text = document.querySelectorAll('.text');\r\nlet textArray = Array.from(text);\r\nlet aboutHead = document.querySelector('.about__head');\r\nlet viewHead = document.querySelector('.view__head');\r\nlet textView = document.querySelectorAll('.textMobile');\r\nlet textMobileArray = Array.from(textView);\r\nlet securityHead  = document.querySelector('.security__head');\r\nlet phone = document.querySelector('.app__phone');\r\nlet rewiewsCard = document.querySelectorAll('.rewievs__card');\r\nlet indicatorsRew = document.querySelectorAll('.rewievs__indicator');\r\nlet indicatorsRewArray = Array.from(indicatorsRew);\r\nlet rewiewsCardArray = Array.from(rewiewsCard);\r\nlet buyContainer = document.querySelector('.buy__container');\r\nlet buyBicke = document.querySelector('.buy__bicke');\r\nlet btnStyleBuy = document.querySelector('.button__style_buy');\r\nlet btnWhiteBuy = document.querySelector('.btn__white_buy');\r\nlet btnBlackBuy = document.querySelector('.btn__black_buy');\r\n\r\n\r\nbtnBlack.onclick = () => {\r\n\r\n    bg.style.backgroundColor = '#E0E0E0';\r\n    changeHeaderToBlack();\r\n    changeTextColor('#151515');\r\n    aboutHead.style.color = '#151515';\r\n    viewHead.classList.add('view__head_black');\r\n    changeColorViewCardToBlack();\r\n    securityHead.style.color = '#FF4C0D';\r\n    changeColorPhone ('src', 'images/app/phoneWhite.png');\r\n    changeColorRewievsToBlack();\r\n    buyContainer.style.background = '#F1F1F1';\r\n    changeColorBicke('src', 'images/buy/bickeWhite.png');\r\n    changeBuyToBlack();\r\n}\r\n\r\n\r\nbtnWhite.onclick = () => {\r\n    bg.style.backgroundColor = '';\r\n    changeHeaderToWhite();\r\n    changeTextColor('#F1F1F1');\r\n    aboutHead.style.color = '';\r\n    viewHead.classList.remove('view__head_black');\r\n    changeColorViewCardToWhite();\r\n    securityHead.style.color = '';\r\n    changeColorPhone('src', 'images/app/phoneBlack.png');\r\n    changeColorRewievsToWhite();\r\n    buyContainer.style.background = '';\r\n    changeColorBicke('src', 'images/buy/bickeBlack.png');\r\n    changeBuyToWhite();\r\n}\r\n\r\nlet changeHeaderToBlack = () => {\r\n   headerImage.removeAttribute('src');\r\n    headerImage.setAttribute('src', 'images/header/bickeLineBlack1.png');\r\n    headerTop.classList.add('header__top_black');\r\n    headerLogo.classList.add('header__logo_black');\r\n    headerMain.classList.add('header__main_black');\r\n    btnStyle.classList.add('button__style_black');\r\n    btnWhite.classList.add('btn__white_black');\r\n    btnBlack.classList.add('btn__black_black');\r\n}\r\n\r\nlet changeHeaderToWhite = () => {\r\nheaderImage.removeAttribute('src');\r\n    headerImage.setAttribute('src', 'images/header/bickeLineWhite1.png');\r\n    headerTop.classList.remove('header__top_black');\r\n    headerLogo.classList.remove('header__logo_black');\r\n    headerMain.classList.remove('header__main_black');\r\n    btnStyle.classList.remove('button__style_black');\r\n    btnWhite.classList.remove('btn__white_black');\r\n    btnBlack.classList.remove('btn__black_black');\r\n}\r\n\r\nlet changeTextColor = (color) => {\r\n  for (let t of textArray) {\r\n    t.style.color = color;\r\n  }}\r\n\r\nlet changeColorViewCardToBlack = () => {\r\n  if (window.innerWidth < 480) {\r\n    for (let tM of textMobileArray) {\r\n      tM.style.color = '#151515';\r\n    }} else {\r\n      for (let tM of textMobileArray) {\r\n      tM.style.color = '';\r\n    }}}\r\n\r\nlet changeColorViewCardToWhite = () => {\r\n    for (let tM of textMobileArray) {\r\n      tM.style.color = '';\r\n  }\r\n}\r\n\r\nlet changeColorPhone = (atr, file) => {\r\nphone.removeAttribute(atr);\r\nphone.setAttribute(atr, file);\r\n}\r\n\r\n  let changeColorRewievsToBlack = () => {\r\n    for (let rC of rewiewsCardArray) {\r\n      rC.classList.add('rewievs__card_black');\r\n    }\r\n    for (let iR of indicatorsRewArray) {\r\n      iR.style.color = '#151515';\r\n  }\r\n  }\r\n\r\n  let changeColorRewievsToWhite = () => {\r\n    for (let rC of rewiewsCardArray) {\r\n      rC.classList.remove('rewievs__card_black');\r\n    }\r\n    for (let iR of indicatorsRewArray) {\r\n      iR.style.color = '';\r\n  }\r\n  }\r\n\r\n  let changeColorBicke = (atr, file) => {\r\n    buyBicke.removeAttribute(atr);\r\n    buyBicke.setAttribute(atr, file);\r\n  }\r\n\r\n  let changeBuyToBlack = () => {\r\n    btnStyleBuy.classList.add('button__style_black');\r\n    btnWhiteBuy.classList.add('btn__white_black');\r\n    btnBlackBuy.classList.add('btn__black_black');\r\n  }\r\n\r\n  let changeBuyToWhite = () => {\r\n    btnStyleBuy.classList.remove('button__style_black');\r\n    btnWhiteBuy.classList.remove('btn__white_black');\r\n    btnBlackBuy.classList.remove('btn__black_black');\r\n  }\r\n\r\n  let textBuy = document.querySelectorAll('.textBuy');\r\n  let textBuyArry = Array.from(textBuy);\r\n\r\n  btnWhiteBuy.onclick = () =>{\r\n    changeBuyToWhite();\r\n    changeColorBicke('src', 'images/buy/bickeWhite.png');\r\n    buyContainer.style.background = '';\r\n    for (let tB of textBuyArry) {\r\n      tB.style.color = '';\r\n    }\r\n  }\r\n btnBlackBuy.onclick = () =>{\r\n  changeBuyToBlack();\r\n  changeColorBicke('src', 'images/buy/bickeBlack.png');\r\n  buyContainer.style.background = '#F1F1F1';\r\n  for (let tB of textBuyArry) {\r\n    tB.style.color = '#151515';\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://mi/./src/index.js?");

/***/ }),

/***/ "./src/js/brand.js":
/*!*************************!*\
  !*** ./src/js/brand.js ***!
  \*************************/
/***/ (() => {

eval("let brandBlock = document.querySelector('.brand');\r\nlet brandCard = document.querySelector('.brand___card');\r\nlet wBC = brandCard.clientWidth;\r\nlet hBC = brandCard.clientHeight;\r\nlet brandCards = document.querySelector('.brand__cards');\r\nbrandCards.style.maxHeight = hBC + 'px';\r\nbrandBlock.style.maxHeight = hBC + 'px';\r\nlet indicators = document.querySelectorAll('.brand__indicator');\r\nlet indIndex = 0;\r\nlet position = 0;\r\n\r\nlet cardBrandimg = document.querySelectorAll('.card-brand__image');\r\nlet cardBrandimgArr = Array.from(cardBrandimg);\r\n\r\nif (window.innerWidth > 480) {\r\n    indicators.forEach((ind, index) => {\r\n        ind.addEventListener('click', () => {\r\n            brandCards.scrollTop = hBC * index;\r\n            indIndex = index;\r\n            thisSlide(indIndex);\r\n        })\r\n        })\r\n\r\n    let thisSlide = (index) => {\r\n        for (let ind of indicators) {\r\n            ind.classList.remove('brand__indicator_active');\r\n        }\r\n        indicators[indIndex].classList.add('brand__indicator_active');\r\n}\r\n} else {\r\n    indicators.forEach((ind, index) => {\r\n        ind.addEventListener('click', () => {\r\n            brandCards.scrollLeft = wBC * index;\r\n            indIndex = index;\r\n            thisSlide(indIndex);\r\n        })\r\n        })\r\n    \r\n    let thisSlide = (index) => {\r\n        for (let ind of indicators) {\r\n            ind.classList.remove('brand__indicator_active');\r\n        }\r\n        indicators[indIndex].classList.add('brand__indicator_active');\r\n}\r\n}\r\n\r\nif (window.innerWidth < 480) {\r\n    brandCard.style.width = window.innerWidth + 'px';\r\n    \r\n    /*for (let img of cardBrandimgArr) {\r\n        img.classList.remove('_ibg');\r\n      }*/\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://mi/./src/js/brand.js?");

/***/ }),

/***/ "./src/js/buy.js":
/*!***********************!*\
  !*** ./src/js/buy.js ***!
  \***********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://mi/./src/js/buy.js?");

/***/ }),

/***/ "./src/js/rewievs.js":
/*!***************************!*\
  !*** ./src/js/rewievs.js ***!
  \***************************/
/***/ (() => {

eval("let rewievsBlock = document.querySelector('.rewievs');\r\nlet btnLeft = document.querySelector('.rewievs__btnLeft');\r\nlet btnRight = document.querySelector('.rewievs__btnRight');\r\nlet rewievsCards = document.querySelector('.rewievs__cards');\r\nlet rewievsCard = document.querySelector('.rewievs__card');\r\nlet indicatorsRew = document.querySelectorAll('.rewievs__indicator');\r\nlet indicatorsRewArray = Array.from(indicatorsRew);\r\nlet rewievsAddBtn = document.querySelector('.rewievs__button');\r\n\r\nbtnRight.onclick = () => {\r\n    \r\n    rewievsCards.scrollBy({ \r\n        left: rewievsCard.clientWidth + 40, \r\n        behavior: 'smooth' \r\n      });\r\n    setTimeout(() => {isNotActive();}, 100);\r\n    \r\n}\r\n\r\nbtnLeft.onclick = () => {\r\n    rewievsCards.scrollBy({ \r\n        left: -(rewievsCard.clientWidth + 40), \r\n        behavior: 'smooth' \r\n      })\r\n    setTimeout(() => {isNotActive();}, 400);\r\n}\r\n\r\nindicatorsRew.forEach((ind, index) => {\r\n    ind.addEventListener('click', () => {\r\n        rewievsCards.scrollLeft = (rewievsCard.clientWidth + 40) * index;\r\n        indIndex = index;\r\n        thisSlide(indIndex);\r\n    })\r\n    })\r\n\r\nlet thisSlide = (index) => {\r\n    for (let ind of indicatorsRew) {\r\n        ind.classList.remove('rewievs__indicator_active');\r\n    }\r\n    indicatorsRew[indIndex].classList.add('rewievs__indicator_active');\r\n}\r\n\r\n\r\nlet isNotActive = () => { \r\n    console.log(rewievsCards.scrollLeft);\r\nif (rewievsCards.scrollLeft === 0) {\r\n    btnRight.classList.add('rewievs__btn_active');\r\n    btnLeft.classList.remove('rewievs__btn_active');\r\n} else if (rewievsCards.scrollLeft > 0 && rewievsCards.scrollLeft < rewievsCards.clientWidth) {\r\n    btnLeft.classList.add('rewievs__btn_active');\r\n    btnRight.classList.add('rewievs__btn_active');\r\n} else {\r\n    btnLeft.classList.add('rewievs__btn_active');\r\n    btnRight.classList.remove('rewievs__btn_active');\r\n}}\r\n\r\n\r\nif (window.innerWidth < 480) {\r\n    rewievsBlock.append(rewievsAddBtn);\r\n}\n\n//# sourceURL=webpack://mi/./src/js/rewievs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;