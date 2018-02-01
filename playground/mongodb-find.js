//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
if (err){
   return  console.log('Unable to connect to MongoDB server');
}
const db = client.db('TodoApp');
console.log('Connected to MongoDB server');

/*db.collection('Todos').find({
    _id: new ObjectID('5a70b84c24b654143870c1e8') 
}).toArray().then((docs)=>{
console.log('Todos');
console.log(JSON.stringify(docs, undefined, 2));
}, ()=>{
    console.log('Unable to fetch todos', err);
});*/

db.collection('Todos').find().count().then((count)=>{
console.log('Todos count:', count );

}, ()=>{
    console.log('Unable to fetch todos', err);
});


//client.close();
});