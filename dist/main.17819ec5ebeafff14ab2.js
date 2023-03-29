/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
  {
    iconPath: "images/sun.svg",
    iconAlt: 'sun icon',
    backgroundPath: 'url(images/summer-bg.jpg)',
    audioPath: 'sounds/summer.mp3',
    id: 1
  },
  {
    iconPath: "images/cloud-rain.svg",
    iconAlt: 'rain icon',
    backgroundPath: 'url(images/rainy-bg.jpg)',
    audioPath: 'sounds/rain.mp3',
    id: 2
  },
  {
    iconPath: "images/cloud-snow.svg",
    iconAlt: 'snow icon',
    backgroundPath: 'url(images/winter-bg.jpg)',
    audioPath: 'sounds/winter.mp3',
    id: 3
  }
]);

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
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./data.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./index.scss");



const page = document.querySelector('.page');
const controller = document.querySelector('.volume-slider');
const audioCardTemplate = document.querySelector('.template-audio-card').content.querySelector('.audio-cards__container');
const listAudioCards = document.querySelector('.audio-cards');

let switchingFlag = 0;
console.log('выв');

function createAudioCard(item) {
  const cardElement = audioCardTemplate.cloneNode(true);
  const audioCard = cardElement.querySelector('.audio-cards__card');
  const cardIcon = cardElement.querySelector('.audio-cards__icon');
  const audio = cardElement.querySelector('.audio-cards__audio');
  const pause = 'images/pause.svg';

  audio.src = item.audioPath;
  audio.id = item.id;
  cardIcon.src = item.iconPath;
  cardIcon.setAttribute('alt', item.iconAlt);
  audioCard.style.backgroundImage = item.backgroundPath;

  function playAudio() {
    controller.addEventListener("input", () => {
      audio.volume = controller.value;
    });

    if (switchingFlag === 0) {
      audio.play();
      cardIcon.src = pause;
      switchingFlag = item.id;
    } else if (switchingFlag === item.id) {
      if (!audio.paused) {
        audio.pause();
        cardIcon.src = item.iconPath;
      } else {
        audio.play();
        cardIcon.src = pause;
      }
      switchingFlag = item.id;
    } else {
      const currentAudio = document.getElementById(`${switchingFlag}`);
      document.querySelectorAll('.audio-cards__icon')
        .forEach((i, idx) => {
          if (switchingFlag - 1 === idx) {
            i.src = _data__WEBPACK_IMPORTED_MODULE_0__["default"][idx].iconPath;
          }
        });
      cardIcon.src = pause;
      currentAudio.pause();
      audio.play();
      switchingFlag = item.id;
    }
    page.style.backgroundImage = item.backgroundPath;
  };

  audioCard.addEventListener('click', playAudio);
  return cardElement;
};

