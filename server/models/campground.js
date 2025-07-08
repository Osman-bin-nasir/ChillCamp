const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CampgroundSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type:String,
        required: true
    },
    price: {
        type: Number,  // Changed from String to Number
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    //creates a relation between campground.js and user.js 
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [{
        type:Schema.Types.ObjectId,
        ref:'Review'
    }]

}, {
    timestamps: true  // This will add createdAt and updatedAt fields
});

module.exports = mongoose.model('Campground', CampgroundSchema)