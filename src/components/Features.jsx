import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import fCard1 from '../assests/money-bag_892170.png'
import fCard2 from '../assests/industrial.png'
import fCard3 from '../assests/digital_9288718.png'
import fCard4 from '../assests/004-scalability.png'


const Features = () => {
  return (
    <Container className="py-5">
      <Row className="g-4 row-cols-2 row-cols-md-2 row-cols-lg-4">
        <Col>
          <div className="feature d-flex flex-column align-items-center">
            <Image src= {fCard1} className="mb-3 icon-square" />
            <h3 className="fs-2 text-body-emphasis">Cost-effectiveness</h3>
            <p>
              We offer affordable IT solutions that help you reduce costs and improve your bottom line.
            </p>
          </div>
        </Col>
        <Col>
          <div className="feature d-flex flex-column align-items-center">
            <Image src={fCard2} alt="Logo 2"  className="mb-3 icon-square" />
            <h3 className="fs-2 text-body-emphasis">Innovative Techonology</h3>
            <p>
              We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.
            </p>
          </div>
        </Col>
        <Col>
          <div className="feature d-flex flex-column align-items-center">
            <Image src={fCard3} alt="Logo 3" className="mb-3 icon-square" />
            <h3 className="fs-2 text-body-emphasis">Industry Expertise</h3>
            <p>
              We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs.
            </p>
          </div>
        </Col>
        <Col>
          <div className="feature d-flex flex-column align-items-center">
            <Image src={fCard4} alt="Logo 4" className="mb-3 icon-square" />
            <h3 className="fs-2 text-body-emphasis">Scalability</h3>
            <p>
              Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your invertment.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Features