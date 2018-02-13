var express = require('express');
var bodyParser = require ('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} =   require('./models/todo.js');
var {User} =   require('./models/users.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var newtodo= new Todo({
        text:req.body.text
    })
//console.log(req.body);

newtodo.save().then((doc)=>{
res.send(doc);
}, (e)=>{
    res.status(400).send(e);
});
});


app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos:todos});
    }, (e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
        if (!todo){
            return res.status(404).send();
        }
        res.send({todo: todo});

    }).catch((e)=>{
        res.status(400).send();
    }); 
});


app.listen(3000,()=>{
    console.log('Started on port 3000')
});

module.exports = {app: app};





/*
var user = new User({
    email: 'Elias@idb.com '
});

user.save().then((doc)=>{
    console.log('User saved',doc)
},(e)=>{
    console.log('Unable to save user',e)
});

var newTodo = new Todo({
    text:'Play softball',
    completed: true,
    completedAt: 23
});



newTodo.save().then((doc)=>{
console.log('Saved todo', doc)
},(e)=>{
    console.log('Unable to save', e);
});*/