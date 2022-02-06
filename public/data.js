let socket = io();
let newText = document.getElementById('newText');


// new Twitch.Player("twitch-embed", {
//   channel: "rocioreyaloe",
//   height:400,
//   width:620
// });


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
  socket.emit('userInputData', data);

  // document.getElementById('moodSad').value='';
  

})

const buttonLonely = document.getElementById('sendWordLonely');
buttonLonely.addEventListener('click',event => {

  // Getting the word input
  // const mood = document.getElementById('moodHappy').value;
  const mood = "lonely";
  // Getting the current date
  const date = new Date().toLocaleString();
  // const date = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(dateOld);
  console.log(date);

  const data = {date, moodLonely};
  // console.log(data);
  socket.emit('userInputData', data);

  // document.getElementById('moodLonely').value='';
  

})