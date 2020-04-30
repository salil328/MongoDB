const express = require('express')
const bodyparser = require('body-parser')
const app = express()
require('./db/mongoose')
const User = require('./models/user')
const port = process.env.PORT||3000

app.use(bodyparser.json())

app.post('/users',(req,res)=>{
    const user = new User(req.body)
    user.save().then(()=>{
      res.send(user)
    }).catch((error)=>{
console.log(error)
    })
})

app.listen(port,()=>{
    console.log("server is running on " + port)
})