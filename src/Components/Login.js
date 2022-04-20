import React, { useState } from 'react'
import { Form , Spinner} from 'react-bootstrap'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiOutlineLogin } from "react-icons/hi";
import '../App.css'
import RegisterModal from './RegisterModal';
const Login = () => {

  const [spinner, setSpinner] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const register = () =>{
    setShow(true)
  }

  const login = ()=>{
    setSpinner(true);
  }
  return (
    <>
      <div className='page-body container-fluid d-flex justify-content-center align-items-center'>

        <div className="home-body card d-flex justify-content-center rounded p-3">
          <div class=" text-center mb-5 " style={{'fontSize':'2rem'}}>LOGIN</div>

          <div className='d-flex flex-row justify-content-evenly mb-3 p-1'>
            <div class="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" />
              <label className="form-check-label" for="flexRadioDisabled">
                ADMIN
              </label>
            </div>
            <div class="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked />
              <label className="form-check-label" for="flexRadioCheckedDisabled">
                USER
              </label>
            </div>
          </div>

          <Form>
            <div className="text-black px-2">Email</div>
              <div className='d-flex justify-content-center align-items-center'>
                <input
                  type={'text'}
                  id="email"
                  name="email"  
                  className="border-0 form-control px-2 mx-2 rounded mt-2 clr"/>
              </div>
              <div className="mt-3 d-flex px-2 flex-row justify-content-between">
                <div className="text-black">Password</div>
                <Link className="text-muted text-decoration-none mt-1" style={{'fontSize':'.8rem'}} to="/forgot-password">Forgot password?</Link>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <input
                  type={'password'}
                  className="border-0  px-2 mx-2 mt-2 rounded form-control clr"
                  name="password"
                  id="password"/>
              </div> 
                  <div className="text-center mt-3 ">
                    <button
                      onClick={()=>login()}
                      type="submit"
                      className="login-btn btn button border-0 w-50 p-2 rounded-3">
                      {spinner === true ? 
                      <>
                      <Spinner animation="border" size="sm" variant="light"/></>
                      :<><HiOutlineLogin color='white'/>
                      <span className='text-white font-monospace ms-2 fw-bold'>Login</span> 
                      </>
                      }
                    </button>
                  </div>
            </Form>
            <span className="mt-3 text-center text-muted " style={{'fontSize':'.9rem'}}>New User?<button onClick={register} className='text-decoration-none btn text-muted btn-link'>Register</button></span>
        </div>
      </div>
      
      {show && <RegisterModal 
        show = {show}
        handleClose = {handleClose}
      />}
    </> 
  );
};
export default Login;