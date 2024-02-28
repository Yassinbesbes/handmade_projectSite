import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './first.css'; // Import custom CSS file
import first from './images/first.jpeg'; // Import images
import Image from 'react-bootstrap/Image'; // Import Image component from React Bootstrap
import { Container, Row, Col } from 'react-bootstrap'; // Import Container, Row, and Col components from React Bootstrap
import Contact from './images/Contact.png';
import Bag from './images/Bag.png';
import Shipping from './images/Shipping.png';

// Define a functional component named First
function First() {
  return (
    <div>
      {/* Header section */}
      <header className="header">
        {/* Logo */}
        <div xs={1} className="header-box">
          <span className="logo">Mode</span>
        </div>
        {/* Navigation links */}
        <div xs={8} className="buttons-container">
          <a href="Googe">Home</a>
          <a href="Category">Category</a>
          <a href="About">About</a>
          <button className="black-button">Login</button>
        </div>
      </header>

      {/* Rectangle section */}
      <div className="rectangle" />

      {/* Main content section */}
      <Container>
        <Row>
          {/* Left column with text */}
          <Col xs={12} md={7} className='all'>
            <div className='title'>Modern <br/>HandMade</div>
            <p>We combine interior and exterior design services and often provide them as a single solution.</p>
            <div className='button-title'>
              <button className='Book-now'>Book now</button>
              <button className='Reade-More'>Read More</button>
            </div>
          </Col>
          {/* Right column with image */}
          <Col xs={12} md={5} className='description'>
            <Image className='hand_made' src={first} fluid />
          </Col>
        </Row>
      </Container>

      {/* Additional features section */}
      <Row className='x'>
        {/* First feature */}
        <Col xs={4} md={4} className="col-border">
          <Image src={Shipping} fluid />
          <div className='Nom'>Free Shipping</div>
          <div className='Detaille'>We offer free shipping on all orders.</div>
        </Col>
        {/* Second feature */}
        <Col xs={4} md={4} className="col-border">
          <Image src={Bag} fluid />
          <div className='Nom'>Save Money</div>
          <div className='Detaille'>Our prices help you save money.</div>
        </Col>
        {/* Third feature */}
        <Col xs={4} md={4} className="col-border">
          <Image src={Contact} fluid />
          <div className='Nom'>Contact Us</div>
          <div className='Detaille'>Contact us for any inquiries.</div>
        </Col>
      </Row>
    </div>
  );
}

// Export the First component as the default export
export default First;
