import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Alert, Spinner, Modal } from 'react-bootstrap';
import { campgroundsAPI } from '../services/api';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

function CampgroundDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const {currentUser} = useAuth();
    const [campground, setCampground] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
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

    const isAuthor = currentUser && campground && campground.author &&
    currentUser.id === campground.author._id;


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
                        <Button as={Link} to="/campgrounds" variant="secondary">
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
        </Container>
    );
}

export default CampgroundDetails;