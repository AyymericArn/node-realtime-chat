require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection
    .on('connected', () => {
        console.log('Mongoose connection opened');
    })
    .on('error', (err) => {
        console.log('Connection error : ' + err.message);
});

require('./models/Registration');
const app = require('./app');

const server = app.listen(3000, () => {console.log('server listening on : ' + server.address().port)});

module.exports = server;

require('./socket.js');