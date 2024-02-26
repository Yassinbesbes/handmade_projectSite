import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './first.css';
import first from './images/first.jpeg';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';
import Contact  from './images/Contact.png';
import Bag from './images/Bag.png';
import Shipping from './images/Shipping.png';

function First() {
  return (
  <div>

    <div>
      <header className="header">
        <div xs={1}className="header-box">
          <span className="logo">Mode</span>
        </div>
        <div xs={8} className="buttons-container">
          <a href="Googe">Home</a>
          <a href="Category">Category</a>
          <a href="About">About</a>
          <button className="black-button">Login</button>
        </div>
      </header>
    </div>

    <div className="rectangle"/>

    <Container>
        <Row >
        <Col xs={12} md={7} className='all'>
          <div className='title' >Modern <br/>HandMade </div> 
          <p>We Combine interior and exterior design service and often provide them as a single solution.</p>
          <div className='button-title'>
            <button className='Book-now'>Book now</button>
            <button className='Reade-More'>Read More</button>
          </div>
        </Col>
        <Col xs={12} md={5} className='description'>
          <Image className='hand_made' src={first} fluid />
        </Col>
        </Row>
      </Container>

      <Row  className='x'>

        <Col xs={4} md={4} className="col-border" >
        <Image src={Shipping} fluid />
        <div className='Nom'>Free Shopping</div>
        <div className='Detaille'>We combine interior and exterior design service</div>
        </Col>

        <Col xs={4} md={4} className="col-border">
        <Image src={Bag} fluid />
        <div className='Nom'>Save Money</div>
        <div className='Detaille'>We combine interior and exterior design service</div>
        </Col>

        <Col xs={4} md={4} className="col-border">
        <Image src={Contact} fluid />
        <div className='Nom'>Save Money</div>
        <div className='Detaille'>We combine interior and exterior design service</div> 
        </Col>

      </Row>
      

  </div>
  );
}

export default First;
