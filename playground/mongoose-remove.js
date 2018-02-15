const {ObjectID} = require('mongoDB');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');

/*Todo.remove({}).then((result)=>{
    console.log(result);
});*/

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id:'5a85c46f4ba64150f1757da1'}).then((todo)=>{
    console.log(todo);
})

Todo.findByIdAndRemove('5a85c46f4ba64150f1757da1').then((todo)=>{
console.log(todo);
})