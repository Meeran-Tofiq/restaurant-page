/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/load.about.js":
/*!***************************!*\
  !*** ./src/load.about.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadAboutPage() {
    const mainDiv = document.createElement('div');
    const aboutDiv = document.createElement('div');
    const contactUsDiv = document.createElement('div');

    mainDiv.setAttribute('class', 'main about');
    aboutDiv.setAttribute('class', 'info');
    contactUsDiv.setAttribute('class', 'contact-us');

    aboutDiv.innerHTML = "<h3>Lorem Ipsum es simplemente el texto de relleno</h3>" + 
    "de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno "+
    "estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)";

    contactUsDiv.innerText = "Jimmy: jimmy@thisisarealemail.com, 112328982\n" + 
                             "Billy: billy@thisisarealemail.com, 926738217\n" +
                             "Hanky: hanky@thisisarealemail.com, 271887284";
    mainDiv.append(aboutDiv);
    mainDiv.append(contactUsDiv);

    document.querySelector('.main').replaceWith(mainDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAboutPage);

/***/ }),

/***/ "./src/load.home.js":
/*!**************************!*\
  !*** ./src/load.home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_grill_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/grill.jpg */ "./src/img/grill.jpg");


function loadHomePage() {
    const content = document.createElement('div');
    content.classList.add("content");

    const header = document.createElement("header");
    const logoDiv = document.createElement("div");
    const nav = document.createElement("nav");
    const navList = document.createElement("ul");
    const navHome = document.createElement("li");
    const navRecipes = document.createElement("li");
    const navAbout = document.createElement("li");
    const settings = document.createElement("div");

    const mainDiv = document.createElement("div");
    const imgContainerDiv = document.createElement("div");
    const imgGrill = document.createElement("img");
    const imgCredits = document.createElement("div");
    const infoDiv = document.createElement("div");

    logoDiv.setAttribute("class", "logo");
    nav.setAttribute("class", "nav");
    navHome.classList.add('home-nav');
    navRecipes.classList.add('recipes-nav');
    navAbout.classList.add('about-nav');
    settings.setAttribute("class", "settings");
    mainDiv.setAttribute("class", "main");
    imgContainerDiv.setAttribute("class", "img-container");
    imgGrill.setAttribute("src", _img_grill_jpg__WEBPACK_IMPORTED_MODULE_0__);
    imgGrill.setAttribute("alt", "Picture of a grill, with a lot of grilled food on top of it. Taken by Evan Wise.");
    imgCredits.setAttribute("class", "credits");
    infoDiv.setAttribute("class", "info");

    navHome.innerText = "Home";
    navRecipes.innerText = "Recipes";
    navAbout.innerText = "About";

    imgCredits.innerHTML = 'Photo by <a href="https://unsplash.com/@evanthewise">Evan Wise</a>.';
    infoDiv.innerHTML = "<h3>Lorem Ipsum es simplemente el texto de relleno</h3>" + 
    "de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)" + 
    " desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.";

    header.appendChild(logoDiv);

    navList.appendChild(navHome);
    navList.appendChild(navRecipes);
    navList.appendChild(navAbout);
    nav.appendChild(navList);
    header.appendChild(nav);

    header.appendChild(settings)

    imgContainerDiv.appendChild(imgGrill);
    imgContainerDiv.appendChild(imgCredits);
    imgContainerDiv.appendChild(infoDiv);
    mainDiv.appendChild(imgContainerDiv);

    content.appendChild(header);
    content.appendChild(mainDiv);

    if(document.body.children.length !== 0) {
        document.querySelector('.main').replaceWith(mainDiv);
    } else {
        document.body.append(content);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);

/***/ }),

/***/ "./src/load.recipes.js":
/*!*****************************!*\
  !*** ./src/load.recipes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_grilled_chicken_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/grilled-chicken.jpg */ "./src/img/grilled-chicken.jpg");
/* harmony import */ var _img_grilled_patty_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/grilled-patty.jpg */ "./src/img/grilled-patty.jpg");



