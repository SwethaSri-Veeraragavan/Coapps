import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <Navbar expand="lg" className='d-flex justify-content-between' >
      <Container>
        <Navbar.Brand href="#home"><h1 className='fw-bold'>LOGOIPUSIM</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown title="Services" id="basic-nav-dropdown"></NavDropdown>
            <NavDropdown title="Company" id="basic-nav-dropdown"></NavDropdown>
            <Nav.Link href="#Casestudies">Case studies</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
            <NavDropdown title="Resources" id="basic-nav-dropdown"></NavDropdown>
          </Nav>
        {/* </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-end'> */}
          <div className="d-flex align-items-right">
            <div className="px-4 header-contact">
              <button className="client-support-button border-0 rounded fw-semibold py-0 px-1">
                Client Support <i className="bi bi-arrow-right"></i>
              </button>
              <br />
              <a href="tel:1-800-356-8933" className="text-dark contact-number">
                1-800-356-8933
              </a>
            </div>
            <div>
              <a href="/contact">
                <button className="btn btn-dark fw-bold border-0 drak-button">Contact Us</button>
              </a>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
        
    </Navbar>
  )
}

export default Header