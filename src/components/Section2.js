import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import cart from './pictures/cart.png';
import pic1 from './pictures/o1.jpg';
import pic2 from './pictures/o2.jpg';
import { Link } from 'react-router-dom';
function ContainerExample() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className='detailbox'>
            <Row>
              <Col xs={6} sm={6} md={12} lg={6}>
                <div className='text-center' style={{ width: '100%' }}>
                  <div className='imgbox'>
                    <img src={pic1} alt='imagee' width={165} height={175} className='hey' ></img>
                  </div></div></Col>
              <Col xs={6} md={12} lg={5}> <div style={{ color: 'white', width: '100%' }}>
                <h5 className='navbrand fs-3 mt-2'>Tasty Thursdays</h5>
                <p className='navbrand fw-bold' style={{ marginRight: '40px' }}><span className='fs-1'>20%</span> Off</p>
                <Link to='/menu'><Button className='color2'>Order Now <img src={cart} alt='imagee' width={20} height={25}></img></Button></Link>
              </div></Col> </Row>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className='detailbox'>
            <Row>
              <Col xs={6} md={12} lg={6}>
                <div className='text-center' style={{ width: '100%' }}>
                  <div className='imgbox'>
                    <img src={pic2} width={165} alt='imagee' height={175} className='hey' ></img>
                  </div></div></Col>
              <Col xs={6} md={12} lg={5}> <div style={{ color: 'white', width: '100%' }}>
                <h5 className='navbrand fs-3 mt-2' style={{ marginRight: '40px' }}>Pizza Days</h5>
                <p className='navbrand fw-bold' style={{ marginRight: '40px' }}><span className='fs-1'>15%</span> Off</p>
                <Link to='/menu'><Button className='color2'>Order Now <img src={cart} alt='imagee' width={20} height={25}></img></Button></Link>
              </div></Col> </Row>
          </div>

        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;


