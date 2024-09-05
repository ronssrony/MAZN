const mongoose = require('mongoose'); 
const config = require('config') ;  
const dbgr = require('debug')("development:mongoose")
const dotenv = require('dotenv') ;
dotenv.config()
mongoose.
connect(`${process.env.MONGODB_URL}/scatch`) 
.then(function(){
    dbgr('connected')
})
.catch(function(err){
    console.log(err)
})

module.exports = mongoose.connection 