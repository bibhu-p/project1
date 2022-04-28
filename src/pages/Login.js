import React, { useState } from 'react'
import { Spinner} from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiOutlineLogin } from "react-icons/hi";
import '../App.css'
import RegisterModal from '../Components/RegisterModal';
const Login = () => {

  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);
  const [show, setShow] = useState(false);
  const [loginType, setLoginType] = useState(false);
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
  const clear = ()=>{
    setFormValues({...formValues, email:'', password:''});
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

    // code for Login;
    setSpinner(true)

    if(loginType ){
    axios.post('http://localhost:5000/api/admin/login', formValues)
      .then(function (response) {
        setSpinner(false)
        clear()
        let type = 'admin';
        localStorage.setItem("loggedInData", JSON.stringify(response.data.data));
        localStorage.setItem("authToken", JSON.stringify(response.data.token));
        localStorage.setItem("userType", type);
        console.log(response);
        navigate("/admin/dashboard");
        
      })
      .catch(function (error) {
        setSpinner(false)
        clear()
        return console.log(error);
      })
    }else{
    // console.log(loginType);
    axios.post('http://localhost:5000/api/user/login', formValues)
      .then(function (response) {
        setSpinner(false)
        clear()
        let type = 'user';
        localStorage.setItem("loggedInData", JSON.stringify(response.data.data));
        localStorage.setItem("authToken", JSON.stringify(response.data.token));
        localStorage.setItem("userType", JSON.stringify(type));
        console.log(response);
        navigate("/user/dashboard");

      })
      .catch(function (error) {
        setSpinner(false)
        clear()
        return console.log(error);
      });
    }

  };
  return (
    <>
      <div className='page-body container-fluid d-flex justify-content-center align-items-center'>

        <div className="home-body card d-flex justify-content-center rounded p-3">
          <div className=" text-center mb-5 " style={{'fontSize':'2rem'}}>LOGIN</div>

          <div className='d-flex flex-row justify-content-evenly mb-3 p-1'>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDisabled" onChange={(e)=>setLoginType(true)} />
              <label className="form-check-label" >
                ADMIN
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDisabled" onChange={(e)=>setLoginType(false)} defaultChecked />
              <label className="form-check-label">
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
            <span className="mt-2 text-center text-muted " style={{'fontSize':'.9rem'}}>New User?<button onClick={onRegister} className='btn reg-btn text-secondary'>Register</button></span>
        </div>
      </div>
      
      {show && <RegisterModal 
        show = {show}
        handleClose = {handleClose}
        loginType = {loginType}
      />}
    </> 
  );
};
export default Login;