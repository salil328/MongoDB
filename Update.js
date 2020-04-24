const mongodb = require('mongodb')
const Mongoclient = mongodb.MongoClient
const connecturl = 'mongodb://127.0.0.1:27017'
const databasename = 'task1'

Mongoclient.connect(connecturl, {useUnifiedTopology : true},(error,client)=>{
    if(error){
       return console.log(" unable to connect to data base")
    }
const db = client.db(databasename)
const updatepromise = db.collection('users').updateMany({
age :23
},{
    $set : {
        name : 'mike'
    }


})

updatepromise.then((result)=>{
    console.log(result.modifiedCount)
}).catch((error)=>{
    console.log(error)
})

})