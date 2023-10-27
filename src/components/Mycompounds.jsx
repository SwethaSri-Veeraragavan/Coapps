import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function MyComponent() {
  return (
    <div className="bg-black py-4 text-secondary">
      <Container className="row-container">
        <Row>
          <Col md={6}>
            <div className="mt-4">
              <h4 className="text-light">Solutions</h4>
              <Row className="my-2">
                <p className="col-6 text-decoration-none text-secondary">
                  Managed services
                </p>
                <p className="col-6 text-decoration-none text-secondary">
                  Mobile Development
                </p>
              </Row>
              <Row className="my-2">
                <Col md={6}>IT Consulting & Advisory</Col>
                <Col md={6}>Cloud Services</Col>
              </Row>
              <Row className="my-2">
                <Col md={6}>Cyber Security</Col>
                <Col md={6}>Network Connectivity</Col>
              </Row>
              <Row className="my-2">
                <Col md={6}>Web Development</Col>
                <Col md={6}>ERP Solutions</Col>
              </Row>
              <h4 className="text-light pt-5">Company</h4>
              <Row className="my-2">
                <p className="col-6 text-decoration-none text-secondary">
                  About Us
                </p>
                <p className="col-6 text-decoration-none text-secondary">
                  Blog
                </p>
              </Row>
              <Row className="my-2">
                <Col md={6}>Why us</Col>
                <Col md={6}>Case studies</Col>
              </Row>
              <Row className="my-2">
                <Col md={6}>Team</Col>
                <Col md={6}>Events</Col>
              </Row>
              <Row className="my-2">
                <Col md={6}>Careers</Col>
                <Col md={6}>FAQ</Col>
              </Row>
              <Row className="my-2">
                <Col md={6}>Partners & Certifications</Col>
                <Col md={6}>Reviews & Awards</Col>
              </Row>
            </div>
          </Col>
          <Col className='d-flex justify-content-center align-items-center'>
          <Button className='btn-light'>
            Schedule Consultation
          </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyComponent;
