import React from 'react'
import { NavLink } from "react-router-dom";
// import { GrHomeRounded } from "react-icons/gr";
// import { FiUsers } from "react-icons/fi";
// import { BiMoviePlay } from "react-icons/bi";

const SideBar=() =>{
  
  const userType = localStorage.getItem('userType');
  return (
      <>
        {/*  <div class=" container d-flex side-div flex-column bg-white min-vh-100  sticky-top"> */}
          {userType === 'admin'?
            <>
              <NavLink to="/admin/dashboard" activeClassName="active" className=" ln-div text-decoration-none text-dark fs-6 mt-5 mb-2 rounded">
              {/* <div className=' w-100  d-flex  justify-content-start'><GrHomeRounded className='my-1 me-2'/> */}
              DashBoard
              {/* </div> */}
              </NavLink>
              <NavLink to="/admin/users" activeClassName="active" className=" ln-div text-decoration-none text-dark fs-6 mb-1 rounded">
              {/* <div className=' w-100 d-flex justify-content-start'><FiUsers className='my-1 me-2'/> */}
              Users
              {/* </div> */}
              </NavLink>
              <NavLink to="/admin/movies" activeClassName="active" className=" ln-div text-decoration-none text-dark fs-6 mb-1 rounded">
              {/* <div className=' w-100 d-flex justify-content-start'><BiMoviePlay className='my-1 me-2'/> */}
              Movies
              {/* </div> */}
              </NavLink>
            </>
            :
            <>
              <NavLink to="/user/dashboard" activeClassName="active" className=" ln-div text-decoration-none text-dark fs-6 mt-5 mb-2 rounded">
              {/* <div className=' w-100  d-flex  justify-content-start'><GrHomeRounded className='my-1 me-2'/> */}
              DashBoard
              {/* </div> */}
              </NavLink>
              <NavLink to="/user/movies" activeClassName="active" className=" ln-div text-decoration-none text-dark fs-6 mb-1 rounded">
              {/* <div className=' w-100 d-flex justify-content-start'><BiMoviePlay className='my-1 me-2'/> */}
              Movies
              {/* </div> */}
              </NavLink>
            </>
          }
        {/*  </div> */}
      </>
  ) 
}
export default SideBar;