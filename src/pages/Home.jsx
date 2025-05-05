import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faHotel, faCar } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  
    // Modify the fetch URL to ensure it correctly points to /api/home
    fetch("http://localhost:5000/api/home")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch home destinations');
        }
        return res.json();
      })
      .then((data) => {
        // No need to reference 'featuredDestinations' anymore, as the data is directly an array
        setDestinations(data); 
      })
      .catch((err) => {
        console.error('Error fetching featured destinations:', err);
        setError(err.message); // Set error message
      });
  }, []);
  


  const handleShowModal = (destination) => {
    setSelectedDestination(destination);
    setShowModal(true);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 data-aos="fade-up">Discover Your Next Adventure</h1>
              <p data-aos="fade-up" data-aos-delay="200">
                Explore the world's most beautiful destinations with our
                exclusive travel packages.
              </p>
              <Link to="/destinations">
                <Button variant="primary" size="lg" data-aos="zoom-in">
                  Start Planning
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services py-5">
        <Container>
          <h2 className="section-title text-center" data-aos="fade-up">
            Our Services
          </h2>
          <Row>
            <Col md={4} className="mb-4" data-aos="flip-left">
              <Card className="text-center p-4">
                <FontAwesomeIcon icon={faPlane} className="service-icon" />
                <Card.Body>
                  <Card.Title>Flight Booking</Card.Title>
                  <Card.Text>
                    Find the best deals on flights to your dream destination.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4" data-aos="flip-left" data-aos-delay="200">
              <Card className="text-center p-4">
                <FontAwesomeIcon icon={faHotel} className="service-icon" />
                <Card.Body>
                  <Card.Title>Hotel Reservations</Card.Title>
                  <Card.Text>
                    Book comfortable stays at premium hotels worldwide.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4" data-aos="flip-left" data-aos-delay="400">
              <Card className="text-center p-4">
                <FontAwesomeIcon icon={faCar} className="service-icon" />
                <Card.Body>
                  <Card.Title>Transportation</Card.Title>
                  <Card.Text>
                    Get reliable transportation services at your destination.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Destinations */}
      <section className="featured-destinations py-5 bg-light">
        <Container>
          <h2 className="section-title text-center" data-aos="fade-up">
            Featured Destinations
          </h2>
          <Row>
            {/* Check for error or if destinations are loaded */}
            {error ? (
              <div className="error-message text-center">
                <p>Something went wrong while fetching destinations: {error}</p>
              </div>
            ) : (
              Array.isArray(destinations) && destinations.map((destination, index) => (
                <Col
                  md={4}
                  key={index}
                  className="mb-4"
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src={destination.image}
                      alt={destination.name}
                    />
                    <Card.Body>
                      <Card.Title>{destination.name}</Card.Title>
                      <Card.Text>{destination.description}</Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => handleShowModal(destination)}
                      >
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>

   {/* Testimonials Section */}
<section className="testimonials py-5 bg-white">
  <Container>
    <h2 className="section-title text-center" data-aos="fade-up">
      What Our Travelers Say
    </h2>
    <Row>
      <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="0">
        <Card className="shadow p-4">
          <Card.Text>
            "The trip was fantastic! Everything was well-organized and seamless. I didn't have to worry about a thing."
          </Card.Text>
          <Card.Footer className="text-muted">— Alex Smith</Card.Footer>
        </Card>
      </Col>

      <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="200">
        <Card className="shadow p-4">
          <Card.Text>
            "Absolutely loved the destinations and how responsive the team was. Made our honeymoon truly memorable!"
          </Card.Text>
          <Card.Footer className="text-muted">— Priya Mehra</Card.Footer>
        </Card>
      </Col>

      <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="400">
        <Card className="shadow p-4">
          <Card.Text>
            "From flights to hotel bookings, everything was handled professionally. Highly recommend TravelEase!"
          </Card.Text>
          <Card.Footer className="text-muted">— Daniel Lee</Card.Footer>
        </Card>
      </Col>
    </Row>
  </Container>
</section>


      {/* Destination Modal */}
      {selectedDestination && (
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedDestination.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              {selectedDestination.gallery?.slice(0, 6).map((img, i) => (
                <Col xs={6} sm={4} key={i} className="mb-3">
                  <img
                    src={img}
                    alt={selectedDestination.name}
                    className="modal-image"
                  />
                </Col>
              ))}
            </Row>
            <p className="mt-3">{selectedDestination.description}</p>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default Home;
