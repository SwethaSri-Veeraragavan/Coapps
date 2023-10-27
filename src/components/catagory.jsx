import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';



const catagory = () => {
  return (
    <Container id="reviewSection" className="py-4">
    <div className="d-none d-lg-flex row">
      <Col>
        <p className="m-0 fw-semibold review-text d-flex align-items-center">
          <small className="text-secondary text-11px">REVIEWED ON</small>
          <span className="d-inline d-flex align-items-center px-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
        </p>
        <p className="d-flex align-items-center">
          <a href="https://clutch.co/profile/red-key-solutions#summary">
            <img src="/static/media/clutch-logo.651a2b72f9aa9947eec607792e777183.svg" alt="clutchLogo" />
          </a>
          <span className="px-3 text-secondary fw-semibold text-12px">31 REVIEWS</span>
        </p>
      </Col>
      <Col className="border-start border-3">
        <p className="fw-semibold m-0 ml-3 text-30px">20 <span className="review-secondary text-20px">Years</span></p>
        <p className="text-16px">Provan Track Reacord</p>
      </Col>
      <Col className="border-start border-3">
        <p className="fw-semibold m-0 text-30px">98% <span className="review-secondary text-20px"></span></p>
        <p className="text-16px">Customer Satisfaction</p>
      </Col>
      <Col className="border-start border-3">
        <p className="fw-semibold m-0 text-30px">1,500 <span className="review-secondary text-20px">Projects</span></p>
        <p className="text-16px">We Have Compled</p>
      </Col>
      <Col className="border-start border-3">
        <p className="fw-semibold m-0 text-30px">3<span className="review-secondary text-20px">Mins</span></p>
        <p className="text-16px">Average Answer Time</p>
      </Col>
    </div>
    <div className="d-flex d-lg-none border-bottom row">
      <Col>
        <p className="m-0 fw-semibold review-text d-flex align-items-center">
          <small className="text-secondary text-11px">REVIEWED ON</small>
          <span className="d-inline d-flex align-items-center px-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
        </p>
        <p className="d-flex align-items-center">
          <a href="https://clutch.co/profile/red-key-solutions#summary">
            <img src="/static/media/clutch-logo.651a2b72f9aa9947eec607792e777183.svg" alt="clutchLogo" />
          </a>
          <span className="px-3 text-secondary fw-semibold text-12px">31 REVIEWS</span>
        </p>
      </Col>
    </div>
    <div className="d-flex d-lg-none p-2 row">
      <Col xs={6}>
        <p className="fw-semibold m-0 ml-3 text-20px">30 <span className="review-secondary text-16px">Experts</span></p>
        <p className="text-16px">Dedicated Team Members</p>
      </Col>
      <Col xs={6}>
        <p className="fw-semibold m-0 text-20px">85 <span className="review-secondary text-16px">+</span></p>
        <p className="text-16px">Industries Served</p>
      </Col>
      <Col xs={6}>
        <p className="fw-semibold m-0 text-20px">2,000+ <span className="review-secondary text-16px">Clients</span></p>
        <p className="text-16px">Trust Our Services</p>
      </Col>
      <Col xs={6}>
        <p className="fw-semibold m-0 text-20px">24/7 <span className="review-secondary text-16px">Support</span></p>
        <p className="text-16px">Always Available for You</p>
      </Col>
    </div>
  </Container>
  )
};


export default catagory