import { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Alert, Spinner } from 'react-bootstrap';
import { campgroundsAPI } from '../services/api';
import { Link, useLocation} from 'react-router-dom';

function Campgrounds() {
    const [campgrounds, setCampgrounds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const fetchCampgrounds = async () => {
            try {
                setLoading(true);
                const response = await campgroundsAPI.getAll();
                setCampgrounds(response.data);
            } catch (err) {
                setError('Failed to fetch campgrounds');
                console.error('Error fetching campgrounds:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchCampgrounds();
    }, [location.pathname]);

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
            <h1>All Campgrounds</h1>
            <Row>
                {campgrounds.map((campground) => (
                    <Col md={6} lg={4} key={campground._id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{campground.title}</Card.Title>
                                <Card.Text>
                                    <strong>Location:</strong> {campground.location}<br />
                                    <strong>Price:</strong> ${campground.price}/night
                                </Card.Text>
                                <Button as={Link} to={`/campgrounds/${campground._id}`} variant="primary">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Campgrounds;