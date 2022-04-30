import React from 'react'
import { NavLink } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { BiMoviePlay } from "react-icons/bi";
import {AiOutlineMenu} from 'react-icons/ai';

const SideBar = () => {


  const userType = localStorage.getItem('userType');
  return (
    <>
      <div className="side-div bg-white min-vh-100 p-2" style={{zIndex:"1024"}}>
        <div style={{position:'sticky'}} className='d-flex flex-column'>
          <div className="mb-2 justify-content-center ">
          <img style={{width:'120px',height:'80px'}} src="https://i.pinimg.com/736x/de/a0/f3/dea0f3b7f480b1151c08db4a402a43b9.jpg"/>
          {/* <button style={{border: 'none',backgroundColor: '#fff'}}>
          <AiOutlineMenu className='ms-3' color='black'/>
          </button> */}
          </div>
          {userType === 'admin' ?
            <>
              <NavLink to="/admin/dashboard" activeClassName="active" className="  text-decoration-none text-dark fs-6  mb- rounded">
                <div className='link p-2 mb-2 d-flex justify-content-start'><GrHomeRounded className='my-1 me-2' />
                  DashBoard
                </div>
              </NavLink>
              <NavLink to="/admin/users" activeClassName="active" className=" text-decoration-none text-dark fs-6 mb-1 rounded">
                <div className='link p-2 mb-2 d-flex justify-content-start'><FiUsers className='my-1 me-2' />
                  Users
                </div>
              </NavLink>
              <NavLink to="/admin/movies" activeClassName="active" className=" text-decoration-none text-dark fs-6 mb-1 rounded">
                <div className='link p-2  d-flex justify-content-start'><BiMoviePlay className='my-1 me-2' />
                  Movies
                </div>
              </NavLink>
            </>
            :
            <>
              <NavLink to="/user/dashboard" activeClassName="active" className="text-decoration-none text-dark fs-6  mb-2 rounded">
                <div className='link  p-2 mb-1 d-flex align-self-center justify-content-start'><GrHomeRounded className='my-1 me-2' />
                  DashBoard
                </div>
              </NavLink>
              <NavLink to="/user/movies" activeClassName="active" className=" text-decoration-none text-dark fs-6 mb-1 rounded">
                <div className=' link p-2 d-flex justify-content-start'><BiMoviePlay className='my-1 me-2' />
                  Movies
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