const express = require('express')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config();
const path = require('path');

const connectDB = require('./config/db');
const Campground = require('./models/campground')
const { title } = require('process');
connectDB()

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/makecampground', async(req,res)=>{
    const camp = new Campground({title: 'My Backyard', price:'2500'})
    await camp.save();
    res.send(camp);
})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log('server is live at port 3000')
})