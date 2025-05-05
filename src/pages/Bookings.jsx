"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DESTINATION_PRICES = {
  Paris: 3000,
  Bali: 1799,
  "New York": 1999,
  Tokyo: 2799,
  Dubai: 3499,
  London: 2499,
  Maldives: 3999,
  Singapore: 2099,
  Thailand: 1499,
  Sydney: 2899,
  Santorini: 3299,
  "Los Angeles": 2199,
  Hawaii: 3499,
  Egypt: 2599,
  Venice: 3099,
  Iceland: 3699,
  Barcelona: 2599,
};

const Bookings = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    destination: "",
    checkIn: null,
    checkOut: null,
    travelers: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date, field) => {
    setFormData({ ...formData, [field]: date });
  };

  const calculateTotalCost = () => {
    const basePrice = DESTINATION_PRICES[formData.destination] || 0;
    return basePrice * formData.travelers;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const totalCost = calculateTotalCost();
    navigate("/payment", {
      state: {
        ...formData,
        totalCost,
      },
    });
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 px-3">
      <Card className="shadow p-4 border-0 rounded w-100" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4 text-dark">Book Your Trip</h2>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="firstName">First Name</Form.Label>
                  <Form.Control
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    aria-label="First Name"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="lastName">Last Name</Form.Label>
                  <Form.Control
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    aria-label="Last Name"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="destination">Destination</Form.Label>
              <Form.Select
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                aria-label="Destination"
              >
                <option value="" disabled>
                  Select destination
                </option>
                {Object.keys(DESTINATION_PRICES).map((dest) => (
                  <option key={dest} value={dest}>
                    {dest}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="checkIn">Check-in Date</Form.Label>
                  <DatePicker
                    id="checkIn"
                    selected={formData.checkIn}
                    onChange={(date) => handleDateChange(date, "checkIn")}
                    className="form-control"
                    placeholderText="dd-mm-yyyy"
                    required
                    aria-label="Check-in Date"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="checkOut">Check-out Date</Form.Label>
                  <DatePicker
                    id="checkOut"
                    selected={formData.checkOut}
                    onChange={(date) => handleDateChange(date, "checkOut")}
                    className="form-control"
                    placeholderText="dd-mm-yyyy"
                    required
                    aria-label="Check-out Date"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="travelers">Number of Travelers</Form.Label>
              <Form.Control
                id="travelers"
                type="number"
                name="travelers"
                min="1"
                value={formData.travelers}
                onChange={handleChange}
                required
                aria-label="Number of Travelers"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Book Now
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Bookings;
