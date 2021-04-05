import "./styles/index.scss";
document.addEventListener('DOMContentLoaded', () =>{
  const canvasEl = document.getElementById('canvas');
  canvasEl.width = window.innerWidth - 160 ;
  canvasEl.height = window.innerHeight  - 220;

  const ctx = canvasEl.getContext('2d');
  let bgColor = 'white'
  ctx.fillStyle = bgColor;
  ctx.fillRect(0,0, canvas.width, canvas.height)
  

  let grad= ctx.createLinearGradient(0, 0, canvasEl.width, canvasEl.height);
  grad.addColorStop(0, "yellow");
  grad.addColorStop(1, "salmon")
  
  document.getElementById("color1").onclick = function(){handleColor1()}
  
  function handleColor1(){
    grad= ctx.createLinearGradient(0, 0, canvasEl.width, canvasEl.height)
    grad.addColorStop(0.01, "yellow");
    grad.addColorStop(1, "red")
  }
  
  document.getElementById("color2").onclick = function(){handleColor2()}
  
  function handleColor2(){
    grad= ctx.createLinearGradient(0, 0, canvasEl.width, canvasEl.height)
    grad.addColorStop(1, "violet");
    grad.addColorStop(0, "darkblue");
  }
  
  document.getElementById("color3").onclick = function(){handleColor3()}
  
  function handleColor3(){
    grad= ctx.createLinearGradient(0, 0, canvasEl.width, canvasEl.height)
    grad.addColorStop(1, "darkgreen");
    grad.addColorStop(0, "aqua");
  }
  document.getElementById("color4").onclick = function(){handleColor4()}
  
  function handleColor4(){
    grad= ctx.createLinearGradient(0, 0, canvasEl.width, canvasEl.height)
    grad.addColorStop(1, 'palegreen');
    grad.addColorStop(0, "orangered");
  }
  document.getElementById('color5').oninput = function(){handleColor5(this)}

  function handleColor5(element){
    grad = element.value
  }
  
  let lineWidth = 8;  

  document.getElementById('pen-width').oninput = function(){handleWidth(this)}

  function handleWidth(element){
    lineWidth = element.value;
  }

  document.getElementById('clear-button').onclick = function(){handleClear()}

  function handleClear(){
    ctx.fillStyle = bgColor;
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height)
  }

  document.getElementById('undo-button').onclick = function(){handleUndo()}

  function handleUndo(){
    
  }



  let drawing = false;
  
  function startDrawing(e){
    drawing = true;
    draw(e)
  }
  function endDrawing(){
    drawing = false;
    ctx.strokeStyle = grad;
    ctx.beginPath()
  }
  
  function draw(e){
    if (!drawing) return;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round'
    ctx.strokeStyle = grad;
    ctx.lineTo(e.clientX - 25, e.clientY - 65);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - 25, e.clientY - 65)
  }

  canvasEl.addEventListener('mousedown', startDrawing)
  canvasEl.addEventListener('mouseup', endDrawing)
  canvasEl.addEventListener('mousemove', draw)

})








// import "./styles/index.scss";
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
