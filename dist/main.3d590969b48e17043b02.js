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

/***/ "./data.ts":
/*!*****************!*\
  !*** ./data.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cardsInfo = void 0;
exports.cardsInfo = [
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
];


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
var exports = __webpack_exports__;
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const data_1 = __webpack_require__(/*! ./data */ "./data.ts");
__webpack_require__(/*! ./index.scss */ "./index.scss");
const page = document.querySelector('.page');
const controller = document.querySelector('.volume-slider');
const templateContainer = document.querySelector('.template-audio-card');
const audioCardTemplate = templateContainer.content.querySelector('.audio-cards__container');
const listAudioCards = document.querySelector('.audio-cards');
let switchingFlag = 0;
function createAudioCard(item) {
    const cardElement = audioCardTemplate.cloneNode(true);
    const audioCard = cardElement.querySelector('.audio-cards__card');
    const cardIcon = cardElement.querySelector('.audio-cards__icon');
    const audio = cardElement.querySelector('.audio-cards__audio');
    const pause = 'images/pause.svg';
    audio.id = String(item.id);
    audio.src = item.audioPath;
    cardIcon.src = item.iconPath;
    cardIcon.setAttribute('alt', item.iconAlt);
    audioCard.style.backgroundImage = item.backgroundPath;
    function playAudio() {
        controller.addEventListener("input", () => {
            const controllerValue = Number(controller.value);
            audio.volume = controllerValue;
        });
        if (switchingFlag === 0) {
            audio.play();
            cardIcon.src = pause;
            switchingFlag = item.id;
        }
        else if (switchingFlag === item.id) {
            if (!audio.paused) {
                audio.pause();
                cardIcon.src = item.iconPath;
            }
            else {
                audio.play();
                cardIcon.src = pause;
            }
            switchingFlag = item.id;
        }
        else {
            const currentAudio = document.getElementById(`${switchingFlag}`);
            const allIcons = document.querySelectorAll('.audio-cards__icon');
            allIcons.forEach((i, idx) => {
                if (switchingFlag - 1 === idx) {
                    i.src = data_1.cardsInfo[idx].iconPath;
                }
            });
            cardIcon.src = pause;
            currentAudio.pause();
            audio.play();
            switchingFlag = item.id;
        }
        page.style.backgroundImage = item.backgroundPath;
    }
    audioCard.addEventListener('click', playAudio);
    return cardElement;
}
data_1.cardsInfo.forEach((item) => {
    listAudioCards.append(createAudioCard(item));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zZDU5MDk2OWI0OGUxNzA0M2IwMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDekJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxlQUFlLG1CQUFPLENBQUMseUJBQVE7QUFDL0IsbUJBQU8sQ0FBQyxrQ0FBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxjQUFjO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LnNjc3M/NTQ5ZiIsIndlYnBhY2s6Ly8vLi9kYXRhLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2FyZHNJbmZvID0gdm9pZCAwO1xuZXhwb3J0cy5jYXJkc0luZm8gPSBbXG4gICAge1xuICAgICAgICBpY29uUGF0aDogXCJpbWFnZXMvc3VuLnN2Z1wiLFxuICAgICAgICBpY29uQWx0OiAnc3VuIGljb24nLFxuICAgICAgICBiYWNrZ3JvdW5kUGF0aDogJ3VybChpbWFnZXMvc3VtbWVyLWJnLmpwZyknLFxuICAgICAgICBhdWRpb1BhdGg6ICdzb3VuZHMvc3VtbWVyLm1wMycsXG4gICAgICAgIGlkOiAxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGljb25QYXRoOiBcImltYWdlcy9jbG91ZC1yYWluLnN2Z1wiLFxuICAgICAgICBpY29uQWx0OiAncmFpbiBpY29uJyxcbiAgICAgICAgYmFja2dyb3VuZFBhdGg6ICd1cmwoaW1hZ2VzL3JhaW55LWJnLmpwZyknLFxuICAgICAgICBhdWRpb1BhdGg6ICdzb3VuZHMvcmFpbi5tcDMnLFxuICAgICAgICBpZDogMlxuICAgIH0sXG4gICAge1xuICAgICAgICBpY29uUGF0aDogXCJpbWFnZXMvY2xvdWQtc25vdy5zdmdcIixcbiAgICAgICAgaWNvbkFsdDogJ3Nub3cgaWNvbicsXG4gICAgICAgIGJhY2tncm91bmRQYXRoOiAndXJsKGltYWdlcy93aW50ZXItYmcuanBnKScsXG4gICAgICAgIGF1ZGlvUGF0aDogJ3NvdW5kcy93aW50ZXIubXAzJyxcbiAgICAgICAgaWQ6IDNcbiAgICB9XG5dO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZGF0YV8xID0gcmVxdWlyZShcIi4vZGF0YVwiKTtcbnJlcXVpcmUoXCIuL2luZGV4LnNjc3NcIik7XG5jb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKTtcbmNvbnN0IGNvbnRyb2xsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudm9sdW1lLXNsaWRlcicpO1xuY29uc3QgdGVtcGxhdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGUtYXVkaW8tY2FyZCcpO1xuY29uc3QgYXVkaW9DYXJkVGVtcGxhdGUgPSB0ZW1wbGF0ZUNvbnRhaW5lci5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1jYXJkc19fY29udGFpbmVyJyk7XG5jb25zdCBsaXN0QXVkaW9DYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1jYXJkcycpO1xubGV0IHN3aXRjaGluZ0ZsYWcgPSAwO1xuZnVuY3Rpb24gY3JlYXRlQXVkaW9DYXJkKGl0ZW0pIHtcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGF1ZGlvQ2FyZFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICBjb25zdCBhdWRpb0NhcmQgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8tY2FyZHNfX2NhcmQnKTtcbiAgICBjb25zdCBjYXJkSWNvbiA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1jYXJkc19faWNvbicpO1xuICAgIGNvbnN0IGF1ZGlvID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLWNhcmRzX19hdWRpbycpO1xuICAgIGNvbnN0IHBhdXNlID0gJ2ltYWdlcy9wYXVzZS5zdmcnO1xuICAgIGF1ZGlvLmlkID0gU3RyaW5nKGl0ZW0uaWQpO1xuICAgIGF1ZGlvLnNyYyA9IGl0ZW0uYXVkaW9QYXRoO1xuICAgIGNhcmRJY29uLnNyYyA9IGl0ZW0uaWNvblBhdGg7XG4gICAgY2FyZEljb24uc2V0QXR0cmlidXRlKCdhbHQnLCBpdGVtLmljb25BbHQpO1xuICAgIGF1ZGlvQ2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpdGVtLmJhY2tncm91bmRQYXRoO1xuICAgIGZ1bmN0aW9uIHBsYXlBdWRpbygpIHtcbiAgICAgICAgY29udHJvbGxlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udHJvbGxlclZhbHVlID0gTnVtYmVyKGNvbnRyb2xsZXIudmFsdWUpO1xuICAgICAgICAgICAgYXVkaW8udm9sdW1lID0gY29udHJvbGxlclZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHN3aXRjaGluZ0ZsYWcgPT09IDApIHtcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgICAgIGNhcmRJY29uLnNyYyA9IHBhdXNlO1xuICAgICAgICAgICAgc3dpdGNoaW5nRmxhZyA9IGl0ZW0uaWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3dpdGNoaW5nRmxhZyA9PT0gaXRlbS5pZCkge1xuICAgICAgICAgICAgaWYgKCFhdWRpby5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICBhdWRpby5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIGNhcmRJY29uLnNyYyA9IGl0ZW0uaWNvblBhdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhdWRpby5wbGF5KCk7XG4gICAgICAgICAgICAgICAgY2FyZEljb24uc3JjID0gcGF1c2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2hpbmdGbGFnID0gaXRlbS5pZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRBdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3N3aXRjaGluZ0ZsYWd9YCk7XG4gICAgICAgICAgICBjb25zdCBhbGxJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hdWRpby1jYXJkc19faWNvbicpO1xuICAgICAgICAgICAgYWxsSWNvbnMuZm9yRWFjaCgoaSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN3aXRjaGluZ0ZsYWcgLSAxID09PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgaS5zcmMgPSBkYXRhXzEuY2FyZHNJbmZvW2lkeF0uaWNvblBhdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXJkSWNvbi5zcmMgPSBwYXVzZTtcbiAgICAgICAgICAgIGN1cnJlbnRBdWRpby5wYXVzZSgpO1xuICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICAgICAgc3dpdGNoaW5nRmxhZyA9IGl0ZW0uaWQ7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpdGVtLmJhY2tncm91bmRQYXRoO1xuICAgIH1cbiAgICBhdWRpb0NhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5QXVkaW8pO1xuICAgIHJldHVybiBjYXJkRWxlbWVudDtcbn1cbmRhdGFfMS5jYXJkc0luZm8uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGxpc3RBdWRpb0NhcmRzLmFwcGVuZChjcmVhdGVBdWRpb0NhcmQoaXRlbSkpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=