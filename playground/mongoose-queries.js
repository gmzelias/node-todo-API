const {ObjectID} = require('mongoDB');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');

var id = "5a832b0bd1d3675350a5ddf61";

if (!ObjectID.isValid(id)){
console.log('ID not valid');
}


//(Mongoose)we dont need to manually convert the id to an ObjectID
/*Todo.find({
    _id: id
}).then((todos)=>{
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo)=>{
    console.log('Todo', todo);
});*/

Todo.findById(id).then((todo)=>{
    if (!todo){
        return console.log('Id not found');
    }
    console.log('Todo by id', todo);
}).catch((e)=>{console.log(e)});