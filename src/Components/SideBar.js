import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { BiMoviePlay } from "react-icons/bi";
import {AiOutlineMenu} from 'react-icons/ai';

const SideBar = () => {

  const [sideActive, setSideActive] = useState(false);
  
  const classes={
    dash:"link  p-2 mb-1 d-flex align-self-center justify-content-start",
    hideDash:" p-2 d-flex hide",
    showDash:'link p-2 mb-2 d-flex justify-content-start',
    hide:'d-none',
    show:'',
  }

  const userType = localStorage.getItem('userType');
  return (
    <>
      <div className="side-div bg-white min-vh-100 p-2" style={{zIndex:"1024"}}>
        <div style={{position:'sticky'}} className='d-flex flex-column'>
          <div className="mb-2 justify-content-center ">
          <img style={{width:'120px',height:'80px'}} className={sideActive? classes.show : classes.hide} src="https://i.pinimg.com/736x/de/a0/f3/dea0f3b7f480b1151c08db4a402a43b9.jpg"/>
          <button onClick={()=> sideActive?setSideActive(false):setSideActive(true)} style={{border: 'none',backgroundColor: '#fff'}}>
          <AiOutlineMenu  color='black'/>
          </button>
          </div>
          {userType === 'admin' ?
            <>
              <NavLink to="/admin/dashboard" activeClassName="active" className=" text-decoration-none text-dark fs-6  mb- rounded">
                <div className={sideActive? classes.showDash : classes.hideDash}><GrHomeRounded className='my-1 me-2' />
                  <span className={sideActive? classes.show : classes.hide}> DashBoard</span>
                </div>
              </NavLink>
              <NavLink to="/admin/users" activeClassName="active" className=" text-decoration-none text-dark fs-6 mb-1 rounded">
                <div className={sideActive? classes.showDash : classes.hideDash}><FiUsers className='my-1 me-2' />
                  <span className={sideActive? classes.show : classes.hide}> Users</span> 
                </div>
              </NavLink>
              <NavLink to="/admin/movies" activeClassName="active" className=" text-decoration-none text-dark fs-6 mb-1 rounded">
                <div className={sideActive? classes.showDash : classes.hideDash}><BiMoviePlay className='my-1 me-2' />
                  <span className={sideActive? classes.show : classes.hide}> Movies</span>
                </div>
              </NavLink>
            </>
            :
            <>
              <NavLink to="/user/dashboard" activeClassName="active" className="text-decoration-none text-dark fs-6  mb-2 rounded">
                <div className={sideActive? classes.showDash : classes.hideDash}><GrHomeRounded className='my-1 me-2' />
                  <span className={sideActive? classes.show : classes.hide}> DashBoard</span>
                </div>
              </NavLink>
              <NavLink to="/user/movies" activeClassName="active" className=" text-decoration-none text-dark fs-6 mb-1 rounded">
                <div className={sideActive? classes.showDash : classes.hideDash}><BiMoviePlay className='my-1 me-2' />
                  <span className={sideActive? classes.show : classes.hide}> Movies</span>
                </div>
              </NavLink>
            </>
          }
        </div>

      </div>
    </>
  )
}
export default SideBar;