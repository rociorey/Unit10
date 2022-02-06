
// Setting up express 
const express = require('express');
const router = express.Router();
const app = express();
const server = require('http').createServer(app);

const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    console.log(message.body);
    database.insert(message.body);
    port.write(message.body + 'E');
    // port.write(data.mood + 'E');
});

client.initialize();

// Setting up socket.io
const io = require('socket.io')(server);

//Setting up serial port
const SerialPort= require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/cu.usbmodem14201');
const parser = port.pipe(new Readline({delimiter:'\r\n'}));

// Creating the database
const Datastore = require('nedb');
const database = new Datastore('database.db');
database.loadDatabase();

let path = require('path');
const { serialize } = require('v8');

app.use(express.static('public'));

io.on('connection', (socket) =>{
    // socket.emit('welcome', socket.id);

    parser.on('data', (data)=>{
        console.log(data);
       
    });

    

    socket.on('disconnect', ()=> {
        console.log('left:' + socket.id);
    })
    socket.on('userInputData', (data)=> {
        console.log(data);
        database.insert(data);
        // port.write(data + 'E');
        port.write(data.mood + 'E');
        // port.write('E');
        

    })
})




app.get('/', function (req,res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

server.listen(3000, ()=> {
    console.log('app is listening on ' + server.address().port);
});