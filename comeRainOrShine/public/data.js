let socket = io();
let newText = document.getElementById('newText');

function preload() {
  rain = loadImage('imgs/rainicon.png');
   light = loadImage('imgs/sunicon.png');
}

let rSlider, gSlider, bSlider;
let rain, light;
let orange, blue, r, b;
let button;
let canvas;

let angle1 = 0;
let angle2 = 0;
let scalar = 45;

const date = new Date().toLocaleString();
  // const date = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(dateOld);


function setup() {

  
  let pg;
  noStroke();
  rectMode(CENTER);

    let canvas = createCanvas(640, 480);
  // let bigCanvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5Canvas');
 
  pg = createGraphics(width, height)
    // canvas.parent('p5Canvas')
   


  canvas.position(0,0);
  // canvas.parent('p5Canvas');
  canvas.style('z-index','-1');

  // bigCanvas.position(0,0);
  // bigCanvas.style('z-index','-1');
  
  colorMode(RGB);
  background(255);
 textSize(16);
 noStroke();
 button = createButton('send');
 button.position(windowWidth/2-30, windowHeight/2+90);
 button.mousePressed(logData);
 
 
  image(rain, windowWidth/4-190, windowHeight/3-10, 40,40);
   image(light, windowWidth/4+80, windowHeight/3-15, 40,40);


 // crear barras deslizantes
 rSlider = createSlider(0, 260, 130);
 rSlider.position(windowWidth/2-60, windowHeight/2);
 
}

function draw() {

  // background(255);
    r = rSlider.value();
 
 orange = map(r,130,900,0,100);
 blue = map(r,-900,120,100,0);

 

  // let ang1 = radians(angle1);
  // let ang2 = radians(angle2);

  // let x1 = width / 2 + scalar * cos(ang1);
  // let x2 = width / 2 + scalar * cos(ang2);

  // let y1 = height / 2 + scalar * sin(ang1);
  // let y2 = height / 2 + scalar * sin(ang2);

  // //fill(255);
  // // rect(width * 0.5, height * 0.5, 140, 140);

  // fill(255, 80, 255);
  // ellipse(x1, height * 0.5 - 120, scalar, scalar);
  // ellipse(x2, height * 0.5 + 120, scalar, scalar);

  // fill(255, 204, 105);
  // ellipse(width * 0.5 - 120, y1, scalar, scalar);
  // ellipse(width * 0.5 + 120, y2, scalar, scalar);

  // angle1 += 2;
  // angle2 += 3;

 
 if (r >130){

 
    background(245, 149, 66, orange);
  //  text('how are you feeling today?', windowWidth/3+10, windowHeight/2-150);
  
  image(rain, windowWidth/4-190, windowHeight/3-10, 40,40);
   image(light, windowWidth/4+80, windowHeight/3-15, 40,40);
 }
  if (r <130){

    background(66, 132, 245, blue);
    // text('how are you feeling today?', windowWidth/3+10, windowHeight/2-150);
 
    image(rain, windowWidth/4-190, windowHeight/3-10, 40,40);
    image(light, windowWidth/4+80, windowHeight/3-15, 40,40);
 }

//  socket.emit('userInputData', r);
}

function logData() {
 console.log("data: " + r);
 console.log(date);

 
 

 if (r > 130){
  const mood = "light";
  const data = {date, mood};
  socket.emit('userInputData', data);
 }

 if (r < 130){
  const mood = "water";
  const data = {date, mood};
  socket.emit('userInputData', data);
 }
 
}

function windowResized(){
 resizeCanvas(windowWidth, windowHeight);
}

//  Setting up the button on click
const buttonHappy = document.getElementById('sendWordHappy');
buttonHappy.addEventListener('click',event => {

  // Getting the word input
  // const mood = document.getElementById('moodHappy').value;
  const mood = "happy";
  // Getting the current date
  const date = new Date().toLocaleString();
  // const date = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(dateOld);
  console.log(date);

  const data = {date, mood};
  // console.log(data);
  socket.emit('userInputData', data);

  // document.getElementById('moodHappy').value='';
  

})

const buttonSad = document.getElementById('sendWordSad');
buttonSad.addEventListener('click',event => {

  // Getting the word input
  // const mood = document.getElementById('moodHappy').value;
  const mood = "sad";
  // Getting the current date
  const date = new Date().toLocaleString();
  // const date = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(dateOld);
  console.log(date);

  const data = {date, mood};
  // console.log(data);
  // socket.emit('userInputData', data);
  socket.emit('userInputData', r);
  

  // document.getElementById('moodSad').value='';
  

})

