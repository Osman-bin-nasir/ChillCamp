//server/app.js
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const paath = require('path')
const cors = require('cors')

require('dotenv').config();
const connectDB = require('./config/db');

connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Routes
app.use('/api/campgrounds',require('./routes/campgrounds'))


// const Campground = require('./models/campground')
// const { title } = require('process');



app.get('/',(req,res)=>{
    res.json({message:'ChillCamp API is running!!!'}) 
})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server is live at port ${PORT}`)
})