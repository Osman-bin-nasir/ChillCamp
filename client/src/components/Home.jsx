import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import { campgroundsAPI } from '../services/api';
import cities from '../../../server/seeds/cities';

function Home() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [campgrounds, setCampgrounds] = useState([]);

  const center = { lng: 77.5946, lat: 12.9716 };
  const zoom = 4;

  maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

  useEffect(() => {
    const fetchCampgrounds = async () => {
      try {
        const response = await campgroundsAPI.getAll();
        setCampgrounds(response.data);
      } catch (error) {
        console.error('Error fetching campgrounds:', error);
      }
    };

    fetchCampgrounds();
  }, []);

  const processCampgrounds = () => {
    const citiesArray = Array.isArray(cities) ? cities : [];
    return campgrounds
      .map((camp) => {
        const cityName = camp.location?.split(',')[0].trim();
        const cityData = citiesArray.find(
          (c) => c.city?.toLowerCase() === cityName?.toLowerCase()
        );
        if (!cityData) return null;

        const offsetLng = 0.01 * (Math.random() - 0.5);
        const offsetLat = 0.01 * (Math.random() - 0.5);

        return {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [cityData.longitude + offsetLng, cityData.latitude + offsetLat],
          },
          properties: {
            id: camp._id,
            title: camp.title,
            location: camp.location,
            price: camp.price,
          },
        };
      })
      .filter(Boolean);
  };

  useEffect(() => {
    if (!mapContainer.current || map.current || campgrounds.length === 0) return;

    const geojson = {
      type: 'FeatureCollection',
      features: processCampgrounds(),
    };

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [center.lng, center.lat],
      zoom,
    });

    map.current.on('load', () => {
      map.current.addSource('campgrounds', {
        type: 'geojson',
        data: geojson,
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      map.current.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'campgrounds',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#00BCD4',
            10,
            '#2196F3',
            30,
            '#3F51B5',
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            15,
            10,
            25,
            30,
            35,
          ],
        },
      });

      map.current.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'campgrounds',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['Arial Unicode MS Bold'],
          'text-size': 12,
        },
      });

      map.current.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'campgrounds',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': '#FF5722',
          'circle-radius': 6,
          'circle-stroke-width': 1,
          'circle-stroke-color': '#fff',
        },
      });

      map.current.on('click', 'clusters', async (e) => {
        const features = map.current.queryRenderedFeatures(e.point, {
          layers: ['clusters'],
        });

        const clusterId = features[0].properties.cluster_id;
        const source = map.current.getSource('campgrounds');

        source.getClusterExpansionZoom(clusterId, (err, zoom) => {
          if (err) return;

          map.current.easeTo({
            center: features[0].geometry.coordinates,
            zoom: zoom,
          });
        });
      });

      map.current.on('click', 'unclustered-point', (e) => {
        const props = e.features[0].properties;
        const coords = e.features[0].geometry.coordinates;

        new maptilersdk.Popup()
          .setLngLat(coords)
          .setHTML(`
            <strong>${props.title}</strong><br/>
            Location: ${props.location}<br/>
            Price: $${props.price}/night
          `)
          .addTo(map.current);
      });

      ['clusters', 'unclustered-point'].forEach((layer) => {
        map.current.on('mouseenter', layer, () => {
          map.current.getCanvas().style.cursor = 'pointer';
        });
        map.current.on('mouseleave', layer, () => {
          map.current.getCanvas().style.cursor = '';
        });
      });
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [campgrounds]);

  return (
    <>
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="display-4 mb-4">Welcome to ChillCamp!</h1>
            <p className="lead mb-4">
              Jump right in and explore our many campgrounds. Feel free to share some of your own
              and comment on others!
            </p>
            <Button as={Link} to="/campgrounds" variant="primary" size="lg" className="mb-4">
              View Campgrounds
            </Button>
            <div className="mb-3">
              <small className="text-muted">
                Showing {campgrounds.length} campgrounds on the map • Zoom in to see individual
                campgrounds
              </small>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="map-wrap">
        <div ref={mapContainer} className="map" style={{ height: '400px', width: '100%' }} />
      </div>
    </>
  );
}

export default Home;
