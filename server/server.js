var express = require('express');
var bodyParser = require ('body-parser');
var {ObjectID} = require('mongodb');

var {Todo} =   require('./models/todo.js');
var {User} =   require('./models/users.js');

var app = express();

const port = process.env.PORT || 3000;

module.exports = {app: app,
                 port: port};

var {mongoose} = require('./db/mongoose.js');

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

app.delete('/todos/:id', (req,res)=>{
    //get the id
    var id= req.params.id;
    //validate the id-> not valid? return 404
        if (!ObjectID.isValid(id)){
            return res.status(404).send();
        }
    //remove todo by id
    Todo.findByIdAndRemove(id).then((todo)=>{
            //error
    //400 with empty body
        if(!todo){
            return res.status(404).send();
        }
        //success
        //id doc, send doc back with 200
        //***** */
       // res.status(200).send();
        res.send(todo);
    }).catch((e)=>{
        res.status(400).send();
    })






} )


app.listen(port,()=>{
    console.log(`Started on port ${port}`)
});

module.exports = {app: app,
port: port};

//exports.port = port;






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