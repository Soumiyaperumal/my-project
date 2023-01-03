import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Item from './item';
import ContainerFluidExample from './Section7';
import Row from 'react-bootstrap/Row';
import Navbarexample from './Navbar';
import Data from './Data';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
const Menu = () => {
    return (
        <div>
            <Navbarexample />
            <div><Container>
                <Link to='/'><Button className='color2 mt-4'>Back to Home</Button></Link>
                <div className='text-center' >
                    <h1 className='fw-bold mt-2'>MENU</h1>
                    <h4 className='fw-bold mt-5'>FEATURED FAVOURITES</h4></div>
                <div >
                    <h3 className='text-center navbrand fw-bold mt-4 mb-5'>STARTERS</h3>

                    <Row xs={1} md={2} lg={3} className="g-4">
                        {Data?.slice(15, 18).map((item) => (
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
                <div className='text-center mt-5 mb-5'>
                    <h3 className=' navbrand fw-bold'> MAIN COURSE</h3></div>
                <Container>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {Data?.slice(18, 21).map((item) => (
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
                </Container>
                <div className='text-center mt-5 mb-5'>
                    <h3 className=' navbrand fw-bold'>SIDES</h3></div>
                <Container>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {Data?.slice(21, 23).map((item) => (
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
                </Container>
                <div className='text-center mt-5 mb-5'>
                    <h3>SWEETS and TREATS</h3></div>
                <Container>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {Data?.slice(23, 26).map((item) => (
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
                </Container>
                <div className='text-center mt-5 mb-5'>
                    <h3 className=' navbrand fw-bold'>BEVERAGES</h3></div>
                <Container>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {Data?.slice(26, 29).map((item) => (
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
                </Container>
                <div className='text-center mt-5 mb-5'>
                    <h3 className=' navbrand fw-bold'>PIZZA</h3></div>
                <Container>
                    <Row xs={1} md={2} lg={3} className="g-4 mb-5">
                        {Data?.slice(29, 32).map((item) => (
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
                </Container>
            </div>        <ContainerFluidExample />

        </div>

    )
}

export default Menu