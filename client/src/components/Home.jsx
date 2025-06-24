import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Container className="text-center">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1 className="display-4 mb-4">Welcome to ChillCamp!</h1>
                    <p className="lead mb-4">
                        Jump right in and explore our many campgrounds. 
                        Feel free to share some of your own and comment on others!
                    </p>
                    <Button as={Link} to="/campgrounds" variant="primary" size="lg">
                        View Campgrounds
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;