function loadRecipesPage() {
    const mainDiv = document.createElement('div');
    const recipesBold = document.createElement('h1');
    const chickenRecipe = document.createElement('div');
    const burgerRecipe = document.createElement('div');
    const comingSoonText = document.createElement('h2');
    const chickenRInfo = document.createElement('div');
    const burgerRInfo = document.createElement('div');

    comingSoonText.innerText = "More recipes coming soon... (not really)";
    
    mainDiv.setAttribute('class', 'main recipes');
    recipesBold.setAttribute('class', 'head');
    chickenRecipe.setAttribute('class', 'recipe');
    burgerRecipe.setAttribute('class', 'recipe');
    comingSoonText.setAttribute('class', 'coming-soon');

    recipesBold.innerText = "Recipes";
    
    const chickenImage = document.createElement('img');
    chickenImage.setAttribute('src', chickenImage);
    chickenImage.setAttribute('alt', 'Photo of a grilled chicken meal. Taken by Sam Moghadam Khamesh.');
    chickenRInfo.innerHTML = "<h3>Lorem Ipsum es simplemente el texto de relleno</h3>" + 
    "de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)";
    
    const burgerImage = document.createElement('img');
    burgerImage.setAttribute('src', burgerImage);
    burgerImage.setAttribute('alt', 'Photo of a grilled burger patty. Taken by Norbert Braun.');
    burgerRInfo.innerHTML = "<h3>Lorem Ipsum es simplemente el texto de relleno</h3>" + 
    "de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)";

    chickenRecipe.append(chickenImage);
    chickenRecipe.append(chickenRInfo);
    burgerRecipe.append(burgerImage);
    burgerRecipe.append(burgerRInfo);

    mainDiv.append(recipesBold);
    mainDiv.append(chickenRecipe);
    mainDiv.append(burgerRecipe);
    mainDiv.append(comingSoonText);

    document.querySelector('.main').replaceWith(mainDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadRecipesPage);

/***/ }),

/***/ "./src/img/grill.jpg":
/*!***************************!*\
  !*** ./src/img/grill.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6dc1399957f4521e61f.jpg";

/***/ }),

/***/ "./src/img/grilled-chicken.jpg":
/*!*************************************!*\
  !*** ./src/img/grilled-chicken.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7766410a86e059991f2b.jpg";

/***/ }),

/***/ "./src/img/grilled-patty.jpg":
/*!***********************************!*\
  !*** ./src/img/grilled-patty.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f1a939ad8511a233ec2.jpg";

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
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load.home */ "./src/load.home.js");
/* harmony import */ var _load_recipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load.recipes */ "./src/load.recipes.js");
/* harmony import */ var _load_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load.about */ "./src/load.about.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");





(0,_load_home__WEBPACK_IMPORTED_MODULE_0__["default"])();


const homeB = document.querySelector(".home-nav");
const recipesB = document.querySelector(".recipes-nav");
const aboutB = document.querySelector(".about-nav");
const navList = [homeB, recipesB, aboutB];

homeB.classList.add('selected');

const unSelectPages = () => {
    navList.forEach(element => {
        element.classList.remove('selected');
    });
};

navList.forEach(element => {
    element.addEventListener('click', () => {
        unSelectPages();
        element.classList.add('selected');
    })
});

