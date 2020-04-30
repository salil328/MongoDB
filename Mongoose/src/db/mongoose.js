const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:3000/mongodb-api',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true
})
mongoose.Promise = global.Promise