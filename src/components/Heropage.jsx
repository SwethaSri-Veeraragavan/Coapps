import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function SignupForm() {
  return (
  <Container >
      <Row className="g-lg-5 py-5">
        <Col lg={7} className="content text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3 ">We Bulid, Operate, Transform your businesses <span className='gradient-text'>Digitally</span></h1>
          <p className="col-lg-10 fs-4">
            Take Charge of your business continuity with innovative IT solutions
          </p>
          <div className='d-flex'>
            <Button className=" btn btn-dark" >Schedule a free Consultation</Button>
            <Button className="mx-3 btn btn-secondary">Services</Button>
          </div>
          
        </Col>
        <Col md={10} className="mx-auto col-lg-5">
          <Form className="p-4 p-md-5 border rounded-3 shadow">
            <h1 className='fs-3 fw-semibold'>Get a Quote from our experts.</h1>
            <p>Find the services you need and receive quotes <br /> from our team of Specialists.</p>
            <Form.Group className="mb-3" controlId="floatingInput">
              <Form.Control type="email" placeholder="Search Services" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="floatingPassword">
              <Form.Control type="password" placeholder="999999999" />
            </Form.Group>
            <Button variant="dark" type="submit" className="w-100 btn-lg">
              Submit and Next
            </Button>
            <hr className="my-4" />
            {/* <small className="text-body-secondary">
              By clicking Sign up, you agree to the terms of use.
            </small> */}
          </Form>
        </Col>
      </Row>
    </Container>
    
  );
}

export default SignupForm;
