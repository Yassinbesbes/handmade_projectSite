import React from 'react'; // Import React
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col } from 'react-bootstrap'; // Import Container, Row, and Col components from React Bootstrap
import "./seconde.css"; // Import custom CSS file
import Image from 'react-bootstrap/Image'; // Import Image component from React Bootstrap
import bras from './images/bras.png'

function Seconde() {
    return (
        <div>
            <Container>
                <Row>
                <Col xs={6} sm={3}>
                <Image className="I" src={bras} fluid/>
                    <div >
                    <Row className="Name_Price">
                    <Col>prace</Col>
                    <Col>12.00</Col>
                    </Row>
                    </div>
                </Col>
                <Col xs={6} sm={3}>
                <Image className="I" src={bras} fluid />
                    <div className="Name_Price">
                    <Row>
                    <Col>prace</Col>
                    <Col>12.00</Col>
                    </Row>
                    </div>
                </Col>
                <Col xs={6} sm={3}>
                <Image className="I" src={bras} fluid/>
                    <div className="Name_Price">
                    <Row>
                    <Col>prace</Col>
                    <Col>12.00</Col>
                    </Row>
                    </div>
                </Col>
                <Col xs={6} sm={3}>
                <Image className="I" src={bras} fluid />
                    <div className="Name_Price">
                    <Row>
                    <Col>prace</Col>
                    <Col>12.00</Col>
                    </Row>
                    </div>
                </Col>
                </Row>

                <Row className='space'>
                <Col xs={6} sm={3}>
                <Image className="I" src={bras} fluid/>
                    <div className="Name_Price">
                    <Row>
                    <Col>prace</Col>
                    <Col>12.00</Col>
                    </Row>
                    </div>
                </Col>
                <Col xs={6} sm={3}>
                <Image className="I" src={bras} fluid />
                    <div className="Name_Price">
                    <Row>
                    <Col>prace</Col>
                    <Col>12.00</Col>
                    </Row>
                    </div>
                </Col>
                <Col xs={6} sm={3}>
                <Image className="I" src={bras} fluid/>
                    <div className="Name_Price">
                    <Row>
                    <Col>prace</Col>
                    <Col>12.00</Col>
                    </Row>
                    </div>
                </Col>
                <Col xs={6} sm={3}>
                <Image className="I" src={bras} fluid />
                    <div className="Name_Price">
                    <Row>
                    <Col>prace</Col>
                    <Col>12.00</Col>
                    </Row>
                    </div>
                </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Seconde;
