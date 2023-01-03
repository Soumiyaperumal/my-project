import React from 'react';
import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/esm/Container';
function Total() {
  const cart = useSelector((state) => state.cart)
  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return { totalPrice, totalQuantity }
  }
  return (
    <div className='text-center' >
      <h2 className=' navbrand fw-bold'>ORDER SUMMARY</h2>
      <div>
        <h2 className=' navbrand fw-bold'>Cart Total</h2>
        <Container style={{ width: '60%', textAlign: 'center', backgroundColor: 'white' }}>
          <Table >
            <tbody>
              <tr>
                <td>
                  Total Items -  {getTotal().totalQuantity}
                  <h3>Amount : <strong>$ {getTotal().totalPrice}</strong></h3>
                </td>
              </tr>

            </tbody> </Table></Container>


      </div>
    </div>
  )
}
export default Total;