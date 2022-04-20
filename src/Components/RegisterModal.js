
import {Button , Modal } from 'react-bootstrap'
// import React, {useState} from 'react';
function RegisterModal(props) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);


  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title >Register</Modal.Title>
        </Modal.Header>
        <Modal.Body  >
        <div className="text-black px-2">Name</div>
              <div className='d-flex justify-content-center align-items-center'>
                <input
                  type={'text'}
                  id="email"
                  name="email"  
                  autoComplete=''
                  className="border-0 form-control px-2 mx-2 rounded mt-2  mb-2 clr"/>
              </div>
        <div className="text-black px-2">Email</div>
              <div className='d-flex justify-content-center align-items-center'>
                <input
                  type={'text'}
                  id="email"
                  name="email"  
                  autoComplete=''
                  className="border-0 form-control px-2 mx-2 rounded mt-2 mb-2 clr"/>
              </div>
        
              <div className="text-black px-2">Password</div>
              <div className='d-flex justify-content-center align-items-center'>
                <input
                  type={'password'}
                  id="email"
                  name="email"  
                  autoComplete=''
                  className="border-0 form-control px-2 mx-2 rounded mt-2 mb-2 clr"/>
              </div>
              <div className="text-black px-2">Age</div>
              <div className='d-flex justify-content-center align-items-center'>
                <input
                  type={'text'}
                  id="email"
                  name="email"  
                  autoComplete=''
                  className="border-0 form-control px-2 mx-2 rounded mt-2 mb-2 clr"/>
              </div>
              <div className="text-black px-2">Phone</div>
              <div className='d-flex justify-content-center align-items-center'>
                <input
                  type={'text'}
                  id="email"
                  name="email"  
                  autoComplete=''
                  className="border-0 form-control px-2 mx-2 rounded mt-2 mb-2 clr"/>
              </div>
              <div className="text-black px-2">Adhaar</div>
              <div className='d-flex justify-content-center align-items-center'>
                <input
                  type={'text'}
                  id="email"
                  name="email"  
                  autoComplete=''
                  className="border-0 form-control px-2 mx-2 rounded mt-2 mb-2 clr"/>
              </div>
              <div className="text-black px-2">Address</div>
              <div className='d-flex justify-content-center align-items-center'>
                <input
                  type={'text'}
                  id="email"
                  name="email"  
                  autoComplete=''
                  className="border-0 form-control px-2 mx-2 rounded mt-2 mb-2 clr"/>
              </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary">Register</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegisterModal