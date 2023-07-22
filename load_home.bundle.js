/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**************************!*\
  !*** ./src/load.home.js ***!
  \**************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZF9ob21lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWQuaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgbG9nb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IG5hdkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgbmF2UmVjaXBlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBuYXZBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbWdDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGltZ0dyaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb25zdCBpbWdDcmVkaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGxvZ29EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsb2dvXCIpO1xuICAgIG5hdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdlwiKTtcbiAgICBuYXZIb21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUtbmF2Jyk7XG4gICAgbmF2UmVjaXBlcy5jbGFzc0xpc3QuYWRkKCdyZWNpcGVzLW5hdicpO1xuICAgIG5hdkFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LW5hdicpO1xuICAgIHNldHRpbmdzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2V0dGluZ3NcIik7XG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5cIik7XG4gICAgaW1nQ29udGFpbmVyRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW1nLWNvbnRhaW5lclwiKTtcbiAgICBpbWdHcmlsbC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvaW1nL2dyaWxsLmpwZ1wiKTtcbiAgICBpbWdHcmlsbC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQaWN0dXJlIG9mIGEgZ3JpbGwsIHdpdGggYSBsb3Qgb2YgZ3JpbGxlZCBmb29kIG9uIHRvcCBvZiBpdC4gVGFrZW4gYnkgRXZhbiBXaXNlLlwiKTtcbiAgICBpbWdDcmVkaXRzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY3JlZGl0c1wiKTtcbiAgICBpbmZvRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5mb1wiKTtcblxuICAgIG5hdkhvbWUuaW5uZXJUZXh0ID0gXCJIb21lXCI7XG4gICAgbmF2UmVjaXBlcy5pbm5lclRleHQgPSBcIlJlY2lwZXNcIjtcbiAgICBuYXZBYm91dC5pbm5lclRleHQgPSBcIkFib3V0XCI7XG5cbiAgICBpbWdDcmVkaXRzLmlubmVySFRNTCA9ICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGV2YW50aGV3aXNlXCI+RXZhbiBXaXNlPC9hPi4nO1xuICAgIGluZm9EaXYuaW5uZXJIVE1MID0gXCI8aDM+TG9yZW0gSXBzdW0gZXMgc2ltcGxlbWVudGUgZWwgdGV4dG8gZGUgcmVsbGVubzwvaDM+XCIgKyBcbiAgICBcImRlIGxhcyBpbXByZW50YXMgeSBhcmNoaXZvcyBkZSB0ZXh0by4gTG9yZW0gSXBzdW0gaGEgc2lkbyBlbCB0ZXh0byBkZSByZWxsZW5vIGVzdMOhbmRhciBkZSBsYXMgaW5kdXN0cmlhcyBkZXNkZSBlbCBhw7FvIDE1MDAsIGN1YW5kbyB1biBpbXByZXNvciAoTi4gZGVsIFQuIHBlcnNvbmEgcXVlIHNlIGRlZGljYSBhIGxhIGltcHJlbnRhKVwiICsgXG4gICAgXCIgZGVzY29ub2NpZG8gdXPDsyB1bmEgZ2FsZXLDrWEgZGUgdGV4dG9zIHkgbG9zIG1lemNsw7MgZGUgdGFsIG1hbmVyYSBxdWUgbG9ncsOzIGhhY2VyIHVuIGxpYnJvIGRlIHRleHRvcyBlc3BlY2ltZW4uXCI7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0Rpdik7XG5cbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKG5hdkhvbWUpO1xuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobmF2UmVjaXBlcyk7XG4gICAgbmF2TGlzdC5hcHBlbmRDaGlsZChuYXZBYm91dCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdkxpc3QpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHNldHRpbmdzKVxuXG4gICAgaW1nQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGltZ0dyaWxsKTtcbiAgICBpbWdDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoaW1nQ3JlZGl0cyk7XG4gICAgaW1nQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGluZm9EaXYpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyRGl2KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuXG4gICAgaWYoZG9jdW1lbnQuYm9keS5jaGlsZHJlbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKS5yZXBsYWNlV2l0aChtYWluRGl2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb250ZW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lUGFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=