import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Wlogo1 from '../assests/logo1.jpg'
import Wlogo2 from '../assests/logo2.jpg'
import Wlogo3 from '../assests/logo3.jpg'

const Wherewedo = () => {
  return (
    <Container className="py-5">
      <p className="text-11px fw-semibold how-we-do px-2 py-1 rounded">WHERE WE DO</p>
      <p className="text-dark fw-bold display-5">Success Stories</p>
      <Row xs={1} sm={2} md={2} lg={3}>
        {/* First Card */}
        <Col className="col-animation-1">
          <Card>
            <Card.Img variant="top" src={Wlogo1} fluid className="rounded p-3" alt="Insurance" />
            <Card.Body className="pt-0 px-4 fw-semibold">
              <Card.Text>
                <p className="text-5px light-gray text-decoration-none">CLOUD HOSTING</p>
              </Card.Text>
              <Card.Title>
                <h3 className="text-decoration-none hover-blue text-dark">Major Insurance Provider Saves $750k per Month With Big Data Migration</h3>
              </Card.Title>
              <Card.Text className="text-secondary fw-normal">
                The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.
              </Card.Text>
              <div className="text-secondary">
                <p className="mb-0"><i className="bi bi-check fs-4"></i> Modern infrastructure</p>
                <p><i className="bi bi-check fs-4"></i> Consulting services</p>
              </div>
              <Button href="#" variant="dark" className="text-14px text-ligth">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-animation-2">
          <Card>
            <Card.Img variant="top" src={Wlogo2} fluid className="custom-rounded p-3" alt="Insurance" />
            <Card.Body className="pt-0 px-4 fw-semibold">
              <Card.Text>
                <p className="text-11px light-gray  text-decoration-none">IT CONSULTING</p>
              </Card.Text>
              <Card.Title>
                <h3 className="text-decoration-none  text-dark">Maximizing Efficiency with Proper Technology Implementation Coffee Success Story</h3>
              </Card.Title>
              <Card.Text className="text-secondary fw-normal">
                The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.
              </Card.Text>
              <div className="text-secondary">
                <p className="mb-0"><i className="bi bi-check fs-4"></i> Modern infrastructure</p>
                <p><i className="bi bi-check fs-4"></i> Consulting services</p>
              </div>
              <Button href="#" variant="dark" className="text-14px text-ligth">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-animation-3">
          <Card>
            <Card.Img variant="top" src={Wlogo3} fluid className="custom-rounded p-3" alt="Insurance" />
            <Card.Body className="pt-0 px-4 fw-semibold">
              <Card.Text>
              <p className="text-11px light-gray  text-decoration-none">MOBILE DEVELOPMENT</p>
              </Card.Text>
              <Card.Title>
                <h3 className="text-decoration-none hover-blue text-dark">Strategic Move to an AI-supported application for Public Safety Travel App in London</h3>
              </Card.Title>
              <Card.Text className="text-secondary fw-normal">
                The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.
              </Card.Text>
              <div className="text-secondary">
                <p className="mb-0"><i className="bi bi-check fs-4"></i> Modern infrastructure</p>
                <p><i className="bi bi-check fs-4"></i> Consulting services</p>
              </div>
              <Button href="#" variant="dark" className="text-14px text-light">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Wherewedo