import React, { useState } from 'react'
import { Spinner} from 'react-bootstrap'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiOutlineLogin } from "react-icons/hi";
import '../App.css'
import RegisterModal from './RegisterModal';
const Login = () => {

  const [spinner, setSpinner] = useState(false);
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({
    email:'',
    password:''
  });

  const [formErr, setFormErr] = useState({
    email:false,
    pwd:false
  });

  const classes={
    valid:"border-0  px-2 mb-2 mx-2 mt-2 rounded form-control input-valid clr",
    inValid:"border-0  px-2 mb-2 mx-2 mt-2 rounded form-control input-invalid clr"
  }

  
  const handleClose = () => setShow(false);
  const onRegister = () =>{
    setShow(true)
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (!formValues.email) {
      setFormErr({...formErr, email:true})
      return;
    } else if (!regex.test(formValues.email)) {
      setFormErr({...formErr, email:true})
      return;
    }
    if (!formValues.password) {
      setFormErr({...formErr, pwd:true})
      return;
    }

    // code for login
    setSpinner(true);

    setTimeout(()=>{
      setSpinner(false)
    }, 2000 )

  };
  return (
    <>
      <div className='page-body container-fluid d-flex justify-content-center align-items-center'>

        <div className="home-body card d-flex justify-content-center rounded p-3">
          <div className=" text-center mb-5 " style={{'fontSize':'2rem'}}>LOGIN</div>

          <div className='d-flex flex-row justify-content-evenly mb-3 p-1'>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" />
              <label className="form-check-label" for="flexRadioDisabled">
                ADMIN
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" defaultChecked />
              <label className="form-check-label" for="flexRadioCheckedDisabled">
                USER
              </label>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="text-black px-2">Email</div>
              <div className='d-flex justify-content-center align-items-center'>
                <input
                  type={'text'}
                  id="email"
                  name="email" 
                  value={formValues.email}
                  onChange={(e)=>{setFormErr({...formErr, email:false}); setFormValues({...formValues, email:e.target.value})}}
                  className={formErr.email ? classes.inValid : classes.valid}/>
              </div>
              <div className="mt-3 d-flex px-2 flex-row justify-content-between">
                <div className="text-black">Password</div>
                <Link className="text-muted text-decoration-none mt-1" style={{'fontSize':'.8rem'}} to="/forgot-password">Forgot password?</Link>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <input
                  type={'password'}
                  value={formValues.password}
                  onChange={(e)=>{setFormErr({...formErr, pwd:false}); setFormValues({...formValues, password:e.target.value})}}
                  className={formErr.pwd ? classes.inValid : classes.valid}
                  name="password"
                  id="password"/>
              </div> 
                  <div className="d-flex justify-content-center mt-3 ">
                    <button
                      type="submit"
                      className="login-btn btn border-0 w-50 p-2 rounded-3">
                      {spinner? 
                      <Spinner animation="border" size="sm" variant="light"/>
                      :<><HiOutlineLogin color='white'/>
                      <span className='text-white font-monospace ms-2 fw-bold'>Login</span> 
                      </>
                      }
                    </button>
                  </div>
            </form>
            <span className="mt-2 text-center text-muted " style={{'fontSize':'.9rem'}}>New User?<button onClick={onRegister} className='btn reg-btn mb-1 text-secondary'>Register</button></span>
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