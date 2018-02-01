//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
if (err){
   return  console.log('Unable to connect to MongoDB server');
}
const db = client.db('TodoApp');
console.log('Connected to MongoDB server');

/*db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a7341d54b47dfa6fe3df4a6')
},{
$set: {
    completed:true
}},{
    returnOnriginal:true
}).then((result)=>{
    console.log(result);
});*/

db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a7388da4b47dfa6fe3e0e2e')
},{
$inc: {
    age: 1
}},{
    returnOnriginal:true
}).then((result)=>{
    console.log(result);
});


//client.close();
});