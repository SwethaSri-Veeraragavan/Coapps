import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const Testimonials = () => {
  return (
    <div className="testimonials d-none d-lg-flex">
      <Container fluid>
        <Carousel id="carouselExampleControls" controls>
          {/* ... Carousel items ... */}
        </Carousel>

        <Container fluid className="d-flex justify-content-between">
          <div className="arrows">
            <FaArrowLeft type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" />
            <FaArrowRight type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" />
          </div>
          <div className="reviews">
            <div className="review-1">
              <div className="content-1">
                {/* ... */}
              </div>
              <div className="content-2">
                <span className="d-inline d-flex align-items-center">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </span>
                <p>31 REVIEWS</p>
              </div>
            </div>
            <div className="review-2">
              <div className="content-3">
                {/* ... */}
              </div>
              <div className="container">
                <div className="content-4">
                  <p>4.9</p>
                  <span className="d-inline d-flex px-1">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </span>
                </div>
                <div className="content-5">
                  <p>CUSTOMER REVIEWS</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Testimonials;
