const mongodb = require('mongodb')
const Mongoclient = mongodb.MongoClient
const objectID = mongodb.ObjectID

const connecturl = 'mongodb://127.0.0.1:27017'
const databasename = 'task1'
const id = new objectID("5ea2f8a5d2484f2870ef0ff4")
Mongoclient.connect(connecturl,{ useUnifiedTopology : true} , (error,client)=>{
if(error){
   return console.log(" unable to connect to data base")
}

//console.log("connected")
const db = client.db(databasename)
// db.collection('users').findOne({    
// //name : 'vikram'
// _id : id

// },(error,user)=>{
// if(error){
//     return console.log("unable to fetch")
// }
// console.log(user)
// })

db.collection('users').find({age : 23}).toArray((error,users)=>{
    console.log(users)
})
db.collection('users').find({age : 23}).count((error,count)=>{
    console.log(count)

})

})