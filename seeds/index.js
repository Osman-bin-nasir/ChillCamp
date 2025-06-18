const mongoose = require('mongoose')
const Campground = require('../models/campground')
const cities = require('./cities')
const campground = require('../models/campground')
const {descriptors , places} = require('./seedHelpers')

mongoose.connect('mongodb://localhost:27017/ChillCamp')
    .then(()=>console.log("Connected to DB"))
    .catch(err => console.log(err))

const sample = array => array[Math.floor(Math.random()* array.length)]

const seedDB = async() =>{
    await campground.deleteMany({})
    for(i = 0 ; i < 50 ; i++){
        const random1000 = Math.floor(Math.random() * 1000)
        const camp = new Campground({
        location: `${cities[random1000].city}, ${cities[random1000].state}`,
        title: `${sample(descriptors)} ${sample(places)}`,
        price: `${i}`
    })
    await camp.save();
}
}

seedDB().then(() => {
    mongoose.connection.close();
})