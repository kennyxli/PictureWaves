import "./styles/index.scss";
import * as Tone from 'tone'

document.addEventListener('DOMContentLoaded', () =>{
  const page = document.getElementById('page-body');
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
  
  

  let sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();


  
  document.getElementById("color1").onclick = function(){handleColor1()}
  
  function handleColor1(){
    debugger
    document.getElementById('color1').style.border = '4px solid black';
    document.getElementById('color2').style.border = 'none';
    document.getElementById('color3').style.border = 'none';
    document.getElementById('color4').style.border = 'none';
    document.getElementById('color5').style.border = 'none';
    document.getElementById('color1').style.transition = 'all 200ms ease-out'

    scaleArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D','E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D'];
    grad= ctx.createLinearGradient(0, 0, canvasEl.width, canvasEl.height)
    grad.addColorStop(0.01, "yellow");
    grad.addColorStop(1, "red");

    sampler = new Tone.Sampler({
      urls: {
        "C7": "C7.mp3",
        // "d4": 'd4.mp3'
        "D#1": "Ds1.mp3",
        "F#1": "Fs1.mp3",
        "A7": "A7.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();
    
  }
  document.getElementById("color2").onclick = function(){handleColor2()}
  
  function handleColor2(){
    document.getElementById('color2').style.border = '4px solid black';
    document.getElementById('color1').style.border = 'none';
    document.getElementById('color3').style.border = 'none';
    document.getElementById('color4').style.border = 'none';
    document.getElementById('color5').style.border = 'none';
    document.getElementById('color2').style.transition = 'all 200ms ease-out'
    scaleArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D','E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D'];
    grad= ctx.createLinearGradient(0, 0, canvasEl.width, canvasEl.height)
    grad.addColorStop(1, "violet");
    grad.addColorStop(0, "darkblue");

    sampler = new Tone.Sampler({
    urls: {
      "C5": "C5.mp3",
      // "d4": 'd4.mp3'
      // "D#4": "Ds4.mp3",
      // "F#4": "Fs4.mp3",
      "A5": "A5.mp3",
      
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  }
  
  
  
  document.getElementById("color3").onclick = function(){handleColor3()}
  
  function handleColor3(){
     document.getElementById('color3').style.border = '4px solid black';
     document.getElementById('color1').style.border = 'none';
    document.getElementById('color2').style.border = 'none';
    document.getElementById('color4').style.border = 'none';
    document.getElementById('color5').style.border = 'none';
    document.getElementById('color3').style.transition = 'all 200ms ease-out'
    grad= ctx.createLinearGradient(0, 0, canvasEl.width, canvasEl.height)
    grad.addColorStop(1, "darkgreen");
    grad.addColorStop(0, "aqua");
    scaleArray = ['A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#','A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#','A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#','A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#','A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#','A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#','A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#','A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#']

    sampler = new Tone.Sampler({
      urls: {
      "D#3": "Ds3.mp3",
        "F#3": "Fs3.mp3",
      "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();
  }
  document.getElementById("color4").onclick = function(){handleColor4()}
 
  function handleColor4(){
     document.getElementById('color4').style.border = '4px solid black';
     document.getElementById('color1').style.border = 'none';
    document.getElementById('color2').style.border = 'none';
    document.getElementById('color3').style.border = 'none';
    document.getElementById('color5').style.border = 'none';
    document.getElementById('color4').style.transition = 'all 200ms ease-out'
    scaleArray = ['A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#','A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#','A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#','A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#','A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#','A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#','A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#','A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#']
    grad= ctx.createLinearGradient(0, 0, canvasEl.width, canvasEl.height)
    grad.addColorStop(1, 'palegreen');
    grad.addColorStop(0, "orangered");
    sampler = new Tone.Sampler({
      urls: {
         "C4": "C4.mp3",
        // "d4": 'd4.mp3'
        // "D#2": "Ds2.mp3",
        // "D#4": "Ds4.mp3",
        "A4": "A4.mp3",
      },
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();
  }
  document.getElementById('color5').oninput = function(){handleColor5(this)}

  function handleColor5(element){
    document.getElementById('color5').style.border = '4px solid black';
    document.getElementById('color1').style.border = 'none';
    document.getElementById('color2').style.border = 'none';
    document.getElementById('color3').style.border = 'none';
    document.getElementById('color4').style.border = 'none';
    document.getElementById('color5').style.transition = 'all 200ms ease-out'
    scaleArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D','E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D'];
    grad = element.value
   sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();
  }
  
  let lineWidth = 5;  

  document.getElementById('pen-width').oninput = function(){handleWidth(this)}

  function handleWidth(element){
    lineWidth = element.value;
  }

  document.getElementById('clear-button').onclick = function(){handleClear()}

  function handleClear(){
    ctx.fillStyle = bgColor;
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height)
    Tone.Transport.stop()
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
  
  let scaleArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D','E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D'];
  const octave = (scale, octaveNumber) => scale.map(note => {
    const firstOctaveNoteIndex = scale.indexOf('C') !== -1 ? scale.indexOf('C') : scale.indexOf('C#')
    const noteOctaveNumber = scale.indexOf(note) < firstOctaveNoteIndex ? octaveNumber - 1 : octaveNumber;
    return `${note}${noteOctaveNumber}`
  });

  
  function startDrawing(e){
    e.preventDefault()
    drawing = true;
    let end = new Date();
    let delta = (end - start) / 300;
    if (delta > 6){
      delta = delta % 6;
    }
    const aMinor = octave(scaleArray, Math.floor(lineWidth)); 
    const now = Tone.now()
    let dist = ((Math.hypot(e.clientX, e.clientY)/50))
    
    
    musicArray.push(aMinor[Math.floor( dist + delta)])
    
    sampler.triggerAttackRelease( aMinor[Math.floor( dist + delta)], now + 1);
    draw(e)
  }
  
  let start = 0;
  function endDrawing(e){
    drawing = false;
    start = new Date();
    
    
    // musicArray.push(aMinor[Math.floor(delta + dist)])
    
    // sampler.triggerAttackRelease( aMinor[Math.floor(delta + dist)], now + 1);
    ctx.beginPath()
    ctx.stroke();
    ctx.closePath()
    ctx.strokeStyle = grad;
    
    e.preventDefault()
    if (e.type != 'mousedown'){
      strokeArray.push(ctx.getImageData(0, 0, canvasEl.width, canvasEl.height))
      index += 1
    }
  }

  function draw(e){
    if (!drawing) return;
    ctx.lineWidth = lineWidth * 2;
    ctx.lineCap = 'round'
    ctx.lineJoin = "round"
    ctx.strokeStyle = grad;
    
  
    ctx.lineTo(e.clientX - canvasEl.offsetLeft, e.clientY - canvasEl.offsetTop);
    ctx.stroke();
   
  }

  function outOfPage(){
    drawing = false;
    ctx.beginPath();
  }
  canvasEl.addEventListener('mousedown', startDrawing)
  canvasEl.addEventListener('mouseup', endDrawing)
  canvasEl.addEventListener('mousemove', draw)
  page.addEventListener('mouseover', outOfPage)
  document.getElementById('play-button').onclick = function(){handlePlay()}

  let idx = 1;
  Tone.Transport.scheduleRepeat(time => {
    if (idx > musicArray.length){
      idx = 0;
    }else{
      sampler.triggerAttack(musicArray[idx-1], time);
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


})








