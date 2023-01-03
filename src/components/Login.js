import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom"

function Login() {
  
  return (
    <div>
  <Form className='formalignment'>
    <h5>Please login to your account</h5>
      <Form.Group className="mb-4 mt-4 fs-5 fw-bold inputfield" controlId="formGroupEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3 fs-5  fw-bold inputfield" controlId="formGroupPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <div><a href='/'>Forgot password?</a></div>
      <Button className='formalignment mt-4' type="submit">
        Login
      </Button>
      <p className='mt-2'>Not a Member?<a href="/"> Signup</a></p>
    </Form>
  </div>
  )
}

export default Login;