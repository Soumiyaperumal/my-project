import React from "react";
import AutoLayoutExample from './Section4';
import ContainerFluidExample from './Section7';
import Container from "react-bootstrap/Container";
import Navbarexample from "./Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
const About = () => {
  return (
    <div>
      <Navbarexample />
      <Container style={{ textAlign: 'center' }} className='mt-4'>
        <Link to='/'><Button className='color2'>Back to Home</Button></Link>
        <h1 style={{ fontFamily: 'Dancing Script' }} className='fw-bold mt-5'>Our vision : a plastic-free Reef</h1>
        <p className="mt-4">We have a vision – a diverse, thriving Great Barrier Reef free from the impacts of plastic waste. That’s why we’ve joined forces with campaigns and projects along the Reef with an ambitious goal – to rid the Great Barrier Reef of single use plastics.</p>
        <p>We’ve already begun this journey, partnering with the Last Straw on the GBR, Straw No More Project and AMPTO to get all reef tour operators and businesses to commit to ditching plastic straws. Hundreds have already signed up – you can see who’s who at the top of this page and take your own pledge below.</p>
        <h1 style={{ fontFamily: 'Dancing Script' }} className='fw-bold mt-5 mb-4'>The plastic problem</h1>
        <p>Used for minutes, lasts for centuries – single-use plastics have become a scourge on our environment.</p>
        <p>Plastic straws, bottles, bags and takeaway containers are so ingrained in our daily lives that they’re hard to escape. With plastic waste recently found in the Antarctic and at the bottom of the ocean, it's clear that nowhere has escaped the epidemic, including the Great Barrier Reef.</p>
      </Container>
      <hr></hr>
      <AutoLayoutExample />
      <ContainerFluidExample />
    </div>
  )
}
export default About;