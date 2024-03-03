import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./populairelisteitem.css";
import Image from 'react-bootstrap/Image';
import sac1 from './images/sac1.jpg';
import sac2 from './images/sac2.jpg';
import Bijou from './images/Bijou.jpg';
import talon from './images/talon.jpg';
import necklace from './images/necklace.jpg';
import olive from './images/olive.png';
const imageData = [
  { title: 'white bag ', price: 100.00, src: sac1 },
  { title: 'Light bag ', price: 45.00, src: sac2 },
  { title: 'bijou', price: 10.00, src: Bijou },
  { title: 'necklace', price: 25.00, src: necklace },
  { title: 'necklace', price: 25.00, src: olive },
  { title: 'talon', price: 65.00, src: talon},
  { title: 'Light bag ', price: 45.00, src: sac2 },
  { title: 'Bijou', price: 10.00, src: Bijou }
];

function PopulaireListeItem() {
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

                {(idx === 3) && <div style={{marginTop: '50px'}}></div>} 
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default PopulaireListeItem;
