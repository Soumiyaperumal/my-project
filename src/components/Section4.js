import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import aboutimg from './pictures/about-img.png'
import Button from 'react-bootstrap/Button'
function AutoLayoutExample() {
  return (
    <div style={{ backgroundColor: '#222831', padding: '90px 0' }}>
      <Container>
        <Row>
          <Col xs={12} md={6}><img src={aboutimg} alt='imagee' className='imgsize'></img></Col>

          <Col xs={12} md={6} style={{ margin: 'auto 0', color: 'white' }}>
            <div >
              <h1 className='navbrand fw-bold'>We Are Feane</h1>
              <p className='align mt-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
              <Button className='color2 mt-2'>Read More</Button>
            </div>
          </Col>
        </Row>
      </Container></div>
  );
}

export default AutoLayoutExample;
