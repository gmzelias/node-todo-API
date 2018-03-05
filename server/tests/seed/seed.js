const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/users');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
_id : userOneId,
email: 'gmzelias@gmail.com',
password:'Caicuid1',
tokens:[{
    access:'auth',
    token:jwt.sign({_id:userOneId,access:'auth'}, 'abc123').toString()
}]
},
{
_id : userTwoId,
email: 'jen@gmail.com',
password:'CaiCuid2',
}];


const todos = [{
    _id: new ObjectID(),
    text:'First text todo'
},{
    _id: new ObjectID(),
    text : 'Second text todo',
    completed: true,
    completedAt: 0623
}];

const populateTodos = (done)=>{
    Todo.remove({}).then(()=>{
       return Todo.insertMany(todos);
    }).then(()=>done());
};

const populateUsers = (done)=>{
    User.remove({}).then(()=>{
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne,userOne])
    }).then(()=>done());
};

module.exports = {
    todos:todos,
    populateTodos:populateTodos,
    users: users,
    populateUsers: populateUsers
}