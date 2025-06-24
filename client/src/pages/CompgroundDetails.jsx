// CampgroundDetails.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button, Alert, Spinner } from 'react-bootstrap';
import { campgroundsAPI } from '../services/api';
import { Link } from 'react-router-dom';

function CampgroundDetails() {
    const { id } = useParams(); // Get the campground ID from the URL
    const [campground, setCampground] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCampground = async () => {
            try {
                setLoading(true);
                const response = await campgroundsAPI.getById(id); // Assume you have a getById method
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
                    <Button as={Link} to="/campgrounds" variant="secondary">
                        Back to Campgrounds
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default CampgroundDetails;