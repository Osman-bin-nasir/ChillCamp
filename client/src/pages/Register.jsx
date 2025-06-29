import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Register() {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation
        if (userData.password !== userData.confirmPassword) {
            return setError('Passwords do not match');
        }

        if (userData.password.length < 6) {
            return setError('Password must be at least 6 characters');
        }

        try {
            setError('');
            setLoading(true);
            await register({
                username: userData.username,
                email: userData.email,
                password: userData.password
            });
            navigate('/campgrounds');
        } catch (error) {
            setError(error.response?.data?.error || 'Failed to create account');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Card className="mx-auto" style={{ maxWidth: '400px' }}>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            value={userData.username}
                            onChange={handleChange}
                            required
                            placeholder="Choose a username"
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            required
                            placeholder="At least 6 characters"
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="confirmPassword"
                            value={userData.confirmPassword}
                            onChange={handleChange}
                            required
                            placeholder="Confirm your password"
                        />
                    </Form.Group>
                    
                    <Button disabled={loading} className="w-100" type="submit">
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </Button>
                </Form>
                <div className="w-100 text-center mt-2">
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Register;