_data__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((item) => {
  listAudioCards.append(createAudioCard(item));
});




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xNzgxOWVjNWViZWFmZmYxNGFiMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7VUN0QkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOK0I7QUFDVDs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixzREFBc0QsY0FBYztBQUNwRTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkNBQVM7QUFDN0I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFEQUFpQjtBQUNqQjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5zY3NzPzU0OWYiLCJ3ZWJwYWNrOi8vLy4vZGF0YS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICBpY29uUGF0aDogXCJpbWFnZXMvc3VuLnN2Z1wiLFxuICAgIGljb25BbHQ6ICdzdW4gaWNvbicsXG4gICAgYmFja2dyb3VuZFBhdGg6ICd1cmwoaW1hZ2VzL3N1bW1lci1iZy5qcGcpJyxcbiAgICBhdWRpb1BhdGg6ICdzb3VuZHMvc3VtbWVyLm1wMycsXG4gICAgaWQ6IDFcbiAgfSxcbiAge1xuICAgIGljb25QYXRoOiBcImltYWdlcy9jbG91ZC1yYWluLnN2Z1wiLFxuICAgIGljb25BbHQ6ICdyYWluIGljb24nLFxuICAgIGJhY2tncm91bmRQYXRoOiAndXJsKGltYWdlcy9yYWlueS1iZy5qcGcpJyxcbiAgICBhdWRpb1BhdGg6ICdzb3VuZHMvcmFpbi5tcDMnLFxuICAgIGlkOiAyXG4gIH0sXG4gIHtcbiAgICBpY29uUGF0aDogXCJpbWFnZXMvY2xvdWQtc25vdy5zdmdcIixcbiAgICBpY29uQWx0OiAnc25vdyBpY29uJyxcbiAgICBiYWNrZ3JvdW5kUGF0aDogJ3VybChpbWFnZXMvd2ludGVyLWJnLmpwZyknLFxuICAgIGF1ZGlvUGF0aDogJ3NvdW5kcy93aW50ZXIubXAzJyxcbiAgICBpZDogM1xuICB9XG5dOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNhcmRzSW5mbyBmcm9tICcuL2RhdGEnO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKTtcbmNvbnN0IGNvbnRyb2xsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudm9sdW1lLXNsaWRlcicpO1xuY29uc3QgYXVkaW9DYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGUtYXVkaW8tY2FyZCcpLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLWNhcmRzX19jb250YWluZXInKTtcbmNvbnN0IGxpc3RBdWRpb0NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLWNhcmRzJyk7XG5cbmxldCBzd2l0Y2hpbmdGbGFnID0gMDtcbmNvbnNvbGUubG9nKCfQstGL0LInKTtcblxuZnVuY3Rpb24gY3JlYXRlQXVkaW9DYXJkKGl0ZW0pIHtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBhdWRpb0NhcmRUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gIGNvbnN0IGF1ZGlvQ2FyZCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1jYXJkc19fY2FyZCcpO1xuICBjb25zdCBjYXJkSWNvbiA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1jYXJkc19faWNvbicpO1xuICBjb25zdCBhdWRpbyA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1jYXJkc19fYXVkaW8nKTtcbiAgY29uc3QgcGF1c2UgPSAnaW1hZ2VzL3BhdXNlLnN2Zyc7XG5cbiAgYXVkaW8uc3JjID0gaXRlbS5hdWRpb1BhdGg7XG4gIGF1ZGlvLmlkID0gaXRlbS5pZDtcbiAgY2FyZEljb24uc3JjID0gaXRlbS5pY29uUGF0aDtcbiAgY2FyZEljb24uc2V0QXR0cmlidXRlKCdhbHQnLCBpdGVtLmljb25BbHQpO1xuICBhdWRpb0NhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaXRlbS5iYWNrZ3JvdW5kUGF0aDtcblxuICBmdW5jdGlvbiBwbGF5QXVkaW8oKSB7XG4gICAgY29udHJvbGxlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgYXVkaW8udm9sdW1lID0gY29udHJvbGxlci52YWx1ZTtcbiAgICB9KTtcblxuICAgIGlmIChzd2l0Y2hpbmdGbGFnID09PSAwKSB7XG4gICAgICBhdWRpby5wbGF5KCk7XG4gICAgICBjYXJkSWNvbi5zcmMgPSBwYXVzZTtcbiAgICAgIHN3aXRjaGluZ0ZsYWcgPSBpdGVtLmlkO1xuICAgIH0gZWxzZSBpZiAoc3dpdGNoaW5nRmxhZyA9PT0gaXRlbS5pZCkge1xuICAgICAgaWYgKCFhdWRpby5wYXVzZWQpIHtcbiAgICAgICAgYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgY2FyZEljb24uc3JjID0gaXRlbS5pY29uUGF0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgY2FyZEljb24uc3JjID0gcGF1c2U7XG4gICAgICB9XG4gICAgICBzd2l0Y2hpbmdGbGFnID0gaXRlbS5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY3VycmVudEF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7c3dpdGNoaW5nRmxhZ31gKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hdWRpby1jYXJkc19faWNvbicpXG4gICAgICAgIC5mb3JFYWNoKChpLCBpZHgpID0+IHtcbiAgICAgICAgICBpZiAoc3dpdGNoaW5nRmxhZyAtIDEgPT09IGlkeCkge1xuICAgICAgICAgICAgaS5zcmMgPSBjYXJkc0luZm9baWR4XS5pY29uUGF0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgY2FyZEljb24uc3JjID0gcGF1c2U7XG4gICAgICBjdXJyZW50QXVkaW8ucGF1c2UoKTtcbiAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgIHN3aXRjaGluZ0ZsYWcgPSBpdGVtLmlkO1xuICAgIH1cbiAgICBwYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGl0ZW0uYmFja2dyb3VuZFBhdGg7XG4gIH07XG5cbiAgYXVkaW9DYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheUF1ZGlvKTtcbiAgcmV0dXJuIGNhcmRFbGVtZW50O1xufTtcblxuY2FyZHNJbmZvLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgbGlzdEF1ZGlvQ2FyZHMuYXBwZW5kKGNyZWF0ZUF1ZGlvQ2FyZChpdGVtKSk7XG59KTtcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==