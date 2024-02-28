import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./seconde.css";
import Image from 'react-bootstrap/Image';
import bras from './images/bras.png';
import two from './images/two.png';
import three from './images/three.png';
import four from './images/four.png';


const imageData = [
  { title: 'Bracelet', price: 12.00, src: bras },
  { title: 'Native Light ', price: 35.00, src: two },
  { title: 'Collier', price: 20.00, src: three },
  { title: 'Paola Lamp', price: 65.00, src: four },
  { title: 'Bracelet', price: 12.00, src: bras },
  { title: 'Paola Lamp', price: 65.00, src: four },
  { title: 'Native Light ', price: 35.00, src: two },
  { title: 'Collier', price: 20.00, src: three },
];

function Seconde() {
  return (
    <div className='xx'>
      <Container >
        <h1>Enjoy our products </h1>
        {Array.from(Array(Math.ceil(imageData.length / 4)), (_, index) => (
          <Row key={index}>
            {imageData.slice(index * 4, index * 4 + 4).map((item, idx) => ( 

              <Col key={idx} xs={6} sm={3} className="image-col"> {/* Use idx for key */}
                <div className="image-container">
                  <Image className="I" src={item.src} fluid />
                  <div className="overlay">
                  </div>
                </div>
                <div>
                  <Row>
                    <Col className="Name">{item.title}</Col>
                    <Col className="Price">{item.price} dt</Col>
                  </Row>
                </div>

                {(idx === 3) && <div style={{marginTop: '50px'}}></div>} {/* Add margin-top after the fourth item */}
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default Seconde;
