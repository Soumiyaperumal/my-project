import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import img from './pictures/loupe.png'
import { Link } from "react-router-dom"
function CollapsibleExample() {
  return (
    <>

      <div className='carouse' >
        <Carousel style={{ height: '500px' }} className='mediaCarousel'>
          <Carousel.Item interval={1000}>
            <Container className='white'>
              <h1 className='navbrand'>Fast Food Restaurant</h1>
              <p>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
              <Link to='/menu'><Button className='color2'>
                Order Now
              </Button></Link></Container>
            <img
              className="block"
              src={img}
              alt="First slide"
              height={0}
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <Container className='white'>
              <h1 className='navbrand'>Fast  Food  Restaurant</h1>
              <p>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
              <Link to='/menu'><Button className='color2'>
                Order Now
              </Button></Link></Container>
            <img
              className="block"
              src={img}
              alt="Second slide"
              height={0}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Container className='white'>
              <h1 className='navbrand'>Fast Food Restaurant</h1>
              <p>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
              <Link to='/menu'><Button className='color2'>Order Now</Button></Link>
            </Container>
            <img
              className="block"
              src={img}
              alt="Third slide"
              height={0}
            />

          </Carousel.Item>
        </Carousel>

      </div>

    </>
  );
}

export default CollapsibleExample;
