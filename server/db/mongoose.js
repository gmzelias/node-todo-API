var server = require('./../server');
var port = server.port;
var mongoose = require('mongoose');

//console.log(`port is ${port}`);

mongoose.Promise = global.Promise;
if(port === 3000){
    mongoose.connect('mongodb://localhost:27017/TodoApp');
}
else{
    mongoose.connect('mongodb://nodejs-api:18003154@ds235418.mlab.com:35418/nojdejs-api');
}

//mongoose.connect('mongodb://nodejs-api:18003154@ds235418.mlab.com:35418/nojdejs-api'|| 'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose: mongoose
}