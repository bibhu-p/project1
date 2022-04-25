import {Button , Modal, Spinner } from 'react-bootstrap'
import React, {useState} from 'react';
import axios from 'axios';
const RegisterModal =(props) =>{

  const [spinner, setSpinner] = useState(false);
  const [regFormValues, setRegFormValues] = useState({
    name:'',
    email:'',
    password:'',
    age:'',
    adhaar:'',
    phone:'',
    address:''
  });
  const clear = ()=>{
    setRegFormValues({...regFormValues,
      name:'',
      email:'',
      password:'',
      age:'',
      adhaar:'',
      phone:'',
      address:''
    });
  }
  const [regFormErr, setRegFormErr] = useState({
    name:false,
    email:false,
    pwd:false,
    age:false,
    adhaar:false,
    phone:false,
    address:false
  })
  const classes={
    valid:"border-0   mb-2  mt-2 rounded form-control input-valid clr",
    inValid:"border-0   mb-2  mt-2 rounded form-control input-invalid clr"
  }

  const userRegister = () => {

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!regFormValues.name) {
      setRegFormErr({...regFormErr, name:true})
      return;
    }
    if (!regFormValues.email) {
      setRegFormErr({...regFormErr, email:true})
      return;
    } else if (!regex.test(regFormValues.email)) {
      setRegFormErr({...regFormErr, email:true})
      return;
    }
    if (!regFormValues.password) {
      setRegFormErr({...regFormErr, pwd:true})
      return;
    }
    if (!regFormValues.age) {
      setRegFormErr({...regFormErr, age:true})
      return;
    }
    if (!regFormValues.adhaar) {
      setRegFormErr({...regFormErr, adhaar:true})
      return;
    }
    if (!regFormValues.phone) {
      setRegFormErr({...regFormErr, phone:true})
      return;
    }if (!regFormValues.address) {
      setRegFormErr({...regFormErr, address:true})
      return;
    }

    setSpinner(true);
    axios.post('http://localhost:5000/api/user/register', regFormValues)
    .then(function (response) {
      setSpinner(false)
      clear()
      console.log(response);
      props.handleClose()
    })
    .catch(function (error) {
      setSpinner(false)
      clear()
      props.handleClose()
      return console.log(error);
    });
  };

  const adminRegister = () => {

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!regFormValues.name) {
      setRegFormErr({...regFormErr, name:true})
      return;
    }
    if (!regFormValues.email) {
      setRegFormErr({...regFormErr, email:true})
      return;
    } else if (!regex.test(regFormValues.email)) {
      setRegFormErr({...regFormErr, email:true})
      return;
    }
    if (!regFormValues.password) {
      setRegFormErr({...regFormErr, pwd:true})
      return;
    }

    setSpinner(true);
    axios.post('http://localhost:5000/api/admin/register', regFormValues)
    .then(function (response) {
      setSpinner(false)
      clear()
      props.handleClose()
      console.log(response);
    })
    .catch(function (error) {
      setSpinner(false)
      clear()
      props.handleClose()
      return console.log(error);
    });
  }

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
        {props.loginType ? 
          <div className='row row-cols-1 row-cols-sm-2'>
          <div className='col px-2 '>
                  <div className="text-black ">Name</div>
                  <div className='d-flex  align-items-center'>
                    <input
                      type={'text'}
                      id="name"
                      name="name"  
                      autoComplete=''
                      value={regFormValues.name}
                      onChange={(e)=>{setRegFormErr({...regFormErr, name:false}); setRegFormValues({...regFormValues, name:e.target.value})}}
                      className={regFormErr.name ? classes.inValid : classes.valid}/>
                  </div>
              </div>
                <div className='col px-2'>
                    <div className="text-black ">Email</div>
                    <div className='d-flex justify-content-center align-items-center'>
                      <input
                        type={'text'}
                        id="email"
                        name="email"  
                        autoComplete=''
                        value={regFormValues.email}
                        onChange={(e)=>{setRegFormErr({...regFormErr, email:false}); setRegFormValues({...regFormValues, email:e.target.value})}}
                        className={regFormErr.email ? classes.inValid : classes.valid}/>
                    </div>
                </div>
                <div className='col px-2'>
                  <div className="text-black ">Password</div>
                  <div className='d-flex justify-content-center align-items-center'>
                    <input
                      type={'password'}
                      id="password"
                      name="password"  
                      autoComplete=''
                      value={regFormValues.password}
                      onChange={(e)=>{setRegFormErr({...regFormErr, pwd:false}); setRegFormValues({...regFormValues, password:e.target.value})}}
                      className={regFormErr.pwd ? classes.inValid : classes.valid}/>
                  </div>
                </div>
          </div>
          :
        <div className='row row-cols-1 row-cols-sm-2'>
            <div className='col px-2 '>
                <div className="text-black ">Name</div>
                <div className='d-flex  align-items-center'>
                  <input
                    type={'text'}
                    id="name"
                    name="name"  
                    autoComplete=''
                    value={regFormValues.name}
                    onChange={(e)=>{setRegFormErr({...regFormErr, name:false}); setRegFormValues({...regFormValues, name:e.target.value})}}
                    className={regFormErr.name ? classes.inValid : classes.valid}/>
                </div>
            </div>
              <div className='col px-2'>
                  <div className="text-black ">Email</div>
                  <div className='d-flex justify-content-center align-items-center'>
                    <input
                      type={'text'}
                      id="email"
                      name="email"  
                      autoComplete=''
                      value={regFormValues.email}
                      onChange={(e)=>{setRegFormErr({...regFormErr, email:false}); setRegFormValues({...regFormValues, email:e.target.value})}}
                      className={regFormErr.email ? classes.inValid : classes.valid}/>
                  </div>
              </div>
              <div className='col px-2'>
                <div className="text-black ">Password</div>
                <div className='d-flex justify-content-center align-items-center'>
                  <input
                    type={'password'}
                    id="password"
                    name="password"  
                    autoComplete=''
                    value={regFormValues.password}
                    onChange={(e)=>{setRegFormErr({...regFormErr, pwd:false}); setRegFormValues({...regFormValues, password:e.target.value})}}
                    className={regFormErr.pwd ? classes.inValid : classes.valid}/>
                </div>
              </div>
              <div className='col px-2'>
                <div className="text-black ">Age</div>
                <div className='d-flex justify-content-center align-items-center'>
                  <input
                    type={'text'}
                    id="age"
                    name="age"  
                    autoComplete=''
                    value={regFormValues.age}
                    onChange={(e)=>{setRegFormErr({...regFormErr, age:false}); setRegFormValues({...regFormValues, age:e.target.value})}}
                    className={regFormErr.age ? classes.inValid : classes.valid}/>
                </div>
              </div>
              <div className='col px-2'>
                <div className="text-black ">Phone</div>
                <div className='d-flex justify-content-center align-items-center'>
                  <input
                    type={'text'}
                    id="phone"
                    name="phone"  
                    autoComplete=''
                    value={regFormValues.phone}
                    onChange={(e)=>{setRegFormErr({...regFormErr, phone:false}); setRegFormValues({...regFormValues, phone:e.target.value})}}
                    className={regFormErr.phone ? classes.inValid : classes.valid}/>
                </div>
              </div>
              <div className='col px-2'>
                <div className="text-black ">Adhaar</div>
                <div className='d-flex justify-content-center align-items-center'>
                  <input
                    type={'text'}
                    id="adhaar"
                    name="adhaar"  
                    autoComplete=''
                    value={regFormValues.adhaar}
                    onChange={(e)=>{setRegFormErr({...regFormErr, adhaar:false}); setRegFormValues({...regFormValues, adhaar:e.target.value})}}
                    className={regFormErr.adhaar ? classes.inValid : classes.valid}/>
                </div>
              </div>
              <div className='col px-2'>
                <div className="text-black ">Address</div>
                <div className='d-flex justify-content-center align-items-center'>
                  <input
                    type={'text'}
                    id="address"
                    name="address"  
                    autoComplete=''
                    value={regFormValues.address}
                    onChange={(e)=>{setRegFormErr({...regFormErr, address:false}); setRegFormValues({...regFormValues, address:e.target.value})}}
                    className={regFormErr.address ? classes.inValid : classes.valid}/>
                </div>
              </div>
        </div>
        }
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn-light cls-btn' onClick={props.handleClose}>
            Close
          </Button>
          <Button className=' ms-2 login-btn border-0' onClick={()=>{props.loginType? adminRegister(): userRegister()}}>
  {spinner? <Spinner animation="border" size="sm" variant="light"/>:<span className='text-white font-monospace ms-2 fw-bold'>Register</span>}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegisterModal