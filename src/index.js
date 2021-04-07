import "./styles/index.scss";
import * as Tone from 'tone'

document.addEventListener('DOMContentLoaded', () =>{
  const canvasEl = document.getElementById('canvas');
  canvasEl.width = window.innerWidth - 160 ;
  canvasEl.height = window.innerHeight  - 160;
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
    grad.addColorStop(1, "red");
    
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

    strokeArray = [];
    musicArray = [];
    index = -1;
  }

  document.getElementById('undo-button').onclick = function(){handleUndo()}

  function handleUndo(){
    if (index <= 0){
      handleClear()
    }else{
      index -= 1;
      strokeArray.pop();
      musicArray.pop();
      ctx.putImageData(strokeArray[index], 0, 0);
    }

  }

  let strokeArray = []
  let musicArray = []
  let index = -1

  let drawing = false;
  
  let start;
  function startDrawing(e){
    drawing = true;
    start = new Date();
    draw(e)
  }
  const AMinorScale = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D'];
  const addOctaveNumbers = (scale, octaveNumber) => scale.map(note => {
  const firstOctaveNoteIndex = scale.indexOf('C') !== -1 ? scale.indexOf('C') : scale.indexOf('C#')
  const noteOctaveNumber = scale.indexOf(note) < firstOctaveNoteIndex ? octaveNumber - 1 : octaveNumber;
  return `${note}${noteOctaveNumber}`
});

const sampler = new Tone.Sampler({
	urls: {
    "C4": "C4.mp3",
    // "d4": 'd4.mp3'
		// "D#4": "Ds4.mp3",
		// "F#4": "Fs4.mp3",
		"A4": "A4.mp3",
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

  function endDrawing(e){
    drawing = false;
    let end = new Date();
    let delta = (end - start) / 100;
    if (delta > 6){
      delta = 6;
    }
    const AMinorScaleWithOctave = addOctaveNumbers(AMinorScale, Math.floor(lineWidth/2));
    ctx.beginPath()
    console.log(delta)   
    const now = Tone.now()
    let dist = ((Math.hypot(e.clientX, e.clientY)/100))
    console.log(dist)

 
    musicArray.push(AMinorScaleWithOctave[Math.floor(delta + dist)])
    
    sampler.triggerAttackRelease( AMinorScaleWithOctave[Math.floor(delta + dist)], now + 1);
    ctx.strokeStyle = grad;
    
    e.preventDefault()
    if (e.type != 'mousedown'){
      strokeArray.push(ctx.getImageData(0, 0, canvasEl.width, canvasEl.height))
      index += 1
    }
    console.log(strokeArray)
  }
  
  document.getElementById('play-button').onclick = function(){handlePlay()}

  let idx = 1;
  Tone.Transport.scheduleRepeat(time => {
    if (idx > musicArray.length){
      // sampler.triggerRelease(time)
      // Tone.Transport.stop()
      idx = 0;
    }else{
      sampler.triggerAttack(musicArray[idx-1], time);
      console.log(musicArray)
    }
    idx ++;
  }, "4n")

  function handlePlay(){
    // Tone.start()
    Tone.Transport.start()
  }
  
  document.getElementById('pause-button').onclick = function(){handlePause()}
  
  function handlePause(){
    // const now = Tone.now()
    Tone.Transport.stop()
  }

  function draw(e){
    if (!drawing) return;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round'
    ctx.strokeStyle = grad;
    
    ctx.lineTo(e.clientX - 25, e.clientY - 75);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - 25, e.clientY - 75)
  }

  canvasEl.addEventListener('mousedown', startDrawing)
  canvasEl.addEventListener('mouseup', endDrawing)
  canvasEl.addEventListener('mousemove', draw)

})








