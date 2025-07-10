import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Alert, Spinner, Modal, Form, ListGroup } from 'react-bootstrap';
import { campgroundsAPI, reviewsAPI } from '../services/api';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function CampgroundDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const [campground, setCampground] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [rating, setRating] = useState(1);
    const [reviewText, setReviewText] = useState('');
    const [reviewToDelete, setReviewToDelete] = useState(null);
    const [showReviewDeleteModal, setShowReviewDeleteModal] = useState(false);


    const fetchCampground = async () => {
        try {
            setLoading(true);
            const response = await campgroundsAPI.getById(id);
            setCampground(response.data);
        } catch (err) {
            setError('Failed to fetch campground details');
            console.error('Error fetching campground:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCampground();
    }, [id]);

    const handleDelete = async () => {
        try {
            setDeleting(true);
            await campgroundsAPI.delete(id);
            navigate('/campgrounds');
        } catch (err) {
            console.error('Error deleting campground:', err);
            setError('Failed to delete campground');
        } finally {
            setDeleting(false);
            setShowDeleteModal(false);
        }
    };

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        try {
            await reviewsAPI.create(id, { rating, body: reviewText });
            setRating(1);
            setReviewText('');
            fetchCampground(); // Refresh campground data to show the new review
        } catch (err) {
            console.error('Error submitting review:', err);
            setError('Failed to submit review');
        }
    };

    const handleReviewDelete = async () => {
        if (!reviewToDelete) return;
        try {
            await reviewsAPI.delete(id, reviewToDelete);
            setShowReviewDeleteModal(false);
            setReviewToDelete(null);
            fetchCampground();
        } catch (err) {
            console.error('Error deleting review:', err);
            setError('Failed to delete review');
        }
    };

    const openReviewDeleteModal = (reviewId) => {
        setReviewToDelete(reviewId);
        setShowReviewDeleteModal(true);
    };

    const closeReviewDeleteModal = () => {
        setShowReviewDeleteModal(false);
        setReviewToDelete(null);
    };


    console.log('currentUser:', currentUser);
    console.log('campground:', campground);
    const isAuthor = currentUser && campground && campground.author &&
        currentUser.id === campground.author._id;
    console.log('isAuthor:', isAuthor);

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

    if (!campground) {
        return <Alert variant="warning">Campground not found</Alert>;
    }

    return (
        <Container className="mt-4">
            <Card>
                {campground.image && (
                    <Card.Img
                        variant="top"
                        src={campground.image}
                        alt={campground.title}
                        style={{ height: '400px', objectFit: 'cover' }}
                    />
                )}
                <Card.Body>
                    <Card.Title>{campground.title}</Card.Title>
                    <Card.Text>
                        <strong>Location:</strong> {campground.location}<br />
                        <strong>Price:</strong> ${campground.price}/night<br />
                        <strong>Description:</strong> {campground.description || 'No description available'}
                    </Card.Text>
                    <div className="d-flex gap-2">
                        <Button as={Link} to="/campgrounds" variant="info">
                            Back to Campgrounds
                        </Button>
                        {isAuthor && (
                            <>
                                <Button as={Link} to={`/campgrounds/${id}/edit`} variant="warning">
                                    Edit
                                </Button>
                                <Button
                                    variant="danger"
                                    onClick={() => setShowDeleteModal(true)}
                                >
                                    Delete
                                </Button>
                            </>
                        )}
                    </div>
                </Card.Body>
            </Card>

            <div className="mt-4">
                <h5>Leave a review</h5>
                <Form onSubmit={handleReviewSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Rating: {rating}⭐️</Form.Label>
                        <Form.Control
                            type="range"
                            min={1}
                            max={5}
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className="w-25"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Review</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            placeholder="Write your review here..."
                        />
                    </Form.Group>
                    <Button type="submit" variant="success">Submit</Button>
                </Form>
            </div>

            <div className="mt-4">
                <h5>Reviews</h5>
                {campground.reviews && campground.reviews.length > 0 ? (
                    <ListGroup>
                        {campground.reviews.map((review) => (
                            <ListGroup.Item key={review._id}>
                                <p><strong>Rating:</strong> {review.rating}/5</p>
                                <p>{review.body}</p>
                                <p className="text-muted">By {review.author ? review.author.username : 'Anonymous'}</p>
                                {currentUser && review.author && currentUser.id === review.author._id && (
                                    <div className="d-flex gap-2 mt-2">
                                        <Button
                                            as={Link}
                                            to={`/campgrounds/${id}/reviews/${review._id}/edit`}
                                            variant="warning"
                                            size="sm"
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => openReviewDeleteModal(review._id)}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                )}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                ) : (
                    <p>No reviews yet.</p>
                )}
            </div>

            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete "{campground.title}"? This action cannot be undone.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button
                        variant="danger"
                        onClick={handleDelete}
                        disabled={deleting}
                    >
                        {deleting ? 'Deleting...' : 'Delete'}
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* Review Delete Confirmation Modal */}
            <Modal show={showReviewDeleteModal} onHide={closeReviewDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Review Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this review?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeReviewDeleteModal}>
                        Cancel
                    </Button>
                    <Button
                        variant="danger"
                        onClick={handleReviewDelete}
                    >
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default CampgroundDetails;