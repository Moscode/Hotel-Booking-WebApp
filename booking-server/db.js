const mongoose = require('mongoose')
require('dotenv').config()

let MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})

let connection = mongoose.connection

connection.on('error', ()=>{
    console.log("Mongo DB connection fail")
})

connection.on('connected', ()=>{
    console.log("Mongo DB connected successfully")
})

module.exports = mongoose