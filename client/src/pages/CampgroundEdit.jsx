import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { campgroundsAPI } from "../services/api";

function CampgroundEdit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [campgroundData, setCampgroundData] = useState({
        title: '',
        location: '',
        price: '',
        description: ''
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);

    // Fetch existing campground data when component mounts
    useEffect(() => {
        const fetchCampground = async () => {
            try {
                setInitialLoading(true);
                const response = await campgroundsAPI.getById(id);
                setCampgroundData({
                    title: response.data.title,
                    location: response.data.location,
                    price: response.data.price,
                    description: response.data.description
                });
            } catch (err) {
                console.error('Error fetching campground:', err);
                setError('Failed to load campground data');
            } finally {
                setInitialLoading(false);
            }
        };

        fetchCampground();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        
        try {
            await campgroundsAPI.update(id, campgroundData);
            navigate(`/campgrounds/${id}`);
        } catch (err) {
            console.error('Error updating campground:', err);
            setError('Failed to update campground');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setCampgroundData({
            ...campgroundData,
            [e.target.name]: e.target.value
        });
    };

    if (initialLoading) {
        return (
            <div className="text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <div>
            <h2>Edit Campground</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={campgroundData.title}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        type="text"
                        name="location"
                        value={campgroundData.location}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price per night</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={campgroundData.price}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        value={campgroundData.description}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <div className="d-flex gap-2">
                    <Button type="submit" disabled={loading}>
                        {loading ? 'Updating...' : 'Update Campground'}
                    </Button>
                    <Button 
                        variant="secondary" 
                        onClick={() => navigate(`/campgrounds/${id}`)}
                        disabled={loading}
                    >
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default CampgroundEdit;