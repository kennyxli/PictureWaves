/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");

document.addEventListener('DOMContentLoaded', function () {
  var canvasEl = document.getElementById('canvas');
  canvasEl.width = window.innerWidth - 160;
  canvasEl.height = window.innerHeight - 220;
  var ctx = canvasEl.getContext('2d');
  var bgColor = 'white';
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  var grad = ctx.createLinearGradient(0, 0, canvasEl.width, canvasEl.height);
  grad.addColorStop(0, "yellow");
  grad.addColorStop(1, "salmon");

  document.getElementById("color1").onclick = function () {
    handleColor1();
  };

  function handleColor1() {
    grad = ctx.createLinearGradient(0, 0, canvasEl.width, canvasEl.height);
    grad.addColorStop(0.01, "yellow");
    grad.addColorStop(1, "red");
  }

  document.getElementById("color2").onclick = function () {
    handleColor2();
  };

  function handleColor2() {
    grad = ctx.createLinearGradient(0, 0, canvasEl.width, canvasEl.height);
    grad.addColorStop(1, "violet");
    grad.addColorStop(0, "darkblue");
  }

  document.getElementById("color3").onclick = function () {
    handleColor3();
  };

  function handleColor3() {
    grad = ctx.createLinearGradient(0, 0, canvasEl.width, canvasEl.height);
    grad.addColorStop(1, "darkgreen");
    grad.addColorStop(0, "aqua");
  }

  document.getElementById("color4").onclick = function () {
    handleColor4();
  };

  function handleColor4() {
    grad = ctx.createLinearGradient(0, 0, canvasEl.width, canvasEl.height);
    grad.addColorStop(1, 'palegreen');
    grad.addColorStop(0, "orangered");
  }

  document.getElementById('color5').oninput = function () {
    handleColor5(this);
  };

  function handleColor5(element) {
    grad = element.value;
  }

  var lineWidth = 8;

  document.getElementById('pen-width').oninput = function () {
    handleWidth(this);
  };

  function handleWidth(element) {
    lineWidth = element.value;
  }

  document.getElementById('clear-button').onclick = function () {
    handleClear();
  };

  function handleClear() {
    ctx.fillStyle = bgColor;
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
  }

  document.getElementById('undo-button').onclick = function () {
    handleUndo();
  };

  function handleUndo() {}

  var drawing = false;

  function startDrawing(e) {
    drawing = true;
    draw(e);
  }

  function endDrawing() {
    drawing = false;
    ctx.strokeStyle = grad;
    ctx.beginPath();
  }

  function draw(e) {
    if (!drawing) return;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.strokeStyle = grad;
    ctx.lineTo(e.clientX - 25, e.clientY - 65);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - 25, e.clientY - 65);
  }

  canvasEl.addEventListener('mousedown', startDrawing);
  canvasEl.addEventListener('mouseup', endDrawing);
  canvasEl.addEventListener('mousemove', draw);
}); // import "./styles/index.scss";
// import "./images/yoda-stitch.jpg";
// import canvasExample from "./scripts/canvas";
// import Square from "./scripts/square";
// import { DOMExample } from "./scripts/DOMExample";
// const currentStateObj = {
//   currentExample: null,
//   currentEventListeners: [],
// };
// document.querySelector("#canvas-demo").addEventListener("click", startCanvas);
// document.querySelector("#DOM-demo").addEventListener("click", startDOM);
// function startDOM() {
//   unregisterEventListeners();
//   clearDemo();
//   currentStateObj.currentExample = "DOMDEMO";
//   DOMExample();
// }
// function startCanvas() {
//   clearDemo();
//   unregisterEventListeners();
//   currentStateObj.currentExample = "CANVASDEMO";
//   const canvas = new canvasExample();
//   canvas.createCanvas();
//   const squares = [new Square(canvas.ctx, canvas.coords, canvas.fillColor)];
//   let animating = true;
//   const animation = () => {
//     canvas.clearCanvas();
//     if (animating) squares.forEach((sq) => sq.updateSquare(canvas.fillColor));
//     squares.forEach((sq) => sq.drawSquare());
//     window.requestAnimationFrame(animation);
//     squares.forEach((sq) => {
//       if (sq.coords[0] + sq.coords[2] > window.innerWidth)
//         sq.reverseAnimation();
//       if (sq.coords[0] < 0) sq.reverseAnimation();
//     });
//   };
//   window.requestAnimationFrame(animation);
//   window.addEventListener("keydown", handleKeyDown);
//   currentStateObj.currentEventListeners.push([
//     "window",
//     "keydown",
//     handleKeyDown,
//   ]);
//   window.addEventListener("mousedown", handleMouseDown);
//   currentStateObj.currentEventListeners.push([
//     "window",
//     "mousedown",
//     handleMouseDown,
//   ]);
//   function handleKeyDown(event) {
//     if (event.which === 32) {
//       event.preventDefault();
//       squares.forEach((sq) => sq.reverseAnimation());
//       canvas.setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
//     }
//   }
//   function handleMouseDown(event) {
//     event.preventDefault();
//     squares.push(
//       new Square(
//         canvas.ctx,
//         canvas.coords.map((co) => co + 25),
//         canvas.fillColor
//       )
//     );
//     // animating = !animating;
//   }
// }
// function unregisterEventListeners() {
//   while (currentStateObj.currentEventListeners.length) {
//     let [
//       selector,
//       event,
//       handler,
//     ] = currentStateObj.currentEventListeners.pop();
//     if (selector === "window") {
//       window.removeEventListener(event, handler);
//       console.log(handler);
//     } else {
//       document.querySelector(selector).removeEventListener(event, handler);
//     }
//   }
// }
// function clearDemo() {
//   if (currentStateObj.currentExample === "CANVASDEMO")
//     document.body.removeChild(document.querySelector("canvas"));
//   if (currentStateObj.currentExample === "DOMDEMO") {
//     [...document.querySelectorAll(".card")].forEach((elem) =>
//       document.body.removeChild(elem)
//     );
//   }
// }
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWwiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImJnQ29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNhbnZhcyIsImdyYWQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsIm9uY2xpY2siLCJoYW5kbGVDb2xvcjEiLCJoYW5kbGVDb2xvcjIiLCJoYW5kbGVDb2xvcjMiLCJoYW5kbGVDb2xvcjQiLCJvbmlucHV0IiwiaGFuZGxlQ29sb3I1IiwiZWxlbWVudCIsInZhbHVlIiwibGluZVdpZHRoIiwiaGFuZGxlV2lkdGgiLCJoYW5kbGVDbGVhciIsImNsZWFyUmVjdCIsImhhbmRsZVVuZG8iLCJkcmF3aW5nIiwic3RhcnREcmF3aW5nIiwiZSIsImRyYXciLCJlbmREcmF3aW5nIiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJsaW5lQ2FwIiwibGluZVRvIiwiY2xpZW50WCIsImNsaWVudFkiLCJzdHJva2UiLCJtb3ZlVG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVB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dkM7QUFFRCxDQXRHRCxFLENBK0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+e1xuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgY2FudmFzRWwud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDE2MCA7XG4gIGNhbnZhc0VsLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAgLSAyMjA7XG5cbiAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dCgnMmQnKTtcbiAgbGV0IGJnQ29sb3IgPSAnd2hpdGUnXG4gIGN0eC5maWxsU3R5bGUgPSBiZ0NvbG9yO1xuICBjdHguZmlsbFJlY3QoMCwwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gIFxuXG4gIGxldCBncmFkPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodCk7XG4gIGdyYWQuYWRkQ29sb3JTdG9wKDAsIFwieWVsbG93XCIpO1xuICBncmFkLmFkZENvbG9yU3RvcCgxLCBcInNhbG1vblwiKVxuICBcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvcjFcIikub25jbGljayA9IGZ1bmN0aW9uKCl7aGFuZGxlQ29sb3IxKCl9XG4gIFxuICBmdW5jdGlvbiBoYW5kbGVDb2xvcjEoKXtcbiAgICBncmFkPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodClcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjAxLCBcInllbGxvd1wiKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCBcInJlZFwiKVxuICB9XG4gIFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yMlwiKS5vbmNsaWNrID0gZnVuY3Rpb24oKXtoYW5kbGVDb2xvcjIoKX1cbiAgXG4gIGZ1bmN0aW9uIGhhbmRsZUNvbG9yMigpe1xuICAgIGdyYWQ9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBjYW52YXNFbC53aWR0aCwgY2FudmFzRWwuaGVpZ2h0KVxuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsIFwidmlvbGV0XCIpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIFwiZGFya2JsdWVcIik7XG4gIH1cbiAgXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3IzXCIpLm9uY2xpY2sgPSBmdW5jdGlvbigpe2hhbmRsZUNvbG9yMygpfVxuICBcbiAgZnVuY3Rpb24gaGFuZGxlQ29sb3IzKCl7XG4gICAgZ3JhZD0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQpXG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgXCJkYXJrZ3JlZW5cIik7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgXCJhcXVhXCIpO1xuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3I0XCIpLm9uY2xpY2sgPSBmdW5jdGlvbigpe2hhbmRsZUNvbG9yNCgpfVxuICBcbiAgZnVuY3Rpb24gaGFuZGxlQ29sb3I0KCl7XG4gICAgZ3JhZD0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQpXG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgJ3BhbGVncmVlbicpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIFwib3JhbmdlcmVkXCIpO1xuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvcjUnKS5vbmlucHV0ID0gZnVuY3Rpb24oKXtoYW5kbGVDb2xvcjUodGhpcyl9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ29sb3I1KGVsZW1lbnQpe1xuICAgIGdyYWQgPSBlbGVtZW50LnZhbHVlXG4gIH1cbiAgXG4gIGxldCBsaW5lV2lkdGggPSA4OyAgXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Blbi13aWR0aCcpLm9uaW5wdXQgPSBmdW5jdGlvbigpe2hhbmRsZVdpZHRoKHRoaXMpfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVdpZHRoKGVsZW1lbnQpe1xuICAgIGxpbmVXaWR0aCA9IGVsZW1lbnQudmFsdWU7XG4gIH1cblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXItYnV0dG9uJykub25jbGljayA9IGZ1bmN0aW9uKCl7aGFuZGxlQ2xlYXIoKX1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGVhcigpe1xuICAgIGN0eC5maWxsU3R5bGUgPSBiZ0NvbG9yO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodClcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodClcbiAgfVxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bmRvLWJ1dHRvbicpLm9uY2xpY2sgPSBmdW5jdGlvbigpe2hhbmRsZVVuZG8oKX1cblxuICBmdW5jdGlvbiBoYW5kbGVVbmRvKCl7XG4gICAgXG4gIH1cblxuXG5cbiAgbGV0IGRyYXdpbmcgPSBmYWxzZTtcbiAgXG4gIGZ1bmN0aW9uIHN0YXJ0RHJhd2luZyhlKXtcbiAgICBkcmF3aW5nID0gdHJ1ZTtcbiAgICBkcmF3KGUpXG4gIH1cbiAgZnVuY3Rpb24gZW5kRHJhd2luZygpe1xuICAgIGRyYXdpbmcgPSBmYWxzZTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBncmFkO1xuICAgIGN0eC5iZWdpblBhdGgoKVxuICB9XG4gIFxuICBmdW5jdGlvbiBkcmF3KGUpe1xuICAgIGlmICghZHJhd2luZykgcmV0dXJuO1xuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgY3R4LmxpbmVDYXAgPSAncm91bmQnXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gZ3JhZDtcbiAgICBjdHgubGluZVRvKGUuY2xpZW50WCAtIDI1LCBlLmNsaWVudFkgLSA2NSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKGUuY2xpZW50WCAtIDI1LCBlLmNsaWVudFkgLSA2NSlcbiAgfVxuXG4gIGNhbnZhc0VsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHN0YXJ0RHJhd2luZylcbiAgY2FudmFzRWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGVuZERyYXdpbmcpXG4gIGNhbnZhc0VsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRyYXcpXG5cbn0pXG5cblxuXG5cblxuXG5cblxuLy8gaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuLy8gaW1wb3J0IFwiLi9pbWFnZXMveW9kYS1zdGl0Y2guanBnXCI7XG4vLyBpbXBvcnQgY2FudmFzRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuLy8gaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9zY3JpcHRzL3NxdWFyZVwiO1xuLy8gaW1wb3J0IHsgRE9NRXhhbXBsZSB9IGZyb20gXCIuL3NjcmlwdHMvRE9NRXhhbXBsZVwiO1xuLy8gY29uc3QgY3VycmVudFN0YXRlT2JqID0ge1xuLy8gICBjdXJyZW50RXhhbXBsZTogbnVsbCxcbi8vICAgY3VycmVudEV2ZW50TGlzdGVuZXJzOiBbXSxcbi8vIH07XG5cbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FudmFzLWRlbW9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0Q2FudmFzKTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjRE9NLWRlbW9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0RE9NKTtcblxuLy8gZnVuY3Rpb24gc3RhcnRET00oKSB7XG4vLyAgIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuLy8gICBjbGVhckRlbW8oKTtcbi8vICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID0gXCJET01ERU1PXCI7XG4vLyAgIERPTUV4YW1wbGUoKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gc3RhcnRDYW52YXMoKSB7XG4vLyAgIGNsZWFyRGVtbygpO1xuLy8gICB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbi8vICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID0gXCJDQU5WQVNERU1PXCI7XG4vLyAgIGNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG4vLyAgIGNhbnZhcy5jcmVhdGVDYW52YXMoKTtcbi8vICAgY29uc3Qgc3F1YXJlcyA9IFtuZXcgU3F1YXJlKGNhbnZhcy5jdHgsIGNhbnZhcy5jb29yZHMsIGNhbnZhcy5maWxsQ29sb3IpXTtcblxuLy8gICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcblxuLy8gICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4vLyAgICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4vLyAgICAgaWYgKGFuaW1hdGluZykgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EudXBkYXRlU3F1YXJlKGNhbnZhcy5maWxsQ29sb3IpKTtcbi8vICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5kcmF3U3F1YXJlKCkpO1xuLy8gICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbi8vICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiB7XG4vLyAgICAgICBpZiAoc3EuY29vcmRzWzBdICsgc3EuY29vcmRzWzJdID4gd2luZG93LmlubmVyV2lkdGgpXG4vLyAgICAgICAgIHNxLnJldmVyc2VBbmltYXRpb24oKTtcbi8vICAgICAgIGlmIChzcS5jb29yZHNbMF0gPCAwKSBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4vLyAgICAgfSk7XG4vLyAgIH07XG5cbi8vICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuXG4vLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbi8vICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcbi8vICAgICBcIndpbmRvd1wiLFxuLy8gICAgIFwia2V5ZG93blwiLFxuLy8gICAgIGhhbmRsZUtleURvd24sXG4vLyAgIF0pO1xuXG4vLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRG93bik7XG4vLyAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4vLyAgICAgXCJ3aW5kb3dcIixcbi8vICAgICBcIm1vdXNlZG93blwiLFxuLy8gICAgIGhhbmRsZU1vdXNlRG93bixcbi8vICAgXSk7XG5cbi8vICAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuLy8gICAgIGlmIChldmVudC53aGljaCA9PT0gMzIpIHtcbi8vICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5yZXZlcnNlQW5pbWF0aW9uKCkpO1xuLy8gICAgICAgY2FudmFzLnNldENvbG9yKGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWApO1xuLy8gICAgIH1cbi8vICAgfVxuXG4vLyAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgc3F1YXJlcy5wdXNoKFxuLy8gICAgICAgbmV3IFNxdWFyZShcbi8vICAgICAgICAgY2FudmFzLmN0eCxcbi8vICAgICAgICAgY2FudmFzLmNvb3Jkcy5tYXAoKGNvKSA9PiBjbyArIDI1KSxcbi8vICAgICAgICAgY2FudmFzLmZpbGxDb2xvclxuLy8gICAgICAgKVxuLy8gICAgICk7XG4vLyAgICAgLy8gYW5pbWF0aW5nID0gIWFuaW1hdGluZztcbi8vICAgfVxuLy8gfVxuXG4vLyBmdW5jdGlvbiB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKSB7XG4vLyAgIHdoaWxlIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLmxlbmd0aCkge1xuLy8gICAgIGxldCBbXG4vLyAgICAgICBzZWxlY3Rvcixcbi8vICAgICAgIGV2ZW50LFxuLy8gICAgICAgaGFuZGxlcixcbi8vICAgICBdID0gY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wb3AoKTtcbi8vICAgICBpZiAoc2VsZWN0b3IgPT09IFwid2luZG93XCIpIHtcbi8vICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKGhhbmRsZXIpO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gY2xlYXJEZW1vKCkge1xuLy8gICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkNBTlZBU0RFTU9cIilcbi8vICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIikpO1xuLy8gICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkRPTURFTU9cIikge1xuLy8gICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIildLmZvckVhY2goKGVsZW0pID0+XG4vLyAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW0pXG4vLyAgICAgKTtcbi8vICAgfVxuLy8gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==