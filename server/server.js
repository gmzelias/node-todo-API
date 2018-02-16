var env = process.env.NODE_ENV || 'development';
console.log('env *******', env);

if (env === 'development'){
   // process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
}else if (env === 'test'){
   // process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}

const _ = require('lodash');
const express = require('express');
const bodyParser = require ('body-parser');
const {ObjectID} = require('mongodb');

var {Todo} =   require('./models/todo.js');
var {User} =   require('./models/users.js');

var app = express();

const port = process.env.PORT || 3000;

module.exports = {app: app,
                 port: port,
                 env:env};

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
        res.send({todo: todo});
    }).catch((e)=>{
        res.status(400).send();
    })
});

app.patch('/todos/:id',(req,res)=>{
    var id = req.params.id;
    var body = _.pick(req.body,['text', 'completed']);
    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed ){
        body.completedAt = new Date().getTime();
    }else{
        body.completed = false;
        body.completedAt= null;
    }
    Todo.findByIdAndUpdate(id,{$set:body},{new: true}).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e)=>{
        res.status(400).send();
    })


})





app.listen(port,()=>{
    console.log(`Started on port ${port}`)
});

/*module.exports = {app: app,
port: port,
env: env};*/

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