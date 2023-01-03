import React from 'react'
import CollapsibleExample from './Section1';
import ContainerExample from './Section2';
import GridExample from './Section3';
import AutoLayoutExample from './Section4';
import AutoLayoutExample2 from './Section5';
import ControlledCarousel from './Section6';
import ContainerFluidExample from './Section7';
import TextExample from './Section8';
import Navbarexample from './Navbar'
function Section() {
  return (
    <div>
      <Navbarexample />
      <CollapsibleExample />
      <ContainerExample />
      <TextExample />
      <GridExample />
      <AutoLayoutExample />
      <AutoLayoutExample2 />
      <ControlledCarousel />
      <ContainerFluidExample />
    </div>
  );
}

export default Section;