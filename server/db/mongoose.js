var server = require('./../server');
var port = server.port;
var env = server.env;
var mongoose = require('mongoose');

console.log(`port is ${env}`);

mongoose.Promise = global.Promise;
if(env === 'development'){
    mongoose.connect('mongodb://localhost:27017/TodoApp');
}
if (env === 'test'){
    mongoose.connect('mongodb://localhost:27017/TodoAppTest');
}
if ((env != 'development') && (env != 'test')  ){
    mongoose.connect('mongodb://nodejs-api:18003154@ds235418.mlab.com:35418/nojdejs-api');
}

//mongoose.connect('mongodb://nodejs-api:18003154@ds235418.mlab.com:35418/nojdejs-api'|| 'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose: mongoose
}