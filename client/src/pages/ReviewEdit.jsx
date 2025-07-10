import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { reviewsAPI } from '../services/api';

function ReviewEdit() {
    const { id, reviewId } = useParams();
    const navigate = useNavigate();
    const [reviewData, setReviewData] = useState({
        rating: 1,
        body: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReview = async () => {
            try {
                // Assuming you have a getReviewById in your reviewsAPI
                // For now, we'll fetch the campground and find the review
                // A dedicated API endpoint for getting a single review would be better
                const campgroundResponse = await reviewsAPI.getCampgroundReviews(id);
                const reviewToEdit = campgroundResponse.data.reviews.find(r => r._id === reviewId);

                if (reviewToEdit) {
                    setReviewData({
                        rating: reviewToEdit.rating,
                        body: reviewToEdit.body
                    });
                } else {
                    setError('Review not found');
                }
            } catch (err) {
                console.error('Error fetching review:', err);
                setError('Failed to load review for editing');
            } finally {
                setLoading(false);
            }
        };
        fetchReview();
    }, [id, reviewId]);

    const handleChange = (e) => {
        setReviewData({
            ...reviewData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await reviewsAPI.update(id, reviewId, reviewData);
            navigate(`/campgrounds/${id}`);
        } catch (err) {
            console.error('Error updating review:', err);
            setError('Failed to update review');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    return (
        <div>
            <h2>Edit Review</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                        type="range"
                        min={1}
                        max={5}
                        name="rating"
                        value={reviewData.rating}
                        onChange={handleChange}
                        className="w-25"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Review</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="body"
                        value={reviewData.body}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button type="submit" disabled={loading}>
                    {loading ? 'Updating...' : 'Update Review'}
                </Button>
            </Form>
        </div>
    );
}

export default ReviewEdit;
