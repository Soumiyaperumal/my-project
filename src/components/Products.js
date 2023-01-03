import React, { useState } from "react"
import { useParams } from "react-router-dom"
import Data from "./Data"
import Navbarexample from './Navbar';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FaShoppingCart } from 'react-icons/fa'
import Button from "react-bootstrap/Button";
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import Modal from 'react-bootstrap/Modal'
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import ContainerFluidExample from './Section7'
function ProductDetail() {
    const { productId } = useParams();
    const product = Data.find((item) => item.id === parseInt(productId))
    const { id, text, title, image, price } = product;
    const dispatch = useDispatch()
    //---------Modal---------- 
    const [show, setShow] = useState(false);
    const handleClose2 = () => setShow(false);
    const handleShow2 = () => setShow(true);
    //------cart quantity------
    const cart = useSelector((state) => state.cart)
    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(item => {
            total += item.quantity
        })
        return total
    }
    return (
        <>
            <Navbarexample />
            <div>
                <Container fluid className='text-center pt-5 pb-5' style={{ backgroundColor: '#222831', color: 'white' }}>
                    <Row>
                        <Col><h1  >{title}</h1></Col>
                    </Row>
                    <Link to='/'><Button className='color2'>Back to Home</Button></Link>
                </Container>
                <Container className="pt-5 mb-5">
                    <Row md={1} lg={2}>
                        <Col><img src={image} alt='imagee' width={430} height={380} /></Col>
                        <Col><h1>{title}</h1>
                            <p className="mt-3">Price: $ <strong>{price}</strong></p>
                            <h6 className="mt-4 mb-5" style={{ lineHeight: '1.7' }}>{text}</h6>
                            <Button className='footer productbutton' style={{ float: 'none', width: '40%' }}
                                onClick={handleShow2}
                            >
                                <span className='viewhover'>Add to Cart </span>
                                <FaShoppingCart className='mb-1 mx-1 searchicon' /></Button>
                            <Link to='/cart'>
                                <Button className='footer productbutton mx-5' style={{ float: 'none' }}>View cart</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <div>
                    <Modal show={show} onHide={handleClose2} >
                        <Modal.Title><FaCheckCircle style={{ width: '100px', height: '100px', color: 'green' }} /></Modal.Title>

                        <Modal.Body className='text-center pb-5'>Woohoo, you're adding item to your Cart!
                            <h2 style={{ fontFamily: 'Dancing Script', fontWeight: 'bold' }}>{getTotalQuantity() || 0} Item added to Cart!</h2>
                            <p> Item in Cart : {getTotalQuantity() || 0}</p>
                            <small>Click confirm to add Item to Cart</small>
                        </Modal.Body>
                        <Modal.Footer className='modal-title'>
                            <Button variant="danger" onClick={handleClose2}>
                                Cancel
                            </Button>
                            <Button variant="success" onClick={handleClose2}
                                onFocus={() =>
                                    dispatch(addToCart({ id, title, image, price }))
                                }
                                className=' addcart' style={{ float: 'none' }}
                            >Confirm changes
                            </Button>
                        </Modal.Footer>
                    </Modal></div>
                <ContainerFluidExample />
            </div></>
    )
}

export default ProductDetail

