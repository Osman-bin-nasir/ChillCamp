import { Navbar as BSNavbar, Nav, Container, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Navbar() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    console.log("Navbar currentUser:", currentUser);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <BSNavbar bg="dark" variant="dark" expand="lg" className="shadow-sm py-3">
            <Container>
                <BSNavbar.Brand
                    as={Link}
                    to="/"
                    className="fw-bold fs-4 text-info"
                >
                    ChillCamp
                </BSNavbar.Brand>

                <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
                        <Nav.Link as={Link} to="/campgrounds" className="text-light">Campgrounds</Nav.Link>
                        {currentUser && (
                            <Nav.Link as={Link} to="/campgrounds/new" className="text-light">
                                Add New Camp
                            </Nav.Link>
                        )}
                    </Nav>
                    <Nav className="ms-auto gap-2">
                        {currentUser ? (
                            <>
                                <span className="navbar-text text-light me-2">
                                    Hi <strong>{currentUser.username}!</strong>
                                </span>
                                <Button
                                    variant="outline-info"
                                    size="sm"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login" className="text-light">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register" className="text-light">
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    )
}

export default Navbar
