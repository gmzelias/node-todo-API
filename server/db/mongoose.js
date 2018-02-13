var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://nodejs-api:18003154@ds235418.mlab.com:35418/nojdejs-api'|| 'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose: mongoose
}