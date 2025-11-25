import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/Packages.css';
import SearchBar from '../components/SearchBar';

const Packages = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const res = await fetch("/data/packages.json");

      if (!res.ok) {
        throw new Error("Failed to load packages JSON");
      }

      const data = await res.json();

      if (Array.isArray(data)) {
        setPackages(data);
      } else {
        console.error("Invalid packages JSON format:", data);
      }
    } catch (err) {
      console.error("Error fetching packages:", err);
    }
  };

  const handleSearch = (query) => {
    if (query === "") return;
    setSearchQuery(query.toLowerCase());
    setSearched(true);
  };

  const handleReset = () => {
    setSearchQuery("");
    setSearched(false);
  };

  const filteredPackages = searchQuery
    ? packages.filter(pkg => pkg.name.toLowerCase().includes(searchQuery))
    : packages;

  return (
    <Container className="py-5">
      <h1 className="section-title text-center mb-5">Travel Packages</h1>

      <SearchBar onSearch={handleSearch} onReset={handleReset} />

      <Row className="justify-content-center mt-4">
        {searched && searchQuery === '' ? (
          <p className="text-center mt-4">Showing all trips</p>
        ) : filteredPackages.length > 0 ? (
          filteredPackages.map((pkg, index) => (
            <Col 
              xl={3} 
              lg={4} 
              md={6} 
              sm={12} 
              className="mb-4 d-flex justify-content-center align-items-stretch" 
              key={index}
            >
              <Card className="package-card">
                <Card.Img 
                  variant="top" 
                  src={pkg.image} 
                  alt={pkg.name} 
                  className="card-img-custom" 
                />

                <Card.Body>
                  <Card.Title className="package-title">{pkg.name}</Card.Title>
                  <Card.Text>
                    <div className="mb-3">
                      <strong>Includes:</strong>
                      <ul className="list-unstyled mt-2">
                        {pkg.includes.map((item, i) => (
                          <li key={i}>✓ {item}</li>
                        ))}
                      </ul>
                    </div>
                  </Card.Text>

                  <Button 
                    variant="primary" 
                    className="package-button"
                    onClick={() => navigate('/bookings')}
                  >
                    Book Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center mt-4">No packages found.</p>
        )}
      </Row>
    </Container>
  );
};

export default Packages;
