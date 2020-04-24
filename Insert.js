const mongodb = require('mongodb')
const Mongoclient = mongodb.MongoClient
const objectid = mongodb.ObjectID

const connecturl = 'mongodb://127.0.0.1:27017'
const databasename = 'task1'

const id = new objectid()
console.log(id)
console.log(id.toHexString().length)
console.log(id.getTimestamp())

Mongoclient.connect(connecturl,{ useUnifiedTopology : true} , (error,client)=>{
if(error){
   return console.log(" unable to connect to data base")
}

//console.log("connected")
const db = client.db(databasename)
db.collection('users').insertOne({
_id : id,    
name : 'vikram',
age : 20
},(error,result)=>{
if(error){
    return console.log("unable to insert")
}
console.log(result.ops)
})


// db.collection('users').insertMany([
//     {
//         name: 'John',
//         age: 24
//     },{
// name : 'Raj',
// age : 21
//     }
// ],(error,result)=>{
//     if(error){
//         return console.log("unable to insert")
//     }
//     console.log(result.ops)
// })

})