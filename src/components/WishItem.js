// src/components/CartItem.js
import React, { useState } from 'react'
import { removeWishlist } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { AiFillDelete } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import Button from 'react-bootstrap/esm/Button'
import Modal from 'react-bootstrap/Modal'
import { FaCheckCircle } from 'react-icons/fa';
import { useSelector } from "react-redux";
import { addToCart } from '../redux/cartSlice'

function WishItem({ id, image, title, price }) {
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
    <div >
      <Container fluid >
        <Table style={{ backgroundColor: 'white' }}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Item</th>
              <th>Add Item</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr> <td><p className='mt-3'>{title}</p></td>
              <td ><div><img src={image} alt='item' className='mt-2 cartalign' style={{ width: '130px', height: '100px' }} /></div></td>
              <td><Button className='footer mt-3' style={{ float: 'none' }} onClick={handleShow2}>
                <FaShoppingCart /></Button></td>
              <td><div className='mt-3'>$<strong> {price}</strong></div></td>
              <td><div style={{ color: 'red', marginTop: '10px', cursor: 'pointer' }} className=' fs-4'
                onClick={() => dispatch(removeWishlist(id))}><AiFillDelete />
              </div>
              </td></tr>
          </tbody>
        </Table></Container>
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
    </div>
  )
}

export default WishItem;