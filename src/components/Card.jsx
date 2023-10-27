import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Cardimg1 from '../assests/Screenshot 2023-10-26 073255.png'
import Cardimg2 from '../assests/Screenshot 2023-10-26 073314.png'
import Cardimg3 from '../assests/Screenshot 2023-10-26 073338.png'
import Cardimg4 from '../assests/Screenshot 2023-10-26 073355.png'
import Cardimg5 from '../assests/Screenshot 2023-10-26 073409.png'
import Cardimg6 from '../assests/Screenshot 2023-10-26 073432.png'
import Cardimg7 from '../assests/Screenshot 2023-10-26 073355.png'
import Cardimg8 from '../assests/Screenshot 2023-10-26 073355.png'

const cardData = [
  {
    title: 'Card 1',
    imageUrl: Cardimg1,
  },
  {
    title: 'Card 2',
    imageUrl: Cardimg2,
  },
  {
    title: 'Card 3',
    imageUrl: Cardimg3 ,
  },
  {
    title: 'Card 4',
    imageUrl: Cardimg4,
  },
  {
    title: 'Card 5',
    imageUrl: Cardimg5,
  },
  {
    title: 'Card 6',
    imageUrl: Cardimg6,
  },
  // {
  //   title: 'Card 7',
  //   imageUrl: Cardimg7,
  // },
  // {
  //   title: 'Card 8',
  //   imageUrl: Cardimg8,
  // },
  // Add more card data as needed
];

function CardContainer() {
  return (
    <Container className="card solutioncolor border-0">
      <div className="Solutions">
        <button className="btn btn-dark btn-sm mb-4">HOW WE DO</button>
        <h1>Solutions</h1>
      </div>
      <Row className="g-2">
        {cardData.map((card, index) => (
          <Col  md={4} key={index}>
            <Card >
              <Card.Img variant="top" src={card.imageUrl} />
              {/* <Card.Body>
                <Card.Title>{card.title}</Card.Title>
              </Card.Body> */}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardContainer;
