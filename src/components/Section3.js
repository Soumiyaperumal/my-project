import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
// import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Item from './item';
import Row from 'react-bootstrap/Row';
import Data from './Data';
import Buttons from "./Buttons";
function GridExample() {
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((Val) => Val.category))];
  const [newArr, setNewArr] = useState(menuItems);

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    console.log(newItem);
    setItem(newItem);
  };

  return (
    <Container>
      <Container>
        <h1 className='navbrand text-center p-5'>Our Menu</h1>
        <Buttons filterItem={filterItem} setItem={setItem} newArr={newArr} />
      </Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {item?.slice(0, 9).map((item) => (
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
      <div className='text-center p-5'>
        <Link to='/menu'>
          <Button className='color2'>View More</Button>
        </Link>
      </div>
    </Container>
  );
}

export default GridExample;