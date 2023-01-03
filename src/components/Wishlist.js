import WishItem from './WishItem'
import { useSelector } from 'react-redux'
import Navbarexample from "./Navbar";
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import ContainerFluidExample from './Section7'

function Wish() {

  const wish = useSelector((state) => state.wish)

  return (
    <>
      <div className=' text-center' style={{ backgroundColor: 'rgb(85, 172, 243)', paddingBottom: '150px' }}>
        <Navbarexample />
        <div className='pt-5 pb-5 mb-5 blockqoutes'>
          <h3 style={{ fontFamily: 'Dancing Script' }}>Wishlist</h3>
          <Link to='/'><Button className='color2'>Continue Shopping</Button></Link>
        </div>
        {wish?.map((item) => (
          <WishItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}

      </div><ContainerFluidExample />
    </>
  )
}
export default Wish


