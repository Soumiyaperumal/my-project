import React from "react";
import AutoLayoutExample2 from './Section5';
import ContainerFluidExample from './Section7';
import Navbarexample from "./Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
const Booktable = () => {
  return (
    <div>
      <Navbarexample />
      <div className="text-center mt-5"> <Link to='/'><Button className='color2'>Back to Home</Button></Link></div>
      <AutoLayoutExample2 />
      <ContainerFluidExample />
    </div>
  )
}
export default Booktable;