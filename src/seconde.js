import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'; // Import Container, Row, and Col components from React Bootstrap
import "./seconde.css";




function Seconde(){
    return(
    <div>
    <Container className='All'>
      <Row>
        <Col>1 </Col>
        <Col>2 </Col>
        <Col md={3}>3</Col>
        <Col >4</Col>
      </Row>
      <Row>
        <Col>11 </Col>
        <Col>22</Col>
        <Col>33</Col>
        <Col>44</Col>
      </Row>
    </Container>


    </div>

    );
}

export default Seconde;
