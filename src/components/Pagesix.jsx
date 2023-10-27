import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaIndustry, FaBus, FaHospital, FaUniversity, FaBuilding, FaHandsHelping } from 'react-icons/fa';




const PageSix = () => {

    const industries = [
        { title: 'Industry & Manufacturing', icon: <FaIndustry size={20} color='#00bbff' /> },
        { title: 'Transportation & Logistics', icon: <FaBus size={20} color="#00bbff" /> },
        { title: 'Healthcare', icon: <FaHospital size={25} color="#00bbff" /> },
        { title: 'Banks & Insurance', icon: <FaUniversity size={25} color="#00bbff" /> },
        { title: 'Consulting Providers', icon: <FaBuilding size={25} color="#00bbff" /> },
        { title: 'Non-Profit', icon: <FaHandsHelping size={25} color="#00bbff" /> },
      ];

      return (
        <Container className="py-5 col-8">
          <Row className="py-2">
            <Col>
            <Button className="hbn w-20 btn-sm bg-dark" >HOW WE DO</Button>
              <p className=" text-dark fw-bold display-5">
                Solving IT Challenges in evey industry, evey day.
              </p>
            </Col>
          </Row>
          <Container className="mt-4">
            <Row className="row-cols-md-4">
              {industries.map((industry, index) => (
                <Col key={index} className="mb-4 services-card">
                  <div className="box d-flex align-items-center">
                    <div className="icon-container px-2">
                      {industry.icon}
                    </div>
                    <div className="mx-2">
                      <p className="fw-semibold m-0 pl-3">{industry.title}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
          <div className="d-flex justify-content-start mt-auto">
            <a href="/" className="styled-blue-link text-decoration-none">
              View All Industries
            </a>
          </div>
        </Container>
      )
    };

export default PageSix;