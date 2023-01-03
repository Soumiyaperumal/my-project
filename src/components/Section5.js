import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import reserved from './pictures/reserved.png'
import { useForm } from 'react-hook-form'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

function AutoLayoutExample2() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    setShow(data);
  }
  return (
    <>
      <Container className='mb-5'>
        <Row xs={1} md={2}>
          <Col>
            <Container fluid>
              <>
                <h1 className='navbrand mt-5 pt-5 pb-3'>Book A Table</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <div style={{ height: '90px' }}><Form.Control
                    type="text"
                    placeholder="Your Name"
                    className=" p-3 formbord"
                    {...register("firstName", { required: true, maxLength: 10 })}
                  />
                    {errors.firstName && <small style={{ color: 'red' }}>Please check the First Name</small>}</div>
                  <div style={{ height: '90px' }}><Form.Control
                    type="text"
                    placeholder="Phone Number"
                    className=" p-3 formbord"
                    {...register("Phonenumber", { required: true, maxLength: 10, pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ })}
                  />
                    {errors.Phonenumber && <small style={{ color: 'red' }}>Please check the Phone Number</small>}</div>
                  <div style={{ height: '90px' }}><Form.Control
                    type="email"
                    placeholder="Your Email"
                    className=" p-3 formbord"
                    {...register("email",
                      {
                        required: true,
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                      })}
                  />
                    {errors.email && <small style={{ color: 'red' }}>Please check Email</small>}</div>
                  <div style={{ height: '100px' }}>
                    <Form.Select aria-label="Default select example" className="p-3 formbord"
                      {...register("select", { required: true })} >
                      <option></option>
                      <option value="1">Two</option>
                      <option value="2">Three</option>
                      <option value="3">four</option>
                      <option value="4">five</option>
                    </Form.Select>
                    {errors.select && <small style={{ color: 'red' }}>Select number of persons </small>}
                  </div>
                  <div style={{ height: '90px' }}><Form.Control
                    type="date"
                    className=" p-3 formbord"
                    {...register("date", { required: true })}
                  />{errors.date && <small style={{ color: 'red' }}>Please check date </small>}</div>
                  <Button className='color2 mt-2 mb-4' type='submit' onSubmit={handleShow}>BOOK NOW</Button>
                </Form>
              </>
            </Container>
          </Col>
          <Col >
            <img src={reserved} alt='imagee' width={'100%'} height={600} className=' mt-5 pt-5 pb-3' />
          </Col>
        </Row>

      </Container>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className='text-center mb-5 mt-3'>
          <FaCheckCircle style={{ width: '100px', height: '100px', color: 'green' }} />
          <h2 style={{ fontFamily: 'Dancing Script', fontWeight: 'bold' }}>Congratulations !<br />Your table has been booked</h2></Modal.Body>
      </Modal></>
  );
}

export default AutoLayoutExample2;
