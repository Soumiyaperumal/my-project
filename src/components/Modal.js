import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Login from './Login';
import Signup from './Signup';
function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div variant="primary" onClick={handleShow} >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /></svg>
      </div>

      <Modal show={show} onHide={handleClose} animation={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Body>
          <Modal.Header style={{ paddingTop: '12px', border: 'none' }} closeButton>
          </Modal.Header>
          <Tabs
            defaultActiveKey="Login"
            id="fill-tab-example"
            fill
          >
            <Tab eventKey="Signup" title="Signup" className=' pb-3'>
              <Signup />
            </Tab>
            <Tab eventKey="Login" title="Login" className=' pb-3'>
              < Login />
            </Tab>
          </Tabs></Modal.Body>
      </Modal>

    </>
  );
}

export default Example;