homeB.addEventListener('click', _load_home__WEBPACK_IMPORTED_MODULE_0__["default"]);
recipesB.addEventListener('click', _load_recipes__WEBPACK_IMPORTED_MODULE_1__["default"]);
aboutB.addEventListener('click', _load_about__WEBPACK_IMPORTED_MODULE_2__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7OztBQ3RCUzs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDJDQUFLO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRXdCO0FBQ0g7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQzlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQnVDO0FBQ007QUFDSjtBQUNuQjs7QUFFdEIsc0RBQVk7OztBQUdaO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVELGdDQUFnQyxrREFBWTtBQUM1QyxtQ0FBbUMscURBQWU7QUFDbEQsaUNBQWlDLG1EQUFhLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz8xMGFmIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkLmFib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkLmhvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWQucmVjaXBlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImZ1bmN0aW9uIGxvYWRBYm91dFBhZ2UoKSB7XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udGFjdFVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBtYWluRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWFpbiBhYm91dCcpO1xuICAgIGFib3V0RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5mbycpO1xuICAgIGNvbnRhY3RVc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRhY3QtdXMnKTtcblxuICAgIGFib3V0RGl2LmlubmVySFRNTCA9IFwiPGgzPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm88L2gzPlwiICsgXG4gICAgXCJkZSBsYXMgaW1wcmVudGFzIHkgYXJjaGl2b3MgZGUgdGV4dG8uIExvcmVtIElwc3VtIGhhIHNpZG8gZWwgdGV4dG8gZGUgcmVsbGVubyBcIitcbiAgICBcImVzdMOhbmRhciBkZSBsYXMgaW5kdXN0cmlhcyBkZXNkZSBlbCBhw7FvIDE1MDAsIGN1YW5kbyB1biBpbXByZXNvciAoTi4gZGVsIFQuIHBlcnNvbmEgcXVlIHNlIGRlZGljYSBhIGxhIGltcHJlbnRhKVwiO1xuXG4gICAgY29udGFjdFVzRGl2LmlubmVyVGV4dCA9IFwiSmltbXk6IGppbW15QHRoaXNpc2FyZWFsZW1haWwuY29tLCAxMTIzMjg5ODJcXG5cIiArIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJpbGx5OiBiaWxseUB0aGlzaXNhcmVhbGVtYWlsLmNvbSwgOTI2NzM4MjE3XFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkhhbmt5OiBoYW5reUB0aGlzaXNhcmVhbGVtYWlsLmNvbSwgMjcxODg3Mjg0XCI7XG4gICAgbWFpbkRpdi5hcHBlbmQoYWJvdXREaXYpO1xuICAgIG1haW5EaXYuYXBwZW5kKGNvbnRhY3RVc0Rpdik7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpLnJlcGxhY2VXaXRoKG1haW5EaXYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQWJvdXRQYWdlOyIsImltcG9ydCBpbWFnZSBmcm9tICAnLi9pbWcvZ3JpbGwuanBnJztcblxuZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgY29uc3QgbmF2SG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBuYXZSZWNpcGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IG5hdkFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IHNldHRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGltZ0NvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW1nR3JpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IGltZ0NyZWRpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbG9nb0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxvZ29cIik7XG4gICAgbmF2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmF2XCIpO1xuICAgIG5hdkhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZS1uYXYnKTtcbiAgICBuYXZSZWNpcGVzLmNsYXNzTGlzdC5hZGQoJ3JlY2lwZXMtbmF2Jyk7XG4gICAgbmF2QWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtbmF2Jyk7XG4gICAgc2V0dGluZ3Muc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZXR0aW5nc1wiKTtcbiAgICBtYWluRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpblwiKTtcbiAgICBpbWdDb250YWluZXJEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbWctY29udGFpbmVyXCIpO1xuICAgIGltZ0dyaWxsLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWFnZSk7XG4gICAgaW1nR3JpbGwuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGljdHVyZSBvZiBhIGdyaWxsLCB3aXRoIGEgbG90IG9mIGdyaWxsZWQgZm9vZCBvbiB0b3Agb2YgaXQuIFRha2VuIGJ5IEV2YW4gV2lzZS5cIik7XG4gICAgaW1nQ3JlZGl0cy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNyZWRpdHNcIik7XG4gICAgaW5mb0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImluZm9cIik7XG5cbiAgICBuYXZIb21lLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xuICAgIG5hdlJlY2lwZXMuaW5uZXJUZXh0ID0gXCJSZWNpcGVzXCI7XG4gICAgbmF2QWJvdXQuaW5uZXJUZXh0ID0gXCJBYm91dFwiO1xuXG4gICAgaW1nQ3JlZGl0cy5pbm5lckhUTUwgPSAnUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BldmFudGhld2lzZVwiPkV2YW4gV2lzZTwvYT4uJztcbiAgICBpbmZvRGl2LmlubmVySFRNTCA9IFwiPGgzPkxvcmVtIElwc3VtIGVzIHNpbXBsZW1lbnRlIGVsIHRleHRvIGRlIHJlbGxlbm88L2gzPlwiICsgXG4gICAgXCJkZSBsYXMgaW1wcmVudGFzIHkgYXJjaGl2b3MgZGUgdGV4dG8uIExvcmVtIElwc3VtIGhhIHNpZG8gZWwgdGV4dG8gZGUgcmVsbGVubyBlc3TDoW5kYXIgZGUgbGFzIGluZHVzdHJpYXMgZGVzZGUgZWwgYcOxbyAxNTAwLCBjdWFuZG8gdW4gaW1wcmVzb3IgKE4uIGRlbCBULiBwZXJzb25hIHF1ZSBzZSBkZWRpY2EgYSBsYSBpbXByZW50YSlcIiArIFxuICAgIFwiIGRlc2Nvbm9jaWRvIHVzw7MgdW5hIGdhbGVyw61hIGRlIHRleHRvcyB5IGxvcyBtZXpjbMOzIGRlIHRhbCBtYW5lcmEgcXVlIGxvZ3LDsyBoYWNlciB1biBsaWJybyBkZSB0ZXh0b3MgZXNwZWNpbWVuLlwiO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29EaXYpO1xuXG4gICAgbmF2TGlzdC5hcHBlbmRDaGlsZChuYXZIb21lKTtcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKG5hdlJlY2lwZXMpO1xuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobmF2QWJvdXQpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZMaXN0KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzZXR0aW5ncylcblxuICAgIGltZ0NvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChpbWdHcmlsbCk7XG4gICAgaW1nQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGltZ0NyZWRpdHMpO1xuICAgIGltZ0NvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChpbmZvRGl2KTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lckRpdik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuICAgIGlmKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykucmVwbGFjZVdpdGgobWFpbkRpdik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGVudCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZVBhZ2U7IiwiaW1wb3J0IGNoaWNrZW5JbWcgZnJvbSAnLi9pbWcvZ3JpbGxlZC1jaGlja2VuLmpwZyc7XG5pbXBvcnQgYnVyZ2VySW1nIGZyb20gJy4vaW1nL2dyaWxsZWQtcGF0dHkuanBnJztcblxuZnVuY3Rpb24gbG9hZFJlY2lwZXNQYWdlKCkge1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByZWNpcGVzQm9sZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgY2hpY2tlblJlY2lwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ1cmdlclJlY2lwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvbWluZ1Nvb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBjaGlja2VuUkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXJnZXJSSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29taW5nU29vblRleHQuaW5uZXJUZXh0ID0gXCJNb3JlIHJlY2lwZXMgY29taW5nIHNvb24uLi4gKG5vdCByZWFsbHkpXCI7XG4gICAgXG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21haW4gcmVjaXBlcycpO1xuICAgIHJlY2lwZXNCb2xkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZCcpO1xuICAgIGNoaWNrZW5SZWNpcGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZWNpcGUnKTtcbiAgICBidXJnZXJSZWNpcGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZWNpcGUnKTtcbiAgICBjb21pbmdTb29uVGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbWluZy1zb29uJyk7XG5cbiAgICByZWNpcGVzQm9sZC5pbm5lclRleHQgPSBcIlJlY2lwZXNcIjtcbiAgICBcbiAgICBjb25zdCBjaGlja2VuSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjaGlja2VuSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBjaGlja2VuSW1hZ2UpO1xuICAgIGNoaWNrZW5JbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdQaG90byBvZiBhIGdyaWxsZWQgY2hpY2tlbiBtZWFsLiBUYWtlbiBieSBTYW0gTW9naGFkYW0gS2hhbWVzaC4nKTtcbiAgICBjaGlja2VuUkluZm8uaW5uZXJIVE1MID0gXCI8aDM+TG9yZW0gSXBzdW0gZXMgc2ltcGxlbWVudGUgZWwgdGV4dG8gZGUgcmVsbGVubzwvaDM+XCIgKyBcbiAgICBcImRlIGxhcyBpbXByZW50YXMgeSBhcmNoaXZvcyBkZSB0ZXh0by4gTG9yZW0gSXBzdW0gaGEgc2lkbyBlbCB0ZXh0byBkZSByZWxsZW5vIGVzdMOhbmRhciBkZSBsYXMgaW5kdXN0cmlhcyBkZXNkZSBlbCBhw7FvIDE1MDAsIGN1YW5kbyB1biBpbXByZXNvciAoTi4gZGVsIFQuIHBlcnNvbmEgcXVlIHNlIGRlZGljYSBhIGxhIGltcHJlbnRhKVwiO1xuICAgIFxuICAgIGNvbnN0IGJ1cmdlckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYnVyZ2VySW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBidXJnZXJJbWFnZSk7XG4gICAgYnVyZ2VySW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCAnUGhvdG8gb2YgYSBncmlsbGVkIGJ1cmdlciBwYXR0eS4gVGFrZW4gYnkgTm9yYmVydCBCcmF1bi4nKTtcbiAgICBidXJnZXJSSW5mby5pbm5lckhUTUwgPSBcIjxoMz5Mb3JlbSBJcHN1bSBlcyBzaW1wbGVtZW50ZSBlbCB0ZXh0byBkZSByZWxsZW5vPC9oMz5cIiArIFxuICAgIFwiZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBMb3JlbSBJcHN1bSBoYSBzaWRvIGVsIHRleHRvIGRlIHJlbGxlbm8gZXN0w6FuZGFyIGRlIGxhcyBpbmR1c3RyaWFzIGRlc2RlIGVsIGHDsW8gMTUwMCwgY3VhbmRvIHVuIGltcHJlc29yIChOLiBkZWwgVC4gcGVyc29uYSBxdWUgc2UgZGVkaWNhIGEgbGEgaW1wcmVudGEpXCI7XG5cbiAgICBjaGlja2VuUmVjaXBlLmFwcGVuZChjaGlja2VuSW1hZ2UpO1xuICAgIGNoaWNrZW5SZWNpcGUuYXBwZW5kKGNoaWNrZW5SSW5mbyk7XG4gICAgYnVyZ2VyUmVjaXBlLmFwcGVuZChidXJnZXJJbWFnZSk7XG4gICAgYnVyZ2VyUmVjaXBlLmFwcGVuZChidXJnZXJSSW5mbyk7XG5cbiAgICBtYWluRGl2LmFwcGVuZChyZWNpcGVzQm9sZCk7XG4gICAgbWFpbkRpdi5hcHBlbmQoY2hpY2tlblJlY2lwZSk7XG4gICAgbWFpbkRpdi5hcHBlbmQoYnVyZ2VyUmVjaXBlKTtcbiAgICBtYWluRGl2LmFwcGVuZChjb21pbmdTb29uVGV4dCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpLnJlcGxhY2VXaXRoKG1haW5EaXYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUmVjaXBlc1BhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBsb2FkSG9tZVBhZ2UgZnJvbSBcIi4vbG9hZC5ob21lXCI7XG5pbXBvcnQgbG9hZFJlY2lwZXNQYWdlIGZyb20gXCIuL2xvYWQucmVjaXBlc1wiO1xuaW1wb3J0IGxvYWRBYm91dFBhZ2UgZnJvbSBcIi4vbG9hZC5hYm91dFwiO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5sb2FkSG9tZVBhZ2UoKTtcblxuXG5jb25zdCBob21lQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1uYXZcIik7XG5jb25zdCByZWNpcGVzQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVjaXBlcy1uYXZcIik7XG5jb25zdCBhYm91dEIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0LW5hdlwiKTtcbmNvbnN0IG5hdkxpc3QgPSBbaG9tZUIsIHJlY2lwZXNCLCBhYm91dEJdO1xuXG5ob21lQi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG5jb25zdCB1blNlbGVjdFBhZ2VzID0gKCkgPT4ge1xuICAgIG5hdkxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIH0pO1xufTtcblxubmF2TGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHVuU2VsZWN0UGFnZXMoKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIH0pXG59KTtcblxuaG9tZUIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSG9tZVBhZ2UpO1xucmVjaXBlc0IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkUmVjaXBlc1BhZ2UpO1xuYWJvdXRCLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEFib3V0UGFnZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9