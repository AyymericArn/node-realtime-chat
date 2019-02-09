const server = require('./start');
const io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {
    console.log('socket initiated');
    socket.on('new-message', (message) => {
        console.log('message sent !');
        socket.broadcast.emit('new-message', message);
    })
})

module.exports = io;