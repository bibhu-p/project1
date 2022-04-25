import React from 'react'
import { Link } from "react-router-dom";
const SideBar=() =>{
  
  return (
      
        <div class=" d-flex flex-column w-25  bg-secondary  align-items-center min-vh-100">
            <div className='mt-3'>
            <Link to="/admin/dashboard" className=" text-decoration-none">DashBoard</Link>
            </div>
            <div className='mt-3'>
            <Link to="/admin/users" className=" text-decoration-none" >Users</Link>
            </div>
            <div className='mt-3'>
            <Link to="/admin/movies" className=" text-decoration-none" >Movies</Link>
            </div>
        </div>
    
  ) 
}
export default SideBar;