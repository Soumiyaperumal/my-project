import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import client1 from './pictures/client1.jpg';
import client2 from './pictures/client2.jpg';
import Carousel from 'react-bootstrap/Carousel';
function ControlledCarousel() {
    return (
        <div style={{ paddingBottom: "90px" }}>

            <h2 style={{ fontFamily: 'Dancing Script', fontWeight: 'bold', textAlign: 'center', fontSize: '2.5rem' }}>
                What Says Our Customers</h2>
            <Carousel className='single' style={{ height: '500px' }}>
                <Carousel.Item interval={1000}>
                    <img

                        src={client1}
                        alt="First slide"
                        height={0}
                    />
                    <Container>
                        <Row lg={2}>
                            <Col>
                                <Card className='blockqoutes'>
                                    <Card.Body>
                                        <blockquote >
                                            <p>
                                                {' '}
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.{' '}
                                            </p>
                                            <h6> Moana Michell </h6>
                                            <p>magna aliqua</p>
                                        </blockquote>
                                    </Card.Body>
                                </Card>
                                <div className='client1'>
                                    <div className='clientarrow'>
                                        <img src={client2} width={120} height={120} alt='imagee' className='clientimage' />
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <Card className='blockqoutes'>
                                    <Card.Body>
                                        <blockquote >
                                            <p>
                                                {' '}
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. {' '}
                                            </p>
                                            <h6> Moana Michell </h6>
                                            <p>magna aliqua</p>

                                        </blockquote>
                                    </Card.Body>
                                </Card>
                                <div className='client1'>
                                    <div className='clientarrow'>
                                        <img src={client1} width={120} height={120} alt='imagee' className='clientimage' />
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img

                        src={client1}
                        alt="Second slide"
                        height={0}
                    />
                    <Container>
                        <Row lg={2}>
                            <Col>
                                <Card className='blockqoutes'>
                                    <Card.Body>
                                        <blockquote>
                                            <p>
                                                {' '}
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.{' '}
                                            </p>
                                            <h6> Moana Michell </h6>
                                            <p>magna aliqua</p>
                                        </blockquote>
                                    </Card.Body>
                                </Card>
                                <div className='client1'>
                                    <div className='clientarrow'>
                                        <img src={client2} width={120} height={120} alt='imagee' className='clientimage' />
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <Card className='blockqoutes'>
                                    <Card.Body>
                                        <blockquote >
                                            <p>
                                                {' '}
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. {' '}
                                            </p>
                                            <h6> Moana Michell </h6>
                                            <p>magna aliqua</p>

                                        </blockquote>
                                    </Card.Body>
                                </Card>
                                <div className='client1'>
                                    <div className='clientarrow'>
                                        <img src={client1} width={125} height={125} alt='imagee' className='clientimage' />
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={client1}
                        alt="Third slide"
                        height={0}
                    />
                    <Container>
                        <Row lg={2}>
                            <Col>
                                <Card className='blockqoutes'>
                                    <Card.Body>
                                        <blockquote >
                                            <p>
                                                {' '}
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.{' '}
                                            </p>
                                            <h6> Moana Michell </h6>
                                            <p>magna aliqua</p>
                                        </blockquote>
                                    </Card.Body>
                                </Card>
                                <div className='client1'>
                                    <div className='clientarrow'>
                                        <img src={client2} width={125} height={125} alt='imagee' className='clientimage' />
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <Card className='blockqoutes'>
                                    <Card.Body>
                                        <blockquote >
                                            <p>
                                                {' '}
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. {' '}
                                            </p>
                                            <h6> Moana Michell </h6>
                                            <p>magna aliqua</p>

                                        </blockquote>
                                    </Card.Body>
                                </Card>
                                <div className='client1'>
                                    <div className='clientarrow'>
                                        <img src={client1} width={125} height={125} alt='imagee' className='clientimage' />
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ControlledCarousel;