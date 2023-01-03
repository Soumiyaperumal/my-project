import React from "react";
import Data from "./Data";
import Nav from 'react-bootstrap/Nav';
const Buttons = ({ filterItem, setItem, newArr }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Nav className="justify-content-center pb-5 m-3" variant="pills" defaultActiveKey="link">
          <Nav.Item >
            <Nav.Link className='navlink fs-5' eventKey="link" onClick={() => setItem(Data)}>All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='navlink fs-5' eventKey="link-1" onClick={() => filterItem("burger")}
            >Burger</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='navlink fs-5' eventKey="link-2" onClick={() => filterItem("pizza")}
            >Pizza</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='navlink fs-5' eventKey="link-3" onClick={() => filterItem("pasta")}
            >Pasta</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='navlink fs-5' eventKey="link-4" onClick={() => filterItem("icecream")}
            >Desserts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='navlink fs-5' eventKey="link-5" onClick={() => filterItem("fries")}
            >Fries</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
};

export default Buttons;