const mongoose = require('mongoose');
module.exports = ()=>{
    mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true, useUnifiedTopology: true },);
    mongoose.connection.on('open',()=>{
        console.log('Connected...');
    });
    mongoose.connection.on('error', (err)=>{
        console.log('!!!!!!!!!!!!!!!!!ERROR> MongoDB:', er);
    });

    mongoose.promise = global.Promise;

};