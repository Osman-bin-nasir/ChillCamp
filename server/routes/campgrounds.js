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

// CREATE new campground - THIS WAS MISSING!
router.post('/', async(req, res) => {
    try {
        console.log('Received data:', req.body); // For debugging
        const campground = new Campground(req.body);
        await campground.save();
        res.status(201).json(campground);
    } catch (error) {
        console.error('Error creating campground:', error);
        res.status(400).json({ error: error.message });
    }
});

// UPDATE campground
router.put('/:id', async(req, res) => {
    try {
        const campground = await Campground.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!campground) {
            return res.status(404).json({ error: 'Campground not found' });
        }
        res.json(campground);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE campground
router.delete('/:id', async(req, res) => {
    try {
        const campground = await Campground.findByIdAndDelete(req.params.id);
        if (!campground) {
            return res.status(404).json({ error: 'Campground not found' });
        }
        res.json({ message: 'Campground deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;