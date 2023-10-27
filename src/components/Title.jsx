import React from 'react'
import { Container } from 'react-bootstrap';

const Title = () => {
  return (
    <Container className="py-4">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-dark d-flex animate-slide-up">
            <div className="d-flex flex-column align-items-start title">
                <button className="btn btn-light btn-sm mb-4">WHAT WE DO</button>
                <div className="mb-4 gap"></div>
                <h1 className="display-4 fst-italic text-white text-bold">
                    Simplifying IT<br />
                    for a complex world.
                </h1>
            </div>
        </div>
    </Container>

  )
}

export default Title