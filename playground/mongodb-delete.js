//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
if (err){
   return  console.log('Unable to connect to MongoDB server');
}
const db = client.db('TodoApp');
console.log('Connected to MongoDB server');

//deleteMany

/*db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    console.log(result);
});*/

//deleteOne

/*db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
    console.log(result);
})*/

/*db.collection('Todos').findOneAndDelete({
    completed:false
}).then((result)=>{
    console.log(result);
})*/

/*db.collection('Users').deleteMany({Name: 'Elias'}).then((result)=>{
    console.log(result);
});*/

db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5a734b8f4b47dfa6fe3df795")
}).then((result)=>{
    console.log(JSON.stringify(result,undefined,2));
});





//findOneAndDelete

//client.close();
});