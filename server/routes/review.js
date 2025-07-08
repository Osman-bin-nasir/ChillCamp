const express = require('express');
const router = express.Router({ mergeParams: true });
const Campground = require('../models/campground');
const Review = require('../models/review');

// POST /api/campgrounds/:id/reviews
router.post('/:id/reviews', async (req, res) => {
    const { id } = req.params;
    const { body, rating } = req.body;

    const campground = await Campground.findById(id);
    const review = new Review({ body, rating });

    campground.reviews.push(review);
    await review.save();
    await campground.save();

    res.status(201).json({ message: 'Review added', review });
});

module.exports = router;
