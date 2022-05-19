// Setting up express 
const express = require('express');
const router = express.Router();
const app = express();
const server = require('http').createServer(app);

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
        port.write(data.mood + 'E');
        // port.write(data.mood + 'E');
        // port.write('E');
        

    })

    // socket.on('userInputData', (r)=> {
    //     console.log("server: " + r);
    //     database.insert(r);
    //     // port.write(data + 'E');
    //     port.write(r + 'E');
    //     // port.write('E');
        

    // })
})




app.get('/', function (req,res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
    // res.sendFile(path.join(__dirname + '/views/spanish.html'));
});

app.get('/careSystem.html', function (req,res){
    res.sendFile(path.join(__dirname + '/views/careSystem.html'));
    // res.sendFile(path.join(__dirname + '/views/spanish.html'));
});

app.get('/help.html', function (req,res){
    res.sendFile(path.join(__dirname + '/views/help.html'));
    // res.sendFile(path.join(__dirname + '/views/spanish.html'));
});


server.listen(2020, ()=> {
    console.log('app is listening on ' + server.address().port);
});

