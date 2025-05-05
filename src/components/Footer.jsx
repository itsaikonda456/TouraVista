import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer rounded-2">
      <Container>
        <Row>
          <Col lg={3} md={6} className="mb-4">
            <h5>TravelEase</h5>
            <p>Making your travel dreams come true with unforgettable experiences and personalized service.</p>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/destinations">Destinations</a></li>
              <li><a href="/packages">Packages</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h5>Contact Info</h5>
            <ul className="footer-contact">
              <li>123 Travel Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: +1 234 567 890</li>
              <li>Email: info@travelease.com</li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h5>Follow Us</h5>
            <div className="social-links">
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3 border-top">
            <p className="mb-0">&copy; 2025 TravelEase. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;