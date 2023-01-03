// src/components/CartItem.js
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { AiFillDelete } from 'react-icons/ai'
import { FiPlus } from 'react-icons/fi';
import { BiMinus } from 'react-icons/bi';
function CartItem({ id, image, title, price, quantity = 0 }) {
  const dispatch = useDispatch()
  return (
    <>
      <Container fluid >
        <Table style={{ backgroundColor: 'white' }}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Item</th>
              <th>Price</th>
              <th >Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr> <td><p className='mt-3'>{title}</p></td>
              <td ><div><img src={image} alt='item' className='mt-2 cartalign' style={{ width: '120px', height: '100px' }} /></div></td>
              <td><div className='mt-3'>$<strong> {price}</strong></div></td>
              <td ><div style={{ width: '50%', height: '45px', margin: '0 auto' }} className='mt-3 d-flex mediabox'>
                <p className='px-1 incrementalignment' onClick={() => dispatch(decrementQuantity(id))}
                ><BiMinus /></p>
                <p style={{ width: '90px' }} className='incrementalignment mediaQuantity px-1'> {quantity} </p>
                <p className='px-1 incrementalignment' onClick={() => dispatch(incrementQuantity(id))}
                ><FiPlus /></p>
              </div>
              </td>
              <td><div style={{ color: 'red', marginTop: '10px', cursor: 'pointer' }} className=' fs-4'
                onClick={() => dispatch(removeItem(id))}><AiFillDelete />
              </div>
              </td></tr>
          </tbody>
        </Table>
      </Container></>
  )
}

export default CartItem


