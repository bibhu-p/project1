import React from 'react'
import { Link } from "react-router-dom";
const SideBar=() =>{
  
  return (
      
        <div class=" container d-flex flex-column w-25  bg-secondary  align-items-center min-vh-100 rounded-3 ">
            <div className='mt-3  p-2 w-100 bg-dark d-flex justify-content-center rounded-3'>
            <Link to="/admin/dashboard" className="text-decoration-none fs-4">DashBoard</Link>
            </div>
            <div className='mt-3  p-2 w-100 bg-dark d-flex justify-content-center rounded-3'>
            <Link to="/admin/users" className=" text-center text-decoration-none fs-4" >Users</Link>
            </div>
            <div className='mt-3  p-2 w-100 bg-dark d-flex justify-content-center rounded-3'>
            <Link to="/admin/movies" className=" text-decoration-none fs-4" >Movies</Link>
            </div>
        </div>
    
  ) 
}
export default SideBar;