import React from 'react'
import { Link } from "react-router-dom";
const SideBar=() =>{
  
  return (
      
        <div class=" container d-flex flex-column bg-white min-vh-100 sticky-top">

            <Link to="/admin/dashboard" className=" ln-div text-decoration-none text-dark fs-6 mt-5 rounded">
            <div className=' w-100  d-flex justify-content-start'>DashBoard</div>
            </Link>
            
            <Link to="/admin/users" className=" ln-div text-decoration-none text-dark fs-6 rounded">
            <div className=' w-100 d-flex justify-content-start'>Users</div>
            </Link>
            
            <Link to="/admin/movies" className=" ln-div text-decoration-none text-dark fs-6 rounded">
            <div className=' w-100 d-flex justify-content-start'>Movies</div>
            </Link>
        </div>
    
  ) 
}
export default SideBar;