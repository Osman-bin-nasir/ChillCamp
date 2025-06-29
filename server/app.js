//server/app.js
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')
const cors = require('cors')
//MongoStore because the documentation said so... users dont need to log in repeatedly for task requiring auth 
const MongoStore = require('connect-mongo') 
const passport = require('./config/passport')
//ensures that when you refresh the page you stayed logged in 
const session = require('express-session')

require('dotenv').config({ path: path.join(__dirname, '../.env') });
const connectDB = require('./config/db');

connectDB()

app.use(session({
    secret: process.env.SESSION_SECRET ,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    }),
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

//passport middleware
app.use(passport.initialize())
app.use(passport.session())


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true //impotant 
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Routes
app.use('/api/campgrounds',require('./routes/campgrounds'))
app.use('api/auth',require('./routes/auth'))


app.get('/',(req,res)=>{
    res.json({message:'ChillCamp API is running!!!'}) 
})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server is live at port ${PORT}`)
})