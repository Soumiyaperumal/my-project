// src/components/Item.js
import { useDispatch } from 'react-redux'
import { addToWish } from '../redux/cartSlice'
import Card from 'react-bootstrap/Card'
import { FaHeart } from 'react-icons/fa'
import Button from 'react-bootstrap/Button'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaCheckCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/esm/Container'
function Item({ id, title, text, image, price, quantity = 0 }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const wish = useSelector((state) => state.wish)
  const getWishlistTotal = () => {
    let total = 0
    wish.forEach(item => {
      total += item.quantity
    })
    return total
  }
  return (
    <div>
      <Card className='bg-dark cd '>
        <div className='wish' style={{ cursor: 'pointer' }} onClick={handleShow}
        ><span className='wishlist pt-1' >WISHLIST</span><FaHeart style={{ color: 'red', fontSize: '25px' }} /></div>
        <div className='cardimg' key={id}>
          <img variant="top" src={` ${image}`} alt='imagee' width={235} height={160} className='hey'></img>
        </div>
        <Card.Body className='p-4'>
          <Card.Title>{title}</Card.Title>
          <Card.Footer>
            <span>${price}</span>
            <Link to={`/products/${id}`}><Button className='footer' style={{ cursor: 'pointer' }} ><span className='viewhover'>View Product</span>
              <FaSearch className='mb-1 mx-1 searchicon' /></Button></Link>
          </Card.Footer>
        </Card.Body>
      </Card>
      <Container>
        <Modal show={show} onHide={handleClose} >
          <Modal.Title><FaCheckCircle style={{ width: '100px', height: '100px', color: 'green' }} /></Modal.Title>
          <Modal.Body className='text-center pb-5'>Woohoo, you're adding item to wishlist!
            <h2>{getWishlistTotal() || ""} Item added to wishlist</h2>
            <small>Click confirm to add Item to wishlist</small>
          </Modal.Body>
          <Modal.Footer className='modal-title'>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleClose} onFocus={() =>
              dispatch(addToWish({ id, title, image, price }))
            } className='addcart'>Confirm changes
            </Button>
          </Modal.Footer>
        </Modal></Container>
    </div>
  )
}
export default Item
