import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/destinations"); // Adjust based on your server URL
      setDestinations(res.data);
    } catch (error) {
      console.error("Error fetching destinations", error);
    }
  };

  return (
    <Container className="py-5">
      <Carousel fade interval={3000} className="mb-5">
        {destinations.slice(0, 3).map((destination, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={destination.image}
              alt={destination.name}
              style={{ height: "550px", objectFit: "cover", borderRadius: "5px" }}
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded">
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <h1 className="section-title text-center mb-5" data-aos="fade-up">
        Popular Destinations
      </h1>

      <Row>
        {destinations.map((destination, index) => (
          <Col md={4} className="mb-4 d-flex align-items-stretch" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <Card className="w-100 d-flex flex-column">
              <Card.Img
                variant="top"
                src={destination.image}
                alt={destination.name}
                style={{ height: "200px", objectFit: "cover", borderRadius: "5px" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{destination.name}</Card.Title>
                  <Card.Text>{destination.description}</Card.Text>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="h5 mb-0">{destination.price}</span>
                  <Button variant="primary" onClick={() => navigate(`/destination/${destination.name}`)}>
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Destinations;
