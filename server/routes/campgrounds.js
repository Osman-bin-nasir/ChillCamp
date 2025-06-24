//server/routes/campgrounds.js
const express = require('express')
const router = express.Router()
const Campground = require('../models//campground')


//this gets all the campgrounds 
router.get('/',async(req,res)=>{
    try{
        const campgrounds = await Campground.find({})
        res.json(campgrounds)
    }
    catch (error){
        res.status(500).json({error: error.message })
    }
});

//this get single campground 
router.get('/:id', async(req,res)=>{
    try{
        const campground = await Campground.findById(req.params.id)
        if(!campground){
            return res.status(404).json({error: 'Campground not found'})
        }
        res.json(campground)
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
})

module.exports = router;