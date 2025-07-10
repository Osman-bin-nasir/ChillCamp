import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import * as  maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";

function Home() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const center = { lng: 77.5946, lat: 12.9716 }; // You can use default or one from a campground
    const zoom = 5;
    maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

    useEffect(() => {
        if (map.current) return;
    
        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: [center.lng, center.lat],
            zoom: zoom
        });
    }, [center.lng, center.lat, zoom]);

    return (
        <>
        <Container className="text-center">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1 className="display-4 mb-4">Welcome to ChillCamp!</h1>
                    <p className="lead mb-4">
                        Jump right in and explore our many campgrounds. 
                        Feel free to share some of your own and comment on others!
                    </p>
                    <Button as={Link} to="/campgrounds" variant="primary" size="lg"  className="mb-4">
                        View Campgrounds
                    </Button>
                </Col>
            </Row>
        </Container>
        <div className="map-wrap">
                <div ref={mapContainer} className="map" />
            </div>
        </>
    );
}

export default Home;