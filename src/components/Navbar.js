import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import product1 from './pictures/Product-Images-1.jpg'
import product2 from './pictures/Product-Images-2.jpg'
import Example from './Modal'
import { FaShoppingCart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';

const Navbarexample = () => {
  const cart = useSelector((state) => state.cart)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }
  const wish = useSelector((state) => state.wish)

  const getWishlistTotal = () => {
    let total = 0
    wish.forEach(item => {
      total += item.quantity
    })
    return total
  }
  return (
    <div style={{ backgroundPosition: 'top', position: 'sticky', top: '0', zIndex: '3', backgroundColor: 'black' }}>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className='navbrand fs-1' href="#Home">Feane</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='navlink'>
              <Nav.Link><Link to='/' className='mx-2 color1'>HOME</Link></Nav.Link>
              <Nav.Link><Link to='/menu' className='mx-2 color1 smallmenu'>MENU</Link></Nav.Link>
              <Nav.Link className='mx-2 color1 largemenu'>
                <NavDropdown id="nav-dropdown-dark-example" title="MENU">
                  <ul className='mega1 mt-3'>
                    <h5>Menu Varieties</h5>
                    <Link to='/menu' style={{ textDecoration: 'none' }} >
                      <li className='dropdownhover'>Starters</li>
                      <li className='dropdownhover'>Main Course</li>
                      <li className='dropdownhover'>Sides</li>
                      <li className='dropdownhover'>Sweets & treats</li>
                      <li className='dropdownhover'>Bevarages</li></Link>
                  </ul>
                  <ul className='mega1 mt-3' >
                    <h5>Shop Page</h5>
                    <Link to='/cart' style={{ textDecoration: 'none' }}><li className='dropdownhover'>My Cart</li></Link>
                    <Link to='/wishlist' style={{ textDecoration: 'none' }}><li className='dropdownhover'>My Wishlist</li></Link>
                    <Link to='/menu' style={{ textDecoration: 'none' }}><li className='dropdownhover'> Order Online</li></Link>
                  </ul>
                  <ul className='mega1 mt-3 '>
                    <h5>Categories</h5>
                    <Link to='/menu' style={{ textDecoration: 'none' }}>
                      <li className='dropdownhover'>Veg</li>
                      <li className='dropdownhover'>Non-Veg</li>
                      <li className='dropdownhover'>Pizza Mania</li>
                      <li className='dropdownhover'>Burger Pizza</li>
                      <li className='dropdownhover'>Combo</li></Link>
                  </ul>
                  <ul className='mega1 mt-4' style={{ width: '30%', marginLeft: '60px' }}>
                    <Row style={{ lineHeight: 'normal' }}>
                      <h5>Best Sellers</h5>
                      <Col>
                        <div>
                          <img src={product1}
                            width={80}
                            height={80}
                            alt=" imagee" />
                        </div>
                      </Col>
                      <Col>
                        <div>Simple Product 022</div>
                        <p className='mt-3'>$80.00</p>
                      </Col>
                    </Row>
                    <hr></hr>
                    <Row className=' mt-4' style={{ lineHeight: 'normal' }}>
                      <h5>Best Sellers</h5>
                      <Col>
                        <div>
                          <img src={product2}
                            width={80}
                            height={90}
                            alt="imagee" />
                        </div>
                      </Col>
                      <Col>
                        <div >Simple Product 017</div>
                        <p className='mt-3'>$130.00</p>
                      </Col>
                    </Row>
                  </ul>
                </NavDropdown>
              </Nav.Link>
              <Nav.Link ><Link className='mx-2 color1' to='/about'>ABOUT</Link></Nav.Link>
              <Nav.Link><Link className='mx-2 color1' to='/booktable'>BOOKTABLE</Link></Nav.Link>
            </Nav>
            <Nav className='text-center'>
              <Nav.Link>
                <div className='icon color1 loginicon '>
                  <Example />
                </div>

                <div className='icon'><Link className="color1" to='/cart'><FaShoppingCart />
                  <sup id='suptag'>{getTotalQuantity() || 0}</sup>
                </Link>
                </div>
                <div className='icon '><Link className="color1" to='/wishlist'><FaHeart />
                  <sup id='suptag'>{getWishlistTotal() || 0}</sup>
                </Link></div>
                <Link to='/menu'><Button className='color2 mx-3'>
                  Order Online
                </Button></Link>
              </Nav.Link>  </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar></div>
  )
}

export default Navbarexample
