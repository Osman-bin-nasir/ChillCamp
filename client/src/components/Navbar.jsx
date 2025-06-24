import {Navbar as BSNavbar ,Nav , Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <BSNavbar bg="dark" variant="dark" expand="lg">
        <Container>
            <BSNavbar.Brand as={Link} to="/">ChillCamp</BSNavbar.Brand>
            <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BSNavbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/campgrounds">Campgrounds</Nav.Link>
                </Nav>
            </BSNavbar.Collapse>
        </Container>
    </BSNavbar>
    )
}
export default Navbar