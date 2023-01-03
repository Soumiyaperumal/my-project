import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TiLocation } from 'react-icons/ti';
import { IoMdCall } from 'react-icons/io';
import { GrMail } from 'react-icons/gr';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { BsPinterest } from 'react-icons/bs'
function ContainerFluidExample() {
  return (
    <Container fluid className='informationbox'>
      <Row xs={1} md={3}>
        <Col>
          <h4 className='mt-3'>Contact Us</h4>
          <div className='locationbox mt-3 '>

            <a href=' http://maps.google.co.in'><span className='color1'><TiLocation />  Location</span></a>

            <a href='tel:tel:+01 1234567890'><span className='color1'><IoMdCall /> Call +01 1234567890</span></a>

            <a href='mailto:mailto:support@domain.com'><span className='color1'><GrMail /> support@gmail.com</span></a>
          </div>
        </Col>
        <Col>
          <h4 style={{ fontSize: '39px', paddingBottom: '15px' }}>Feane</h4>
          <span >Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</span>
          <div className='mt-3 fs-2 mb-5' >
            <a href='https://www.facebook.com' className='color1'><FaFacebook /></a>
            <a href='https://twitter.com/login' className='color1'><AiFillTwitterCircle /></a>
            <a href='https://in.linkedin.com/' className='color1'><TiSocialLinkedinCircular /></a>
            <a href='https://www.instagram.com/' className='color1'><AiFillInstagram /></a>
            <a href='https://in.pinterest.com/' className='color1'><BsPinterest /></a>
          </div>
          <div className='mt-2 mb-3'><span>© 2022 All Rights Reserved By Free Html Templates</span></div>
          <div className='mb-5'> <span >© Distributed By ThemeWagon</span></div>
        </Col>
        <Col>
          <h4 className='mt-3' >Opening Hours</h4>
          <div className='mt-3' ><span>Everyday</span></div>
          <div className='mt-3'><span>10.00 Am -10.00 Pm</span></div>
        </Col>
      </Row>
    </Container>
  );
}
export default ContainerFluidExample;