import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Signup() {
  return (
    <div>
      <Form className='formalignment '>
        <h5>Sign up now</h5>
        <Form.Group className="mb-4 mt-4 inputfield" controlId="formGroupEmail">
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-4 inputfield" controlId="formGroupEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3 inputfield" controlId="formGroupPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button className='formalignment' type="submit">
          Sign up
        </Button>
        <p className='mt-2'>Already a Member? <a href='/'>  Login</a></p>
      </Form>
    </div>
  )
}
export default Signup;