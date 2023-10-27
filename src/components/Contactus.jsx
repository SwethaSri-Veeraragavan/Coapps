import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { BiCheck } from 'react-icons/bi';

const ContactUs = () => {
  return (
    <div className="container contact-us-bg px-0">
      <div className="con-us">
        <div className="px-0">
          <div className="position-relative bg-dark text-white rounded-top p-4 what-we-do-container">
            <p className="text-11px fw-semibold what-we-do px-2 py-1 rounded">CONTACT US</p>
            <p className="display-5 pt-5 fw-bold what-we-do-heading">Partner with Us for<br />Comprehensive IT</p>
          </div>
        </div>
      </div>
      <div className="row p-2">
        <div className="col-12 col-md-6 py-5">
          <p className="fs-5">We're here to address any inquiries you might have and assist you in identifying the services that align most effectively with your requirements.</p>
          <a href="#" className="fs-5 hover-blue text-decoration-none text-dark fw-semibold">Call us at: 1-800-356-8933</a>
          <h4 className="pt-5">Your benefits:</h4>
          <div className="row">
            <div className="col-md-4 d-flex">
              <div>
                <BiCheck className="bg-primary rounded-circle text-light" />
              </div>
              <p className="px-2">Client-oriented</p>
            </div>
            <div className="col-md-4 d-flex">
              <div>
                <BiCheck className="bg-primary rounded-circle text-light" />
              </div>
              <p className="px-2">Results-driven</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex">
              <div>
                <BiCheck className="bg-primary rounded-circle text-light" />
              </div>
              <p className="px-2">Independent</p>
            </div>
            <div className="col-md-4 d-flex">
              <div>
                <BiCheck className="bg-primary rounded-circle text-light" />
              </div>
              <p className="px-2">Problem-solving</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex">
              <div>
                <BiCheck className="bg-primary rounded-circle text-light" />
              </div>
              <p className="px-2">Competent</p>
            </div>
            <div className="col-md-4 d-flex">
              <div>
                <BiCheck className="bg-primary rounded-circle text-light" />
              </div>
              <p className="px-2">Transparent</p>
            </div>
          </div>
          <h4 className="pt-5 pb-sub2">What happens next?</h4>
          <div className="row">
            <div className="col-md-4 gap-2 d-flex">
              <p className="text-24px fw-semibold">1</p>
              <p className="pr-3">We Schedule a call at your convenience</p>
            </div>
            <div className="col-md-4 gap-2 d-flex">
              <p className="text-24px fw-semibold">2</p>
              <p>We do a discovery and consulting meeting</p>
            </div>
            <div className="col-md-4 gap-2 d-flex">
              <p className="text-24px fw-semibold">3</p>
              <p className="pr-3">We prepare a proposal</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="bg-white py-3 rounded contact-form form-us">
            <h2 className="text-center">Schedule a Free Consultation</h2>
            <hr />
            <Form className="mx-4">
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" value="" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" value="" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value="" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Company / Organization</Form.Label>
                <Form.Control type="text" name="company" value="" />
              </Form.Group>
              <Row className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Col md={6}>
                  <InputGroup>
                    <DropdownButton
                      as={InputGroup.Prepend}
                      variant="outline-secondary"
                      title="+91"
                      id="input-group-dropdown-1"
                    >
                      <Dropdown.Item href="#">+1</Dropdown.Item>
                      <Dropdown.Item href="#">+44</Dropdown.Item>
                      <Dropdown.Item href="#">+91</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control
                      placeholder="Enter phone number"
                      type="tel"
                      value=""
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>How Can We Help You With</Form.Label>
                <Form.Control as="select" name="helpDropdown">
                  <option value="">Select an option</option>
                  <option value="Managed Services">Managed Services</option>
                  <option value="IT Consulting & Advisory">IT Consulting & Advisory</option>
                  <option value="Cyber Security">Cyber Security</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="Other">Other</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows="4" />
              </Form.Group>
              <div className="py-2 d-flex justify-content-between">
                <div className="py-3">
                  <Button type="submit" className="primary-button fw-semibold btn-block">Submit</Button>
                </div>
                <div className="alert alert-" role="alert"></div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
