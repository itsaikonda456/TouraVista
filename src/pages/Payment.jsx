"use client"

import { useState } from "react"
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"
import { useNavigate, useLocation } from "react-router-dom"
import { FaCheckCircle } from "react-icons/fa"

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const bookingDetails = location.state || {}

  const formatDate = (dateString) => {
    if (!dateString) return "N/A"
    const date = new Date(dateString)
    return date.toLocaleDateString()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingDetails),
      })

      if (response.ok) {
        setShowSuccessMessage(true)

        setTimeout(() => {
          navigate("/")
        }, 3000)
      } else {
        alert("Payment successful, but email could not be sent.")
      }
    } catch (error) {
      alert("Error processing payment. Please try again.")
    }
  }

  return (
    <Container className="py-5 position-relative">
      <h1 className="section-title text-center mb-5">Payment Details</h1>

      {/* Custom Success Message Box */}
      {showSuccessMessage && (
        <div className="success-overlay">
          <div className="success-box">
            <FaCheckCircle className="success-icon" />
            <h3>Payment Successful</h3>
            <p>Thanks For Visiting our Website</p>
          </div>
        </div>
      )}

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="payment-card">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <div className="payment-methods mb-4">
                  <div className="d-flex justify-content-center gap-3">
                    <Button
                      variant={paymentMethod === "card" ? "primary" : "outline-primary"}
                      onClick={() => setPaymentMethod("card")}
                    >
                      Credit Card
                    </Button>
                    <Button
                      variant={paymentMethod === "paypal" ? "primary" : "outline-primary"}
                      onClick={() => setPaymentMethod("paypal")}
                    >
                      PayPal
                    </Button>
                  </div>
                </div>

                {paymentMethod === "card" && (
                  <>
                    <Form.Group className="mb-3">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control type="text" placeholder="1234 5678 9012 3456" required />
                    </Form.Group>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Expiry Date</Form.Label>
                          <Form.Control type="text" placeholder="MM/YY" required />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>CVV</Form.Label>
                          <Form.Control type="text" placeholder="123" required />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Cardholder Name</Form.Label>
                      <Form.Control type="text" placeholder="John Doe" required />
                    </Form.Group>
                  </>
                )}

                {paymentMethod === "paypal" && (
                  <div className="text-center my-4">
                    <p>You will be redirected to PayPal to complete your payment.</p>
                  </div>
                )}

                <div className="payment-summary mb-4">
                  <h4>Payment Summary</h4>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Customer</span>
                    <span>
                      {bookingDetails.firstName} {bookingDetails.lastName}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Destination</span>
                    <span>{bookingDetails.destination || "N/A"}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Check-in</span>
                    <span>{formatDate(bookingDetails.checkIn)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Check-out</span>
                    <span>{formatDate(bookingDetails.checkOut)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Number of Travelers</span>
                    <span>{bookingDetails.travelers || 1}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2 fw-bold">
                    <span>Total Cost</span>
                    <span>${bookingDetails.totalCost ? bookingDetails.totalCost.toFixed(2) : "0.00"}</span>
                  </div>
                </div>

                <Button variant="primary" type="submit" className="w-100">
                  Complete Payment
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* CSS Styling */}
      <style>{`
        .success-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .success-box {
          background-color: #fff;
          border-radius: 12px;
          padding: 2rem 3rem;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          max-width: 90%;
          width: 400px;
        }

        .success-icon {
          font-size: 3rem;
          color: #28a745;
          margin-bottom: 1rem;
        }

        @media (max-width: 576px) {
          .success-box {
            padding: 1.5rem 2rem;
          }
          .success-icon {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </Container>
  )
}

export default Payment
