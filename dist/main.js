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
    strokeArray = [];
    index = -1;
  }

  document.getElementById('undo-button').onclick = function () {
    handleUndo();
  };

  function handleUndo() {
    if (index <= 0) {
      handleClear();
    } else {
      index -= 1;
      strokeArray.pop();
      ctx.putImageData(strokeArray[index], 0, 0);
    }
  }

  var strokeArray = [];
  var index = -1;
  var drawing = false;

  function startDrawing(e) {
    drawing = true;
    draw(e);
  }

  function endDrawing(e) {
    drawing = false;
    ctx.strokeStyle = grad;
    ctx.beginPath();
    e.preventDefault();

    if (e.type != 'mousedown') {
      strokeArray.push(ctx.getImageData(0, 0, canvasEl.width, canvasEl.height));
      index += 1;
    }

    console.log(strokeArray);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0X3NrZWxldG9uLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanNfcHJvamVjdF9za2VsZXRvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzX3Byb2plY3Rfc2tlbGV0b24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWwiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImJnQ29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNhbnZhcyIsImdyYWQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsIm9uY2xpY2siLCJoYW5kbGVDb2xvcjEiLCJoYW5kbGVDb2xvcjIiLCJoYW5kbGVDb2xvcjMiLCJoYW5kbGVDb2xvcjQiLCJvbmlucHV0IiwiaGFuZGxlQ29sb3I1IiwiZWxlbWVudCIsInZhbHVlIiwibGluZVdpZHRoIiwiaGFuZGxlV2lkdGgiLCJoYW5kbGVDbGVhciIsImNsZWFyUmVjdCIsInN0cm9rZUFycmF5IiwiaW5kZXgiLCJoYW5kbGVVbmRvIiwicG9wIiwicHV0SW1hZ2VEYXRhIiwiZHJhd2luZyIsInN0YXJ0RHJhd2luZyIsImUiLCJkcmF3IiwiZW5kRHJhd2luZyIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwicHVzaCIsImdldEltYWdlRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsaW5lQ2FwIiwibGluZVRvIiwiY2xpZW50WCIsImNsaWVudFkiLCJzdHJva2UiLCJtb3ZlVG8iXSwibWFwcGluZ3Mi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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+e1xuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgY2FudmFzRWwud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDE2MCA7XG4gIGNhbnZhc0VsLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAgLSAyMjA7XG5cbiAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dCgnMmQnKTtcbiAgbGV0IGJnQ29sb3IgPSAnd2hpdGUnXG4gIGN0eC5maWxsU3R5bGUgPSBiZ0NvbG9yO1xuICBjdHguZmlsbFJlY3QoMCwwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gIFxuXG4gIGxldCBncmFkPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodCk7XG4gIGdyYWQuYWRkQ29sb3JTdG9wKDAsIFwieWVsbG93XCIpO1xuICBncmFkLmFkZENvbG9yU3RvcCgxLCBcInNhbG1vblwiKVxuICBcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvcjFcIikub25jbGljayA9IGZ1bmN0aW9uKCl7aGFuZGxlQ29sb3IxKCl9XG4gIFxuICBmdW5jdGlvbiBoYW5kbGVDb2xvcjEoKXtcbiAgICBncmFkPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodClcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjAxLCBcInllbGxvd1wiKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCBcInJlZFwiKVxuICB9XG4gIFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yMlwiKS5vbmNsaWNrID0gZnVuY3Rpb24oKXtoYW5kbGVDb2xvcjIoKX1cbiAgXG4gIGZ1bmN0aW9uIGhhbmRsZUNvbG9yMigpe1xuICAgIGdyYWQ9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBjYW52YXNFbC53aWR0aCwgY2FudmFzRWwuaGVpZ2h0KVxuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsIFwidmlvbGV0XCIpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIFwiZGFya2JsdWVcIik7XG4gIH1cbiAgXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3IzXCIpLm9uY2xpY2sgPSBmdW5jdGlvbigpe2hhbmRsZUNvbG9yMygpfVxuICBcbiAgZnVuY3Rpb24gaGFuZGxlQ29sb3IzKCl7XG4gICAgZ3JhZD0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQpXG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgXCJkYXJrZ3JlZW5cIik7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgXCJhcXVhXCIpO1xuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3I0XCIpLm9uY2xpY2sgPSBmdW5jdGlvbigpe2hhbmRsZUNvbG9yNCgpfVxuICBcbiAgZnVuY3Rpb24gaGFuZGxlQ29sb3I0KCl7XG4gICAgZ3JhZD0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQpXG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgJ3BhbGVncmVlbicpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIFwib3JhbmdlcmVkXCIpO1xuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvcjUnKS5vbmlucHV0ID0gZnVuY3Rpb24oKXtoYW5kbGVDb2xvcjUodGhpcyl9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ29sb3I1KGVsZW1lbnQpe1xuICAgIGdyYWQgPSBlbGVtZW50LnZhbHVlXG4gIH1cbiAgXG4gIGxldCBsaW5lV2lkdGggPSA4OyAgXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Blbi13aWR0aCcpLm9uaW5wdXQgPSBmdW5jdGlvbigpe2hhbmRsZVdpZHRoKHRoaXMpfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVdpZHRoKGVsZW1lbnQpe1xuICAgIGxpbmVXaWR0aCA9IGVsZW1lbnQudmFsdWU7XG4gIH1cblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXItYnV0dG9uJykub25jbGljayA9IGZ1bmN0aW9uKCl7aGFuZGxlQ2xlYXIoKX1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGVhcigpe1xuICAgIGN0eC5maWxsU3R5bGUgPSBiZ0NvbG9yO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodClcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodClcblxuICAgIHN0cm9rZUFycmF5ID0gW107XG4gICAgaW5kZXggPSAtMTtcbiAgfVxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bmRvLWJ1dHRvbicpLm9uY2xpY2sgPSBmdW5jdGlvbigpe2hhbmRsZVVuZG8oKX1cblxuICBmdW5jdGlvbiBoYW5kbGVVbmRvKCl7XG4gICAgaWYgKGluZGV4IDw9IDApe1xuICAgICAgaGFuZGxlQ2xlYXIoKVxuICAgIH1lbHNle1xuICAgICAgaW5kZXggLT0gMTtcbiAgICAgIHN0cm9rZUFycmF5LnBvcCgpO1xuICAgICAgY3R4LnB1dEltYWdlRGF0YShzdHJva2VBcnJheVtpbmRleF0sIDAsIDApO1xuICAgIH1cblxuICB9XG5cbiAgbGV0IHN0cm9rZUFycmF5ID0gW11cbiAgbGV0IGluZGV4ID0gLTFcblxuICBsZXQgZHJhd2luZyA9IGZhbHNlO1xuICBcbiAgZnVuY3Rpb24gc3RhcnREcmF3aW5nKGUpe1xuICAgIGRyYXdpbmcgPSB0cnVlO1xuICAgIGRyYXcoZSlcbiAgfVxuICBmdW5jdGlvbiBlbmREcmF3aW5nKGUpe1xuICAgIGRyYXdpbmcgPSBmYWxzZTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBncmFkO1xuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmIChlLnR5cGUgIT0gJ21vdXNlZG93bicpe1xuICAgICAgc3Ryb2tlQXJyYXkucHVzaChjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQpKVxuICAgICAgaW5kZXggKz0gMVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzdHJva2VBcnJheSlcbiAgfVxuICBcbiAgZnVuY3Rpb24gZHJhdyhlKXtcbiAgICBpZiAoIWRyYXdpbmcpIHJldHVybjtcbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgIGN0eC5saW5lQ2FwID0gJ3JvdW5kJ1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGdyYWQ7XG4gICAgY3R4LmxpbmVUbyhlLmNsaWVudFggLSAyNSwgZS5jbGllbnRZIC0gNjUpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyhlLmNsaWVudFggLSAyNSwgZS5jbGllbnRZIC0gNjUpXG4gIH1cblxuICBjYW52YXNFbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzdGFydERyYXdpbmcpXG4gIGNhbnZhc0VsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmREcmF3aW5nKVxuICBjYW52YXNFbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmF3KVxuXG59KVxuXG5cblxuXG5cblxuXG5cbi8vIGltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbi8vIGltcG9ydCBcIi4vaW1hZ2VzL3lvZGEtc3RpdGNoLmpwZ1wiO1xuLy8gaW1wb3J0IGNhbnZhc0V4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbi8vIGltcG9ydCBTcXVhcmUgZnJvbSBcIi4vc2NyaXB0cy9zcXVhcmVcIjtcbi8vIGltcG9ydCB7IERPTUV4YW1wbGUgfSBmcm9tIFwiLi9zY3JpcHRzL0RPTUV4YW1wbGVcIjtcbi8vIGNvbnN0IGN1cnJlbnRTdGF0ZU9iaiA9IHtcbi8vICAgY3VycmVudEV4YW1wbGU6IG51bGwsXG4vLyAgIGN1cnJlbnRFdmVudExpc3RlbmVyczogW10sXG4vLyB9O1xuXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhcy1kZW1vXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydENhbnZhcyk7XG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0RPTS1kZW1vXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydERPTSk7XG5cbi8vIGZ1bmN0aW9uIHN0YXJ0RE9NKCkge1xuLy8gICB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbi8vICAgY2xlYXJEZW1vKCk7XG4vLyAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9IFwiRE9NREVNT1wiO1xuLy8gICBET01FeGFtcGxlKCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHN0YXJ0Q2FudmFzKCkge1xuLy8gICBjbGVhckRlbW8oKTtcbi8vICAgdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG4vLyAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9IFwiQ0FOVkFTREVNT1wiO1xuLy8gICBjb25zdCBjYW52YXMgPSBuZXcgY2FudmFzRXhhbXBsZSgpO1xuLy8gICBjYW52YXMuY3JlYXRlQ2FudmFzKCk7XG4vLyAgIGNvbnN0IHNxdWFyZXMgPSBbbmV3IFNxdWFyZShjYW52YXMuY3R4LCBjYW52YXMuY29vcmRzLCBjYW52YXMuZmlsbENvbG9yKV07XG5cbi8vICAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG5cbi8vICAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuLy8gICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuLy8gICAgIGlmIChhbmltYXRpbmcpIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnVwZGF0ZVNxdWFyZShjYW52YXMuZmlsbENvbG9yKSk7XG4vLyAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EuZHJhd1NxdWFyZSgpKTtcbi8vICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4vLyAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4ge1xuLy8gICAgICAgaWYgKHNxLmNvb3Jkc1swXSArIHNxLmNvb3Jkc1syXSA+IHdpbmRvdy5pbm5lcldpZHRoKVxuLy8gICAgICAgICBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4vLyAgICAgICBpZiAoc3EuY29vcmRzWzBdIDwgMCkgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xuLy8gICAgIH0pO1xuLy8gICB9O1xuXG4vLyAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4vLyAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4vLyAgICAgXCJ3aW5kb3dcIixcbi8vICAgICBcImtleWRvd25cIixcbi8vICAgICBoYW5kbGVLZXlEb3duLFxuLy8gICBdKTtcblxuLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24pO1xuLy8gICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnB1c2goW1xuLy8gICAgIFwid2luZG93XCIsXG4vLyAgICAgXCJtb3VzZWRvd25cIixcbi8vICAgICBoYW5kbGVNb3VzZURvd24sXG4vLyAgIF0pO1xuXG4vLyAgIGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbi8vICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyKSB7XG4vLyAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EucmV2ZXJzZUFuaW1hdGlvbigpKTtcbi8vICAgICAgIGNhbnZhcy5zZXRDb2xvcihgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gKTtcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIHNxdWFyZXMucHVzaChcbi8vICAgICAgIG5ldyBTcXVhcmUoXG4vLyAgICAgICAgIGNhbnZhcy5jdHgsXG4vLyAgICAgICAgIGNhbnZhcy5jb29yZHMubWFwKChjbykgPT4gY28gKyAyNSksXG4vLyAgICAgICAgIGNhbnZhcy5maWxsQ29sb3Jcbi8vICAgICAgIClcbi8vICAgICApO1xuLy8gICAgIC8vIGFuaW1hdGluZyA9ICFhbmltYXRpbmc7XG4vLyAgIH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCkge1xuLy8gICB3aGlsZSAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5sZW5ndGgpIHtcbi8vICAgICBsZXQgW1xuLy8gICAgICAgc2VsZWN0b3IsXG4vLyAgICAgICBldmVudCxcbi8vICAgICAgIGhhbmRsZXIsXG4vLyAgICAgXSA9IGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucG9wKCk7XG4vLyAgICAgaWYgKHNlbGVjdG9yID09PSBcIndpbmRvd1wiKSB7XG4vLyAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4vLyAgICAgICBjb25zb2xlLmxvZyhoYW5kbGVyKTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGNsZWFyRGVtbygpIHtcbi8vICAgaWYgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9PT0gXCJDQU5WQVNERU1PXCIpXG4vLyAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpKTtcbi8vICAgaWYgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9PT0gXCJET01ERU1PXCIpIHtcbi8vICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpXS5mb3JFYWNoKChlbGVtKSA9PlxuLy8gICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtKVxuLy8gICAgICk7XG4vLyAgIH1cbi8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=