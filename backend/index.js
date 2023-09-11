const express= require('express')
const mongoose= require('mongoose')
const connectDB = require('./db/db.js')
const app= express()
require('dotenv').config()

const port= process.env.PORT || 5000

// console.log(process.env.MONGO_URI)

const start=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true
        })
        app.get("/",(req,res)=>{
            res.set({
                "Allow-access-Allow-Origin": '*'
            })
        }).listen(port,console.log(`Server listening on ${port}...`));

    } catch (error) {
        console.log('error')
    }
}


start();