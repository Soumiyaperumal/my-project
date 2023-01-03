import React from 'react';
import Card from 'react-bootstrap/Card';
import iconorder from './pictures/icon-order-edit.png';
import icontracking from './pictures/icon-tracking-edit-.png';
import icondelivery from './pictures/icon-delivery-edit-2.png';
import iconsupport from './pictures/icon-support-edit-1.png';
import Item from './item';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Data from './Data';
import Container from 'react-bootstrap/esm/Container';
function TextExample() {
  return (
    <>
      <Container>
        <div className='mt-5'>
          <h3 className='fw-bold fs-1 pt-5' style={{ textAlign: 'center', fontFamily: 'Dancing Script' }}>Best Sellers</h3>
          <p style={{ textAlign: 'center', marginTop: '30px' }}>The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common.</p>
          <Row xs={1} md={2} lg={3} className="g-4">
            {Data?.slice(9, 15).map((item) => (
              <Item
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                text={item.text}
              />
            ))}
          </Row>
        </div></Container>

      <Container fluid style={{ marginTop: '80px' }}>
        <Row xs={1} md={2} lg={4} className='gy-5'>
          <Col xs={6} md={3} >
            <Card className='cardcolor'>
              <Card.Body>
                <img src={iconorder} alt="imagee" />
                <Card.Title className='mt-3 mb-3'>No Minimum Order</Card.Title>
                <Card.Text style={{ color: '#666666' }}>
                  Their pronunciation and their most common words. Everyone realizes why.
                </Card.Text>
              </Card.Body>
            </Card></Col>
          <Col xs={6} md={3} >
            <Card className='cardcolor'>
              <Card.Body>
                <img src={icontracking} alt='imagee' />
                <Card.Title className='mt-3 mb-3'>Live Order Tracking</Card.Title>
                <Card.Text style={{ color: '#666666' }}>
                  Their pronunciation and their most common words. Everyone realizes why.
                </Card.Text>
              </Card.Body>
            </Card></Col>
          <Col xs={6} md={3}>
            <Card className='cardcolor'>
              <Card.Body>
                <img src={icondelivery} alt='imagee' />
                <Card.Title className='mt-3 mb-3'>Delivery Shopping</Card.Title>
                <Card.Text style={{ color: '#666666' }}>
                  Their pronunciation and their most common words. Everyone realizes why.
                </Card.Text>
              </Card.Body>
            </Card></Col>
          <Col xs={6} md={3}>
            <Card className='cardcolor'>
              <Card.Body>
                <img src={iconsupport} alt='imagee' />
                <Card.Title className='mt-3 mb-3'>24/7 Support Hour</Card.Title>
                <Card.Text style={{ color: '#666666' }}>
                  Their pronunciation and their most common words. Everyone realizes why.
                </Card.Text>
              </Card.Body>
            </Card></Col></Row>
      </Container>
    </>
  );
}

export default TextExample;