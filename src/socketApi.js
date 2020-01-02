const socketio = require('socket.io');
const io =socketio();
const socketAuthorization =require('../middleware/socketAuthorization');
const socketApi = {
    io
};



io.use(socketAuthorization);

const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({
    host: process.env.REDIS_URI,
    port: process.env.REDIS_PORT
}));


io.on('connection', socket =>{
    console.log(socket.request.user.name+' Logged in...>>>');
});

module.exports = socketApi;