import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <Container className="py-5">
      <h1 className="section-title text-center mb-4">Contact Us</h1>
      <Row className="justify-content-center">
        <Col lg={4} md={6} sm={12} className="mb-4">
          <div className="contact-info">
            <h3 className="mb-4">Get in Touch</h3>
            <div className="mb-3">
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              <span>+1 234 567 890</span>
            </div>
            <div className="mb-3">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              <span>info@travelease.com</span>
            </div>
            <div className="mb-3">
              <FontAwesomeIcon icon={faLocationDot} className="me-2" />
              <span>123 Travel Street, City, Country</span>
            </div>
          </div>
        </Col>
        <Col lg={6} md={8} sm={10} xs={12}>
          <Form className="contact-form">
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
