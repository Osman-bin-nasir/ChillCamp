import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; //allows redirect after successful form submission
import { Form, Button, Alert } from "react-bootstrap"
import { campgroundsAPI } from "../services/api";


function CampgroundNew() {
    const navigate = useNavigate()
    const [campgroundData, setCampgroundData] = useState({
        title: '',
        location: '',
        price: '',
        description: '',
        image: ''
    })
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            await campgroundsAPI.create(campgroundData);
            navigate('/campgrounds')
        }
        catch (err) {
            console.log(err)
            setError('Failed to create campground')
        }
        finally {
            setLoading(false)
        }
    }
    const handleChange = (e) => {
        setCampgroundData({
            ...campgroundData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <h2>Add New Campground</h2>
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
                <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="image"
                        value={campgroundData.image}
                        onChange={handleChange}
                        required
                        />
                </Form.Group>
                <Button type="submit" disabled={loading}>
                    {loading ? 'Creating...' : 'Create Campground'}
                </Button>
            </Form>
            
        </div>
    )
}
export default CampgroundNew