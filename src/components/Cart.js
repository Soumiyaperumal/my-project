import Total from '../components/Total'
import CartItem from './Cartitems'
import { useSelector } from 'react-redux'
import Navbarexample from "./Navbar";
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import ContainerFluidExample from './Section7'
function Cart() {

  const cart = useSelector((state) => state.cart)

  return (
    <>
      <div className='text-center pb-5' style={{ backgroundColor: 'rgb(85, 172, 243)' }}>
        <Navbarexample />
        <div className='pt-5 pb-5 mb-5 blockqoutes'>
          <h1 style={{ fontFamily: 'Dancing Script', fontSize: '60px' }} >My Cart</h1>
          <Link to='/'><Button className='color2'>Continue Shopping</Button></Link>
        </div>
        {cart?.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}

        <div className='pb-5 pt-5'>
          <Total />
        </div>
      </div> <ContainerFluidExample />
    </>
  )
}
export default Cart


