const express = require('express');
const router = express.Router({ mergeParams: true });
const Campground = require('../models/campground');
const Review = require('../models/review');
const { isLoggedIn, isReviewAuthor } = require('../middleware/auth');

// POST /api/campgrounds/:id/reviews
router.post('/', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const { body, rating } = req.body;

    const campground = await Campground.findById(id);
    const review = new Review({ body, rating });
    review.author = req.user._id;

    campground.reviews.push(review);
    await review.save();
    await campground.save();

    res.status(201).json({ message: 'Review added', review });
});

// PUT /api/campgrounds/:id/reviews/:reviewId
router.put('/:reviewId', isLoggedIn, isReviewAuthor, async (req, res) => {
    const { reviewId } = req.params;
    const { body, rating } = req.body;
    await Review.findByIdAndUpdate(reviewId, { body, rating });
    res.json({ message: 'Review updated' });
});

// DELETE /api/campgrounds/:id/reviews/:reviewId
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, async (req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.json({ message: 'Review deleted' });
});

module.exports = router;
