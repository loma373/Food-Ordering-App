const express= require('express')
const mongoose= require('mongoose')
const bodyparser= require('body-parser')
const connectDB = require('./db/db.js')
const routes=require('./routes/routes.js')
const app= express()
require('dotenv').config()

const port= process.env.PORT || 5000
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With , Content-Type, Accept"
    );
    next();
})
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));


app.use('/api', routes)
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