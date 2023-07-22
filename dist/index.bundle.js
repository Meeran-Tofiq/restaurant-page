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
    imgGrill.setAttribute("src", "../src/img/grill.jpg");
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
    chickenImage.setAttribute('src', '../src/img/grilled-chicken.jpg');
    chickenImage.setAttribute('alt', 'Photo of a grilled chicken meal. Taken by Sam Moghadam Khamesh.');
    chickenRInfo.innerHTML = "<h3>Lorem Ipsum es simplemente el texto de relleno</h3>" + 
    "de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)";
    
    const burgerImage = document.createElement('img');
    burgerImage.setAttribute('src', '../src/img/grilled-patty.jpg');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7O0FDdEI1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7O0FDbEUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZTs7Ozs7O1VDNUM5QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ007QUFDSjtBQUNuQjs7QUFFdEIsc0RBQVk7OztBQUdaO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVELGdDQUFnQyxrREFBWTtBQUM1QyxtQ0FBbUMscURBQWU7QUFDbEQsaUNBQWlDLG1EQUFhLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz8xMGFmIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkLmFib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkLmhvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWQucmVjaXBlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZnVuY3Rpb24gbG9hZEFib3V0UGFnZSgpIHtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250YWN0VXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYWluIGFib3V0Jyk7XG4gICAgYWJvdXREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbmZvJyk7XG4gICAgY29udGFjdFVzRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGFjdC11cycpO1xuXG4gICAgYWJvdXREaXYuaW5uZXJIVE1MID0gXCI8aDM+TG9yZW0gSXBzdW0gZXMgc2ltcGxlbWVudGUgZWwgdGV4dG8gZGUgcmVsbGVubzwvaDM+XCIgKyBcbiAgICBcImRlIGxhcyBpbXByZW50YXMgeSBhcmNoaXZvcyBkZSB0ZXh0by4gTG9yZW0gSXBzdW0gaGEgc2lkbyBlbCB0ZXh0byBkZSByZWxsZW5vIFwiK1xuICAgIFwiZXN0w6FuZGFyIGRlIGxhcyBpbmR1c3RyaWFzIGRlc2RlIGVsIGHDsW8gMTUwMCwgY3VhbmRvIHVuIGltcHJlc29yIChOLiBkZWwgVC4gcGVyc29uYSBxdWUgc2UgZGVkaWNhIGEgbGEgaW1wcmVudGEpXCI7XG5cbiAgICBjb250YWN0VXNEaXYuaW5uZXJUZXh0ID0gXCJKaW1teTogamltbXlAdGhpc2lzYXJlYWxlbWFpbC5jb20sIDExMjMyODk4MlxcblwiICsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQmlsbHk6IGJpbGx5QHRoaXNpc2FyZWFsZW1haWwuY29tLCA5MjY3MzgyMTdcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSGFua3k6IGhhbmt5QHRoaXNpc2FyZWFsZW1haWwuY29tLCAyNzE4ODcyODRcIjtcbiAgICBtYWluRGl2LmFwcGVuZChhYm91dERpdik7XG4gICAgbWFpbkRpdi5hcHBlbmQoY29udGFjdFVzRGl2KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykucmVwbGFjZVdpdGgobWFpbkRpdik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRBYm91dFBhZ2U7IiwiZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgY29uc3QgbmF2SG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBuYXZSZWNpcGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IG5hdkFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IHNldHRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGltZ0NvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW1nR3JpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IGltZ0NyZWRpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbG9nb0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxvZ29cIik7XG4gICAgbmF2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmF2XCIpO1xuICAgIG5hdkhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZS1uYXYnKTtcbiAgICBuYXZSZWNpcGVzLmNsYXNzTGlzdC5hZGQoJ3JlY2lwZXMtbmF2Jyk7XG4gICAgbmF2QWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtbmF2Jyk7XG4gICAgc2V0dGluZ3Muc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZXR0aW5nc1wiKTtcbiAgICBtYWluRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpblwiKTtcbiAgICBpbWdDb250YWluZXJEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbWctY29udGFpbmVyXCIpO1xuICAgIGltZ0dyaWxsLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWcvZ3JpbGwuanBnXCIpO1xuICAgIGltZ0dyaWxsLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBpY3R1cmUgb2YgYSBncmlsbCwgd2l0aCBhIGxvdCBvZiBncmlsbGVkIGZvb2Qgb24gdG9wIG9mIGl0LiBUYWtlbiBieSBFdmFuIFdpc2UuXCIpO1xuICAgIGltZ0NyZWRpdHMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjcmVkaXRzXCIpO1xuICAgIGluZm9EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbmZvXCIpO1xuXG4gICAgbmF2SG9tZS5pbm5lclRleHQgPSBcIkhvbWVcIjtcbiAgICBuYXZSZWNpcGVzLmlubmVyVGV4dCA9IFwiUmVjaXBlc1wiO1xuICAgIG5hdkFib3V0LmlubmVyVGV4dCA9IFwiQWJvdXRcIjtcblxuICAgIGltZ0NyZWRpdHMuaW5uZXJIVE1MID0gJ1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AZXZhbnRoZXdpc2VcIj5FdmFuIFdpc2U8L2E+Lic7XG4gICAgaW5mb0Rpdi5pbm5lckhUTUwgPSBcIjxoMz5Mb3JlbSBJcHN1bSBlcyBzaW1wbGVtZW50ZSBlbCB0ZXh0byBkZSByZWxsZW5vPC9oMz5cIiArIFxuICAgIFwiZGUgbGFzIGltcHJlbnRhcyB5IGFyY2hpdm9zIGRlIHRleHRvLiBMb3JlbSBJcHN1bSBoYSBzaWRvIGVsIHRleHRvIGRlIHJlbGxlbm8gZXN0w6FuZGFyIGRlIGxhcyBpbmR1c3RyaWFzIGRlc2RlIGVsIGHDsW8gMTUwMCwgY3VhbmRvIHVuIGltcHJlc29yIChOLiBkZWwgVC4gcGVyc29uYSBxdWUgc2UgZGVkaWNhIGEgbGEgaW1wcmVudGEpXCIgKyBcbiAgICBcIiBkZXNjb25vY2lkbyB1c8OzIHVuYSBnYWxlcsOtYSBkZSB0ZXh0b3MgeSBsb3MgbWV6Y2zDsyBkZSB0YWwgbWFuZXJhIHF1ZSBsb2dyw7MgaGFjZXIgdW4gbGlicm8gZGUgdGV4dG9zIGVzcGVjaW1lbi5cIjtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvRGl2KTtcblxuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobmF2SG9tZSk7XG4gICAgbmF2TGlzdC5hcHBlbmRDaGlsZChuYXZSZWNpcGVzKTtcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKG5hdkFib3V0KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2V0dGluZ3MpXG5cbiAgICBpbWdDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoaW1nR3JpbGwpO1xuICAgIGltZ0NvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChpbWdDcmVkaXRzKTtcbiAgICBpbWdDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChpbWdDb250YWluZXJEaXYpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG5cbiAgICBpZihkb2N1bWVudC5ib2R5LmNoaWxkcmVuLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpLnJlcGxhY2VXaXRoKG1haW5EaXYpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRlbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWVQYWdlOyIsImZ1bmN0aW9uIGxvYWRSZWNpcGVzUGFnZSgpIHtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcmVjaXBlc0JvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGNoaWNrZW5SZWNpcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXJnZXJSZWNpcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb21pbmdTb29uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgY2hpY2tlblJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnVyZ2VyUkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbWluZ1Nvb25UZXh0LmlubmVyVGV4dCA9IFwiTW9yZSByZWNpcGVzIGNvbWluZyBzb29uLi4uIChub3QgcmVhbGx5KVwiO1xuICAgIFxuICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYWluIHJlY2lwZXMnKTtcbiAgICByZWNpcGVzQm9sZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWQnKTtcbiAgICBjaGlja2VuUmVjaXBlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmVjaXBlJyk7XG4gICAgYnVyZ2VyUmVjaXBlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmVjaXBlJyk7XG4gICAgY29taW5nU29vblRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb21pbmctc29vbicpO1xuXG4gICAgcmVjaXBlc0JvbGQuaW5uZXJUZXh0ID0gXCJSZWNpcGVzXCI7XG4gICAgXG4gICAgY29uc3QgY2hpY2tlbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2hpY2tlbkltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWcvZ3JpbGxlZC1jaGlja2VuLmpwZycpO1xuICAgIGNoaWNrZW5JbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdQaG90byBvZiBhIGdyaWxsZWQgY2hpY2tlbiBtZWFsLiBUYWtlbiBieSBTYW0gTW9naGFkYW0gS2hhbWVzaC4nKTtcbiAgICBjaGlja2VuUkluZm8uaW5uZXJIVE1MID0gXCI8aDM+TG9yZW0gSXBzdW0gZXMgc2ltcGxlbWVudGUgZWwgdGV4dG8gZGUgcmVsbGVubzwvaDM+XCIgKyBcbiAgICBcImRlIGxhcyBpbXByZW50YXMgeSBhcmNoaXZvcyBkZSB0ZXh0by4gTG9yZW0gSXBzdW0gaGEgc2lkbyBlbCB0ZXh0byBkZSByZWxsZW5vIGVzdMOhbmRhciBkZSBsYXMgaW5kdXN0cmlhcyBkZXNkZSBlbCBhw7FvIDE1MDAsIGN1YW5kbyB1biBpbXByZXNvciAoTi4gZGVsIFQuIHBlcnNvbmEgcXVlIHNlIGRlZGljYSBhIGxhIGltcHJlbnRhKVwiO1xuICAgIFxuICAgIGNvbnN0IGJ1cmdlckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYnVyZ2VySW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltZy9ncmlsbGVkLXBhdHR5LmpwZycpO1xuICAgIGJ1cmdlckltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1Bob3RvIG9mIGEgZ3JpbGxlZCBidXJnZXIgcGF0dHkuIFRha2VuIGJ5IE5vcmJlcnQgQnJhdW4uJyk7XG4gICAgYnVyZ2VyUkluZm8uaW5uZXJIVE1MID0gXCI8aDM+TG9yZW0gSXBzdW0gZXMgc2ltcGxlbWVudGUgZWwgdGV4dG8gZGUgcmVsbGVubzwvaDM+XCIgKyBcbiAgICBcImRlIGxhcyBpbXByZW50YXMgeSBhcmNoaXZvcyBkZSB0ZXh0by4gTG9yZW0gSXBzdW0gaGEgc2lkbyBlbCB0ZXh0byBkZSByZWxsZW5vIGVzdMOhbmRhciBkZSBsYXMgaW5kdXN0cmlhcyBkZXNkZSBlbCBhw7FvIDE1MDAsIGN1YW5kbyB1biBpbXByZXNvciAoTi4gZGVsIFQuIHBlcnNvbmEgcXVlIHNlIGRlZGljYSBhIGxhIGltcHJlbnRhKVwiO1xuXG4gICAgY2hpY2tlblJlY2lwZS5hcHBlbmQoY2hpY2tlbkltYWdlKTtcbiAgICBjaGlja2VuUmVjaXBlLmFwcGVuZChjaGlja2VuUkluZm8pO1xuICAgIGJ1cmdlclJlY2lwZS5hcHBlbmQoYnVyZ2VySW1hZ2UpO1xuICAgIGJ1cmdlclJlY2lwZS5hcHBlbmQoYnVyZ2VyUkluZm8pO1xuXG4gICAgbWFpbkRpdi5hcHBlbmQocmVjaXBlc0JvbGQpO1xuICAgIG1haW5EaXYuYXBwZW5kKGNoaWNrZW5SZWNpcGUpO1xuICAgIG1haW5EaXYuYXBwZW5kKGJ1cmdlclJlY2lwZSk7XG4gICAgbWFpbkRpdi5hcHBlbmQoY29taW5nU29vblRleHQpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKS5yZXBsYWNlV2l0aChtYWluRGl2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFJlY2lwZXNQYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRIb21lUGFnZSBmcm9tIFwiLi9sb2FkLmhvbWVcIjtcbmltcG9ydCBsb2FkUmVjaXBlc1BhZ2UgZnJvbSBcIi4vbG9hZC5yZWNpcGVzXCI7XG5pbXBvcnQgbG9hZEFib3V0UGFnZSBmcm9tIFwiLi9sb2FkLmFib3V0XCI7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmxvYWRIb21lUGFnZSgpO1xuXG5cbmNvbnN0IGhvbWVCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLW5hdlwiKTtcbmNvbnN0IHJlY2lwZXNCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWNpcGVzLW5hdlwiKTtcbmNvbnN0IGFib3V0QiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXQtbmF2XCIpO1xuY29uc3QgbmF2TGlzdCA9IFtob21lQiwgcmVjaXBlc0IsIGFib3V0Ql07XG5cbmhvbWVCLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cbmNvbnN0IHVuU2VsZWN0UGFnZXMgPSAoKSA9PiB7XG4gICAgbmF2TGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfSk7XG59O1xuXG5uYXZMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdW5TZWxlY3RQYWdlcygpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgfSlcbn0pO1xuXG5ob21lQi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRIb21lUGFnZSk7XG5yZWNpcGVzQi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRSZWNpcGVzUGFnZSk7XG5hYm91dEIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQWJvdXRQYWdlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=