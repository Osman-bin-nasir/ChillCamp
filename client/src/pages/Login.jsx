import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Login() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(credentials);
            navigate('/campgrounds');
        } catch (error) {
            setError(error.response?.data?.error || 'Failed to log in');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="mx-auto" style={{ maxWidth: '400px' }}>
            <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            value={credentials.username}
                            onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={credentials.password}
                            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                            required
                        />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">
                        {loading ? 'Loading...' : 'Log In'}
                    </Button>
                </Form>
                <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/register">Sign Up</Link>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Login;