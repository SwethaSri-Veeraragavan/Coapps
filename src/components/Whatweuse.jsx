import React from 'react'
import { Container, Button, Card } from 'react-bootstrap';


const Whatweuse = () => {
  return (
    <div className="bg-dark py-5">
      <Container>
        {/* <button className="w-20 btn-sm bg-ligth">WHAT WE USE</button> */}
        <Button className="hbn w-20 btn-sm bg-light text-dark" >WHAT WE USE</Button>
        <h2 className="fw-bold what-we-do-heading display-5">Bringing the best IT vendors to you.</h2>
        <small className="text-light">
          Working only with the best, to ensure the quality of our services, and to bring state of the art technology to those who need it.
        </small>
      </Container>

      <div className="text-center py-5">
        <div className="d-inline-block">
          <div className="controls bg-black p-2 rounded-top d-flex align-items-center">
            <Button type="button" className="rounded-circle bg-dark border-0 button-dimension d-flex align-items-center btn btn-primary">
              <i className="bi bi-arrow-left-short fs-2 text-secondary"></i>
            </Button>
            <h4 className="text-light px-3">Your IT Challenges</h4>
            <Button type="button" className="rounded-circle bg-dark border-0 button-dimension d-flex align-items-center btn btn-primary">
              <i className="bi bi-arrow-right-short fs-2 text-secondary"></i>
            </Button>
          </div>
        </div>

        <div className="row p-0 m-0">
          <div className="col border-5 black-border-top black-border-right">.</div>
          <div className="col border-5 black-border-top black-border-right">.</div>
          <div className="col border-5 black-border-top black-border-right">.</div>
          <div className="col border-5 black-border-top">.</div>
        </div>

        <Container>
          <div className="row">
            <div className="col">
              <div className="card-carousel">
                <div className="card-group">
                  <Card className="mx-3 border-0 rounded challenges-container">
                    <Card.Body className="bg-black text-start">
                      <h5 className="card-title text-light text-20px">Datacenter & Hosting</h5>
                      <p className="card-text text-secondary text-14px">
                        Our facility – Data Center – is the first in the USA that meets the strict ANSI/TIA-942 rated 4 certificate requirements for design, build, and operate.
                      </p>
                      <div className="d-flex text-center">
                        <div className="bg-secondary rounded-circle">
                          <i className="bi bi-plus px-1"></i>
                        </div>
                        <a href="#" className="px-2 text-decoration-none text-light text-12px">View More</a>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="mx-3 border-0 rounded challenges-container">
                    <Card.Body className="bg-black text-start">
                      <h5 className="card-title text-light text-20px">Collaboration</h5>
                      <p className="card-text text-secondary text-14px">
                        Despite modern cloud technology, your users operate in a familiar Microsoft Office environment and benefit from broad compatibility and low-threshold access.
                      </p>
                      <div className="d-flex text-center">
                        <div className="bg-secondary rounded-circle">
                          <i className="bi bi-plus px-1"></i>
                        </div>
                        <a href="#" className="px-2 text-decoration-none text-light text-12px">View More</a>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="mx-3 border-0 rounded challenges-container">
                    <Card.Body className="bg-black text-start">
                      <h5 className="card-title text-light text-20px">Cloud Plattform</h5>
                      <p className="card-text text-secondary text-14px">
                        Customized cloud platform designed to improve performance, lower IT costs, and provide secure and reliable access to your company data from any device, anytime, anywhere.
                      </p>
                      <div className="d-flex text-center">
                        <div className="bg-secondary rounded-circle">
                          <i className="bi bi-plus px-1"></i>
                        </div>
                        <a href="#" className="px-2 text-decoration-none text-light text-12px">View More</a>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Whatweuse