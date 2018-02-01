//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
if (err){
   return  console.log('Unable to connect to MongoDB server');
}
const db = client.db('TodoApp');
console.log('Connected to MongoDB server');

/*db.collection('Todos').insertOne({
text: 'Something to do',
completed:false
}, (err, result)=>{
if (err){
    return console.log('Unable do insert todo');
}
console.log(JSON.stringify(result.ops, undefined, 2))
});*/

db.collection('Users').insertOne({
Name: 'Elias',
age:30,
location: 'Falls Church'
}, (err, result)=>{
if (err){
    return console.log('Unable do insert todo');
}
console.log(JSON.stringify(result.ops, undefined, 2))
});


client.close();
});